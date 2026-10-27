(function () {
  'use strict';

  var data = window.CITY_DATA;
  var cfg = Sim.config(data);
  var agents = Sim.generateAgents(data, cfg);
  var BUS_COLORS = { L1: '#2b7bba', L2: '#8e5bc4', L3: '#1aa6a6' };
  var SVGNS = 'http://www.w3.org/2000/svg';

  var nodeById = {};
  data.neighbourhoods.forEach(function (n) { nodeById[n.id] = n; });
  var roadById = {};
  data.roads.forEach(function (r) { roadById[r.id] = r; });

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function sgn(x, d) {
    var v = +x.toFixed(d);
    if (v === 0) return (0).toFixed(d);
    return (v > 0 ? '+' : '-') + Math.abs(v).toFixed(d);
  }
  function shortName(n) { return n.id === 'cbd' ? 'CBD' : n.name; }

  function freshScenario() { return Events.base(data); }
  function clone(s) { return JSON.parse(JSON.stringify(s)); }
  function fmtK(n, d) { return (n / 1000).toFixed(d == null ? 1 : d) + 'k'; }
  function fmtMoney(n) { return (n < 0 ? '-' : '') + Math.abs(Math.round(n)).toLocaleString(); }

  // Workers plan around usual commute times, so everything is judged against the unchanged city.
  var normal = Economy.normalCity(data, agents, cfg);
  var scenario = freshScenario();
  var baselineScenario = clone(scenario);
  var austerityOn = !!(data.budget.austerity && data.budget.austerity.enabled);

  // A scenario can be reopened from the page address (#c=e3&f=1&r=shuttle...). Anything unknown is ignored.
  var hashParams = {};
  try {
    var hs = String(window.location.hash || '').replace(/^#/, '');
    if (hs) hs.split('&').forEach(function (kv) {
      var i = kv.indexOf('=');
      if (i > 0) hashParams[kv.slice(0, i)] = decodeURIComponent(kv.slice(i + 1));
    });
  } catch (e) { hashParams = {}; }
  if (hashParams.a === '0') austerityOn = false;
  var proj = null;
  var viewDay = 1;          // which day of the event the map and metrics show
  var viewScenario = null;  // the scenario as it applies on that day

  // The event with its responses built in (a shuttle needs a route, so this is cached).
  var appliedCache = {};
  function appliedFor(sc) {
    var key = JSON.stringify(sc);
    if (!appliedCache[key]) appliedCache[key] = Responses.apply(data, agents, sc, sc.responses || [], normal, cfg);
    return appliedCache[key];
  }
  var projCache = {};
  function projectionFor(sc) {
    var key = JSON.stringify([sc, austerityOn]);
    if (!projCache[key]) {
      projCache[key] = Economy.projectDays(data, agents, clone(appliedFor(sc)), normal, cfg, 14, { enabled: austerityOn });
    }
    return projCache[key];
  }
  // The city on one day: events end after their duration, and the austerity rule may have cut buses.
  function runView(sc, day) {
    var level = proj && proj.days[day - 1] ? proj.days[day - 1].service : 1;
    viewScenario = Economy.effective(data, appliedFor(sc), day, level);
    return Economy.runCity(data, agents, viewScenario, normal, cfg);
  }
  var baseline = runView(scenario, 1);
  var baselineProj = projectionFor(scenario);
  var result = baseline;
  var selectedArea = null;
  var playTimer = null;

  (function restoreFromHash() {
    var hp = hashParams, any = false;
    function ids(v) { return v ? v.split(',').filter(Boolean) : []; }
    ids(hp.c).forEach(function (id) {
      // Compare with the real ids: roadById['constructor'] would find a built-in property.
      if (data.roads.some(function (r) { return r.id === id; }) && scenario.closedRoads.indexOf(id) < 0) { scenario.closedRoads.push(id); any = true; }
    });
    ids(hp.b).forEach(function (kv) {
      var p = kv.split(':'), m = parseFloat(p[1]);
      if (data.busLines.some(function (l) { return l.id === p[0]; }) && isFinite(m)) {
        scenario.busFrequency[p[0]] = Math.max(0, Math.min(1.5, m)); any = true;
      }
    });
    if (hp.f === '1') { scenario.flood = true; any = true; }
    if (hp.h === '1') { scenario.heatwave = true; any = true; }
    if (hp.s === '1') { scenario.strike = true; any = true; }
    var known = Responses.list(data).map(function (r) { return r.id; });
    scenario.responses = ids(hp.r).filter(function (id) { return known.indexOf(id) >= 0; });
    var d = parseInt(hp.d, 10);
    if (d >= 1 && d <= 14) viewDay = d;
    if (any || scenario.responses.length || viewDay > 1) result = runView(scenario, viewDay);
  })();

  $('intro').textContent = data.neighbourhoods.length + ' neighbourhoods, ' + data.roads.length +
    ' roads, ' + data.busLines.length + ' bus lines. ' + agents.length.toLocaleString() +
    ' simulated agents stand for ' + (agents.length * cfg.agentRepresentsResidents).toLocaleString() +
    ' residents. Change something and watch what else moves.';

  // ------------------------------------------------------------------ map

  function svgEl(name, attrs, parent) {
    var n = document.createElementNS(SVGNS, name);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(n);
    return n;
  }

  var map = $('map');
  var riverEl = svgEl('path', { d: 'M0 43 C 20 38, 35 52, 55 46 S 85 40, 100 45', 'class': 'river' }, map);
  var heatWash = svgEl('rect', { x: 0, y: 0, width: 100, height: 100, 'class': 'heat-wash' }, map);
  var floodWash = svgEl('rect', { x: 0, y: 30, width: 100, height: 32, 'class': 'flood-wash' }, map);
  var rl = svgEl('text', { x: 3, y: 38.5, 'class': 'river-label' }, map);
  rl.textContent = 'River';
  var edgeLayer = svgEl('g', {}, map);
  var busLayer = svgEl('g', {}, map);
  var shuttleLayer = svgEl('g', {}, map);
  var nodeLayer = svgEl('g', {}, map);
  var edgeEls = {}, busEls = [], nodeEls = {};

  data.roads.forEach(function (r) {
    var a = nodeById[r.from], b = nodeById[r.to];
    var g = svgEl('g', {}, edgeLayer);
    var w = 0.8 + r.capacity / 450;
    var coords = { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
    if (r.bridge) svgEl('line', Object.assign({ 'class': 'bridge-under', 'stroke-width': w + 1.2 }, coords), g);
    var line = svgEl('line', Object.assign({ 'class': 'road', 'stroke-width': w }, coords), g);
    var hit = svgEl('line', Object.assign({ 'class': 'hit', 'stroke-width': 5 }, coords), g);
    var title = svgEl('title', {}, g);
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
    var label = svgEl('text', {
      x: (a.x + b.x) / 2 - dy / len * 2.8, y: (a.y + b.y) / 2 + dx / len * 2.8 + 0.8, 'class': 'edge-label'
    }, g);
    hit.addEventListener('click', function () { toggleRoad(r.id); });
    edgeEls[r.id] = { line: line, label: label, title: title };
  });

  data.busLines.forEach(function (l, li) {
    var segs = [];
    for (var k = 0; k < l.stops.length - 1; k++) {
      var a = nodeById[l.stops[k]], b = nodeById[l.stops[k + 1]];
      var ca = a.id < b.id ? a : b, cb = a.id < b.id ? b : a;
      var dx = cb.x - ca.x, dy = cb.y - ca.y, len = Math.hypot(dx, dy), off = (li - 1) * 1.1;
      var ox = -dy / len * off, oy = dx / len * off;
      segs.push(svgEl('line', {
        x1: a.x + ox, y1: a.y + oy, x2: b.x + ox, y2: b.y + oy,
        stroke: BUS_COLORS[l.id] || '#888', 'class': 'bus-line'
      }, busLayer));
    }
    busEls.push({ id: l.id, segs: segs });
  });

  data.neighbourhoods.forEach(function (n) {
    var r = 2.6 + Math.sqrt(n.agents) / 9;
    var g = svgEl('g', { 'class': 'node-g', tabindex: 0, role: 'button', 'aria-label': n.name + ': show details' }, nodeLayer);
    g.addEventListener('click', function () { selectArea(n.id); });
    g.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); selectArea(n.id); }
    });
    var ring = svgEl('circle', { cx: n.x, cy: n.y, r: r + 1, 'class': 'ring' }, g);
    var dot = svgEl('circle', { cx: n.x, cy: n.y, r: r, 'class': 'node-dot' }, g);
    var t = svgEl('text', { x: n.x, y: n.y + 1, 'class': 'node-min' }, g);
    var nm = svgEl('text', { x: n.x, y: n.y + r + 3.2, 'class': 'node-name' }, g);
    nm.textContent = shortName(n);
    var sub = svgEl('text', { x: n.x, y: n.y + r + 5.8, 'class': 'node-sub' }, g);
    var title = svgEl('title', {}, g);
    nodeEls[n.id] = { g: g, ring: ring, dot: dot, t: t, sub: sub, title: title };
  });

  var legend = data.busLines.map(function (l) {
    return '<span><span class="swatch" style="border-color:' + BUS_COLORS[l.id] + '"></span>' + esc(l.name) + '</span>';
  }).join(' &nbsp; ');
  $('bus-legend').innerHTML = legend;

  function vcColor(vc) {
    if (vc > 1.5) return 'hsl(0,75%,30%)';
    var t = Math.max(0, Math.min(1, (vc - 0.3) / 1.0));
    return 'hsl(' + Math.round(130 * (1 - t)) + ',70%,45%)';
  }
  function minColor(m) {
    var t = Math.max(0, Math.min(1, (m - 12) / 40));
    return 'hsl(' + Math.round(130 * (1 - t)) + ',60%,38%)';
  }

  function paintMap(r) {
    r.edges.forEach(function (e) {
      var el = edgeEls[e.id];
      if (e.closed) {
        el.line.setAttribute('class', 'road closed');
        el.line.removeAttribute('stroke');
        el.label.textContent = e.flooded ? 'flooded' : 'closed';
        el.title.textContent = e.flooded ? e.name + ': under water (clears when the flood ends)' :
          e.name + ': closed (click to reopen)';
      } else {
        el.line.setAttribute('class', 'road');
        el.line.setAttribute('stroke', vcColor(e.vc));
        el.label.textContent = Math.round(e.vc * 100) + '%';
        el.title.textContent = e.name + ': ' + Math.round(e.vol) + ' of ' + Math.round(e.cap) +
          ' vehicles/h (' + Math.round(e.vc * 100) + '% full), delay ' + e.delay.toFixed(1) +
          ' min (click to close)';
      }
    });
    busEls.forEach(function (b, i) {
      var ln = r.lines[i];
      b.segs.forEach(function (s) {
        s.style.display = ln.active ? '' : 'none';
        s.setAttribute('stroke-dasharray', ln.mult < 0.999 ? '1.1 0.9' : '');
      });
    });
    r.byNbhd.forEach(function (n) {
      var el = nodeEls[n.id];
      var stranded = n.shares.none;
      el.dot.setAttribute('fill', stranded > 0.999 ? '#8a949e' : minColor(n.commute));
      el.t.textContent = stranded > 0.999 ? '-' : Math.round(n.commute);
      el.ring.setAttribute('class', stranded > 0.02 ? 'ring on' : 'ring');
      el.sub.textContent = stranded > 0.005 ? Math.round(stranded * 100) + '% no route' : '';
      el.title.textContent = n.name + ': ' + n.commute.toFixed(1) + ' min average commute; car ' +
        Math.round(n.shares.car * 100) + '%, bus ' + Math.round(n.shares.bus * 100) + '%, walk ' +
        Math.round(n.shares.walk * 100) + '%';
    });

    // Weather on the map: floodwater along the river, a warm tint in a heatwave.
    var vs = viewScenario || {};
    floodWash.setAttribute('class', vs.flood ? 'flood-wash on' : 'flood-wash');
    heatWash.setAttribute('class', vs.heatwave ? 'heat-wash on' : 'heat-wash');
    riverEl.setAttribute('class', vs.flood ? 'river high' : 'river');
    data.neighbourhoods.forEach(function (n) {
      nodeEls[n.id].g.setAttribute('class', n.id === selectedArea ? 'node-g sel' : 'node-g');
    });

    // Temporary lines (a response's shuttle) are drawn on top of the regular ones.
    while (shuttleLayer.firstChild) shuttleLayer.removeChild(shuttleLayer.firstChild);
    var temps = r.lines.filter(function (l) { return l.temporary && l.active; });
    temps.forEach(function (l) {
      for (var k = 0; k < l.stops.length - 1; k++) {
        var a = nodeById[l.stops[k]], b = nodeById[l.stops[k + 1]];
        var s = svgEl('line', { x1: a.x, y1: a.y, x2: b.x, y2: b.y, stroke: '#e08a00', 'class': 'shuttle-line' }, shuttleLayer);
        s.setAttribute('stroke-dasharray', '1.6 1');
      }
    });
    $('shuttle-legend').innerHTML = temps.length ? temps.map(function (l) {
      return '<span class="swatch" style="border-color:#e08a00;border-top-style:dashed"></span>' + esc(l.name);
    }).join(' &nbsp; ') : '';
  }

  // -------------------------------------------------------------- controls

  var sliderEls = {};
  var sliderHost = $('sliders');
  data.busLines.forEach(function (l) {
    var row = document.createElement('div');
    row.className = 'slider-row';
    row.innerHTML = '<label for="s-' + l.id + '"><span class="swatch" style="border-color:' + BUS_COLORS[l.id] +
      '"></span>' + esc(l.name) + '</label><input type="range" id="s-' + l.id +
      '" min="0" max="150" step="5" value="100"><output id="o-' + l.id + '"></output>';
    sliderHost.appendChild(row);
    var input = row.querySelector('input');
    sliderEls[l.id] = { input: input, out: row.querySelector('output') };
    input.addEventListener('input', function () {
      scenario.busFrequency[l.id] = +input.value / 100;
      update();
    });
  });

  function syncControls() {
    data.busLines.forEach(function (l) {
      var m = scenario.busFrequency[l.id], s = sliderEls[l.id];
      s.input.value = Math.round(m * 100);
      s.out.textContent = m <= 0.001 ? 'no service' :
        Math.round(m * 100) + '% (every ' + (l.headwayMin / m).toFixed(0) + ' min)';
    });
    $('btn-crown').setAttribute('aria-pressed', scenario.closedRoads.indexOf('e3') >= 0);
    $('btn-flood').setAttribute('aria-pressed', scenario.flood);
    $('btn-heat').setAttribute('aria-pressed', scenario.heatwave);
    $('btn-strike').setAttribute('aria-pressed', scenario.strike);
    $('chk-austerity').checked = austerityOn;
    $('view-day').value = viewDay;
    $('view-day-out').textContent = 'day ' + viewDay + (viewDay === 1 ? ' (events at full strength)' : '');
    $('event-line').textContent = 'Event: ' + Events.describe(data, scenario) + '.';
    var ids = scenario.responses || [];
    $('resp-line').innerHTML = ids.length ?
      'Responses in force: <b>' + esc(Responses.label(data, ids)) + '</b> (' + fmtK(Responses.costOf(data, ids), 0) + ' to start)' :
      'No responses in force.';
    $('btn-clear-resp').style.display = ids.length ? '' : 'none';
  }

  function toggleRoad(id) {
    var rd = roadById[id];
    if (scenario.flood && rd && rd.floodProne) return;   // under water: only the flood ending reopens it
    var i = scenario.closedRoads.indexOf(id);
    if (i >= 0) scenario.closedRoads.splice(i, 1); else scenario.closedRoads.push(id);
    update();
  }
  function setAllBus(m) { data.busLines.forEach(function (l) { scenario.busFrequency[l.id] = m; }); }
  function goToDay(d) { viewDay = d; result = runView(scenario, viewDay); paintAll(result); }

  $('btn-cut').addEventListener('click', function () { setAllBus(0.7); update(); });
  $('btn-strike').addEventListener('click', function () { scenario.strike = !scenario.strike; update(); });
  $('btn-surprise').addEventListener('click', function () {
    var responses = scenario.responses;
    scenario = Events.build(data, Events.random(data));
    scenario.responses = responses;   // keep any plan in force: does it survive the surprise?
    viewDay = 1;
    update();
  });
  $('view-day').addEventListener('input', function (ev) { goToDay(+ev.target.value); });
  $('btn-clear-resp').addEventListener('click', function () { scenario.responses = []; update(); });
  $('btn-crown').addEventListener('click', function () { toggleRoad('e3'); });
  $('btn-flood').addEventListener('click', function () { scenario.flood = !scenario.flood; update(); });
  $('btn-heat').addEventListener('click', function () { scenario.heatwave = !scenario.heatwave; update(); });
  $('chk-austerity').addEventListener('change', function (ev) {
    austerityOn = !!ev.target.checked;
    baselineProj = projectionFor(baselineScenario);
    update();
  });
  $('btn-reset').addEventListener('click', function () {
    scenario = freshScenario();
    baselineScenario = clone(scenario);
    proj = null; viewDay = 1;
    baseline = runView(scenario, 1);
    baselineProj = projectionFor(baselineScenario);
    $('baseline-note').textContent = 'changes shown against the normal city';
    update();
  });
  $('btn-baseline').addEventListener('click', function () {
    baseline = result;
    baselineScenario = clone(scenario);
    baselineProj = projectionFor(baselineScenario);
    $('baseline-note').textContent = 'changes shown against your saved baseline';
    paintAll(result);
    scheduleProjection();
  });

  // --------------------------------------------------------------- metrics

  var METRICS = [
    { group: 'Transport' },
    { label: 'Average commute', unit: 'min', d: 1, good: 'low', get: function (r) { return r.summary.commute; } },
    { label: 'Cannot reach work', unit: '%', d: 1, good: 'low', get: function (r) { return r.summary.shares.none * 100; } },
    { label: 'Car share', unit: '%', d: 1, get: function (r) { return r.summary.shares.car * 100; } },
    { label: 'Bus share', unit: '%', d: 1, get: function (r) { return r.summary.shares.bus * 100; } },
    { label: 'Walk share', unit: '%', d: 1, get: function (r) { return r.summary.shares.walk * 100; } },
    { label: 'Congestion index', unit: '', d: 2, good: 'low', sub: 'traffic-weighted load / capacity',
      get: function (r) { return r.summary.congestionIndex; } },
    { label: 'Busiest road', unit: '% full', d: 0, good: 'low', get: function (r) { return r.summary.maxVC * 100; },
      subFn: function (r) { return r.summary.maxVCEdge; } },
    { label: 'Fullest bus line', unit: '% full', d: 0, good: 'low',
      get: function (r) { return Math.min(999, Math.max.apply(null, r.lines.map(function (l) { return l.util; })) * 100); },
      subFn: function (r) {
        var best = r.lines.reduce(function (a, l) { return !a || l.util > a.util ? l : a; }, null);
        return best ? best.name : '';
      } },
    { label: 'Longest commute', unit: 'min', d: 1, good: 'low', get: function (r) { return r.summary.worstCommute; },
      subFn: function (r) { return r.summary.worstNbhd; } },
    { label: 'Equity gap', unit: 'min', d: 1, good: 'low', sub: 'worst area minus best area',
      get: function (r) { return r.summary.equityGap; } },

    { group: 'Businesses, utilities and budget' },
    { label: 'Workers arriving late', unit: '%', d: 1, good: 'low',
      get: function (r) { return r.econ.totals.lateShare * 100; },
      subFn: function (r) { return 'avg ' + r.econ.totals.lateMin.toFixed(1) + ' min past usual + grace'; } },
    { label: 'Productivity', unit: '%', d: 1, good: 'high', sub: 'lateness and missing workers',
      get: function (r) { return r.econ.totals.productivity * 100; } },
    { label: 'Shop visits', unit: '/day', d: 0, good: 'high', get: function (r) { return r.econ.totals.visits; } },
    { label: 'Business output', unit: 'k/day', d: 1, good: 'high', get: function (r) { return r.econ.totals.revenue / 1000; },
      sub: 'offices + industry + retail' },
    { label: 'Budget balance', unit: 'k/day', d: 1, good: 'high', get: function (r) { return r.econ.budget.balance / 1000; },
      subFn: function (r) { return r.econ.budget.oneOff ? 'plus ' + fmtK(r.econ.budget.oneOff, 0) + ' repair bill' : 'tax + fares - spending'; } },
    { label: 'Travel time cost', unit: 'k/day', d: 1, good: 'low', get: function (r) { return r.econ.timeCost / 1000; },
      sub: 'value of residents’ time on the move' },
    { label: 'Power demand', unit: '% of supply', d: 0, good: 'low', get: function (r) { return r.econ.power.load * 100; },
      subFn: function (r) { return r.econ.power.shortfall > 0.001 ? Math.round(r.econ.power.shortfall * 100) + '% blackouts' : 'no blackouts'; } },
    { label: 'Water demand', unit: '% of supply', d: 0, good: 'low', get: function (r) { return r.econ.water.load * 100; },
      subFn: function (r) { return r.econ.water.shortfall > 0.001 ? Math.round(r.econ.water.shortfall * 100) + '% rationed' : 'no rationing'; } }
  ];

  function deltaHtml(delta, d, good) {
    var rounded = +delta.toFixed(d);
    if (rounded === 0) return '<span class="flat">no change</span>';
    var dir = delta > 0 ? 'up' : 'down';
    var tone = good ? ((good === 'low') === (delta < 0) ? 'good' : 'bad') : 'flat';
    var cls = good ? dir + '-' + tone : 'flat';
    var arrow = delta > 0 ? '&#9650; ' : '&#9660; ';
    return '<span class="' + cls + '">' + arrow + sgn(delta, d) + '</span>';
  }

  function paintMetrics(r) {
    $('metrics').innerHTML = METRICS.map(function (m) {
      if (m.group) return '<div class="mgroup">' + esc(m.group) + '</div>';
      var v = m.get(r), b = m.get(baseline);
      var sub = m.subFn ? m.subFn(r) : (m.sub || '');
      return '<div class="metric"><div class="lbl">' + esc(m.label) + '</div><div class="val">' +
        v.toFixed(m.d) + '<small>' + esc(m.unit) + '</small></div><div class="dlt">' +
        deltaHtml(v - b, m.d, m.good) + '</div><div class="sub">' + esc(sub) + '</div></div>';
    }).join('');
  }

  // ---------------------------------------------------------------- tables

  function paintTables(r) {
    var bBy = {};
    baseline.byNbhd.forEach(function (n) { bBy[n.id] = n; });
    var rows = r.byNbhd.map(function (n) {
      var b = bBy[n.id];
      var d = n.commute - b.commute;
      var dRound = +d.toFixed(1);
      var cls = dRound > 0 ? 'bad' : dRound < 0 ? 'good' : '';
      var none = n.shares.none * 100;
      return '<tr><td>' + esc(n.name) + '</td><td>' + n.commute.toFixed(1) + ' min</td><td class="' + cls + '">' +
        (dRound === 0 ? '-' : sgn(d, 1)) + '</td><td>' + Math.round(n.shares.car * 100) + '%</td><td>' +
        Math.round(n.shares.bus * 100) + '%</td><td>' + Math.round(n.shares.walk * 100) + '%</td><td class="' +
        (none > 0.5 ? 'bad' : '') + '">' + (none > 0.5 ? none.toFixed(0) + '%' : '-') + '</td></tr>';
    }).join('');
    $('nbhd-table').innerHTML = '<thead><tr><th>Area</th><th>Commute</th><th>vs base</th><th>Car</th><th>Bus</th>' +
      '<th>Walk</th><th>No route</th></tr></thead><tbody>' + rows + '</tbody>';

    var bEdge = {};
    baseline.edges.forEach(function (e) { bEdge[e.id] = e; });
    var sorted = r.edges.slice().sort(function (a, b) { return (b.vc == null ? -1 : b.vc) - (a.vc == null ? -1 : a.vc); });
    var rrows = sorted.map(function (e) {
      var be = bEdge[e.id];
      var dv = e.vc != null && be.vc != null ? (e.vc - be.vc) * 100 : null;
      var dcls = dv == null ? '' : dv > 0.5 ? 'bad' : dv < -0.5 ? 'good' : '';
      return '<tr><td>' + esc(e.name) + (e.bridge ? ' <span class="hint">bridge</span>' : '') + '</td><td>' +
        (e.closed ? 'closed' : Math.round(e.vc * 100) + '%') + '</td><td class="' + dcls + '">' +
        (dv == null || Math.abs(dv) < 0.5 ? '-' : sgn(dv, 0) + ' pts') + '</td><td>' +
        (e.closed ? '-' : '+' + e.delay.toFixed(1) + ' min') + '</td><td><input type="checkbox" data-road="' +
        e.id + '" ' + (e.closed ? 'checked' : '') + (e.flooded ? ' disabled title="Under water"' : '') +
        ' aria-label="Close ' + esc(e.name) + '"></td></tr>';
    }).join('');
    $('road-table').innerHTML = '<thead><tr><th>Road</th><th>Load</th><th>vs base</th><th>Delay</th><th>Closed</th></tr></thead><tbody>' +
      rrows + '</tbody>';
  }

  function paintEconomy(r) {
    var bz = {};
    baseline.econ.zones.forEach(function (z) { bz[z.id] = z; });
    var rows = r.econ.zones.map(function (z) {
      var b = bz[z.id];
      var dRev = b.revenue ? (z.revenue / b.revenue - 1) * 100 : 0;
      var dVis = b.visits ? (z.visits / b.visits - 1) * 100 : 0;
      var rc = +dRev.toFixed(0) < 0 ? 'bad' : +dRev.toFixed(0) > 0 ? 'good' : '';
      var vc = +dVis.toFixed(0) < 0 ? 'bad' : +dVis.toFixed(0) > 0 ? 'good' : '';
      return '<tr><td>' + esc(z.name) + '</td><td>' + fmtK(z.revenue, 0) + '</td><td class="' + rc + '">' +
        (+dRev.toFixed(0) === 0 ? '-' : sgn(dRev, 0) + '%') + '</td><td>' + Math.round(z.presence * 100) + '%</td><td class="' +
        (z.lateShare > 0.005 ? 'bad' : '') + '">' + (z.lateShare > 0.005 ? Math.round(z.lateShare * 100) + '% (' + z.lateMin.toFixed(1) + 'm)' : '-') +
        '</td><td class="' + vc + '">' + (+dVis.toFixed(0) === 0 ? '-' : sgn(dVis, 0) + '%') + '</td></tr>';
    }).join('');
    $('econ-table').innerHTML = '<thead><tr><th>Area</th><th>Output/day</th><th>vs base</th><th>Staff at work</th>' +
      '<th>Late (avg min)</th><th>Shop visits</th></tr></thead><tbody>' + rows + '</tbody>';
  }

  function paintBudget(r) {
    var b = r.econ.budget, bb = baseline.econ.budget;
    var lines = [
      { l: 'Business tax', v: b.businessTax, bv: bb.businessTax, good: 'high' },
      { l: 'Income tax', v: b.incomeTax, bv: bb.incomeTax, good: 'high' },
      { l: 'Bus fares', v: b.fares, bv: bb.fares, good: 'high' },
      { l: 'Income', v: b.income, bv: bb.income, good: 'high', strong: true },
      { l: 'Bus operations', v: -b.busOps, bv: -bb.busOps, good: 'high' },
      { l: 'Other services', v: -b.baseServices, bv: -bb.baseServices, good: 'high' },
      { l: 'Daily balance', v: b.balance, bv: bb.balance, good: 'high', strong: true }
    ];
    if (b.oneOff) lines.push({ l: 'One-off road repairs (day 1)', v: -b.oneOff, bv: 0, good: 'high' });
    var spend = viewScenario && viewScenario.responseOneOff || 0;
    if (spend) lines.push({ l: 'Response spending (day 1)', v: -spend, bv: 0, good: 'high' });
    $('budget-table').innerHTML = '<thead><tr><th>Credits per day</th><th>Now</th><th>vs base</th></tr></thead><tbody>' +
      lines.map(function (x) {
        var d = x.v - x.bv, dr = Math.round(d);
        var cls = dr === 0 ? '' : (dr > 0 ? 'good' : 'bad');
        return '<tr' + (x.strong ? ' class="strong"' : '') + '><td>' + esc(x.l) + '</td><td>' + fmtMoney(x.v) + '</td><td class="' + cls + '">' +
          (dr === 0 ? '-' : (dr > 0 ? '+' : '-') + Math.abs(dr).toLocaleString()) + '</td></tr>';
      }).join('') + '</tbody>';
    paintOutlook();
  }

  function paintOutlook() {
    var host = $('outlook');
    if (!proj) {
      host.innerHTML = '<p class="hint">Calculating the 14-day outlook&hellip;</p>';
      return;
    }
    var W = 300, H = 130, L = 34, R = 8, T = 10, Bm = 20;
    var band = spreadFresh() ? spread.result.reserve : null;
    var all = proj.days.map(function (d) { return d.reserve; }).concat(baselineProj.days.map(function (d) { return d.reserve; }), [0],
      band ? band.min.concat(band.max) : []);
    var lo = Math.min.apply(null, all), hi = Math.max.apply(null, all);
    if (hi - lo < 1000) { hi += 500; lo -= 500; }
    function X(i) { return L + (W - L - R) * i / (proj.days.length - 1); }
    function Y(v) { return T + (H - T - Bm) * (1 - (v - lo) / (hi - lo)); }
    function path(days) { return days.map(function (d, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(d.reserve).toFixed(1); }).join(' '); }
    var bandPath = '';
    if (band && band.min.length === proj.days.length) {
      bandPath = band.max.map(function (v, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1); }).join(' ') + ' ' +
        band.min.map(function (v, i) { return 'L' + X(band.min.length - 1 - i).toFixed(1) + ' ' + Y(band.min[band.min.length - 1 - i]).toFixed(1); }).join(' ') + ' Z';
    }
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="chart" role="img" aria-label="Reserve over 14 days">' +
      (bandPath ? '<path d="' + bandPath + '" class="band"/>' : '') +
      '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(0).toFixed(1) + '" y2="' + Y(0).toFixed(1) + '" class="zero"/>' +
      '<path d="' + path(baselineProj.days) + '" class="ln-base"/>' +
      '<path d="' + path(proj.days) + '" class="ln-now"/>' +
      (Math.abs(Y(hi) - Y(0)) > 10 ? '<text x="' + (L - 4) + '" y="' + (Y(hi) + 3).toFixed(1) + '" class="ax" text-anchor="end">' + fmtK(hi, 0) + '</text>' : '') +
      (Math.abs(Y(lo) - Y(0)) > 10 ? '<text x="' + (L - 4) + '" y="' + (Y(lo) + 3).toFixed(1) + '" class="ax" text-anchor="end">' + fmtK(lo, 0) + '</text>' : '') +
      '<text x="' + (L - 4) + '" y="' + (Y(0) + 3).toFixed(1) + '" class="ax" text-anchor="end">0</text>' +
      '<text x="' + L + '" y="' + (H - 5) + '" class="ax">day 1</text>' +
      '<text x="' + (W - R) + '" y="' + (H - 5) + '" class="ax" text-anchor="end">day 14</text></svg>';
    var last = proj.days[proj.days.length - 1], bl = baselineProj.days[baselineProj.days.length - 1];
    var msg = proj.reserveOutDay ? 'Reserve runs out on <b>day ' + proj.reserveOutDay + '</b>.' : 'Reserve stays positive.';
    if (proj.minService < 0.999) msg += ' Bus service is cut to <b>' + Math.round(proj.minService * 100) + '%</b> at its worst, so the commute peaks at <b>' +
      proj.summary.peakCommute.toFixed(1) + ' min</b> (normal ' + bl.commute.toFixed(1) + ')' +
      (proj.finalService >= 0.999 ? ', then service is restored.' : ' and service is still reduced on day 14.');
    host.innerHTML = '<div class="legend"><span><span class="swatch" style="border-color:var(--accent)"></span>this scenario</span>' +
      '<span><span class="swatch" style="border-color:var(--muted);border-top-style:dashed"></span>baseline</span>' +
      (band ? '<span><span class="swatch" style="border-color:var(--accent);opacity:.35;border-top-width:7px"></span>range over ' + spread.result.n + ' cities</span>' : '') +
      '<span>Reserve on day 14: <b>' + fmtK(last.reserve, 0) + '</b> (baseline ' + fmtK(bl.reserve, 0) + ')</span></div>' + svg +
      '<p class="note" style="margin-top:4px">' + msg + '</p>';
  }

  $('road-table').addEventListener('change', function (ev) {
    var id = ev.target && ev.target.getAttribute && ev.target.getAttribute('data-road');
    if (id) toggleRoad(id);
  });

  // ------------------------------------------------------------------- why

  function explain(r, b) {
    var causes = [];
    var closed = r.edges.filter(function (e) { return e.closed; }).map(function (e) { return e.name; });
    var closedManual = r.edges.filter(function (e) { return e.closed && !e.flooded; }).map(function (e) { return e.name; });
    var floodedN = r.edges.filter(function (e) { return e.flooded; }).length;
    if (closedManual.length) causes.push(closedManual.join(', ') + (closedManual.length > 1 ? ' are' : ' is') + ' closed');
    if (floodedN) causes.push('a river flood puts ' + floodedN + ' roads under water, cuts water supply by ' +
      Math.round(data.utilities.water.floodSupplyReduction * 100) + '% and leaves a repair bill');
    r.lines.forEach(function (l) {
      if (!l.temporary && Math.abs(l.mult - 1) > 0.001) {
        causes.push(l.name + ' runs at ' + Math.round(l.mult * 100) + '% of normal service' +
          (l.active ? ' (a bus every ' + l.headway.toFixed(0) + ' min instead of ' + l.baseHeadway + ')' : ' (no buses)'));
      }
    });
    if (viewScenario.heatwave) causes.push('a heatwave makes walking ' + cfg.heatwaveWalkPenaltyMultiplier + 'x less attractive and pushes power and water demand up');
    var respIds = scenario.responses || [];
    var plan = respIds.length ? appliedFor(scenario) : null;
    if (!causes.length) {
      var hadEvents = Events.describe(data, scenario) !== 'normal city';
      if (hadEvents) {
        return [{ tag: 'Recovered', text: 'By day ' + viewDay + ' the events have ended and the city is back to normal service' +
          (respIds.length ? ', but the plan (' + Responses.label(data, respIds) + ') is still in force.' : '.') +
          ' Slide the day control back to see the worst of it.' }];
      }
      return [{ tag: 'Baseline', text: 'This is the normal city. Move a slider, click a road on the map, press a preset or "Surprise me", and the chain of effects will be traced here.' }];
    }

    var steps = [{ tag: 'Change', text: causes.join('; ').replace(/^./, function (c) { return c.toUpperCase(); }) + '.' }];
    if (viewDay > 1) steps[0].text += ' (Day ' + viewDay + ' of the event.)';
    if (respIds.length) {
      steps.push({ tag: 'Response', text: respIds.map(function (id) {
        var rr = Responses.responseById(data, id);
        return rr.name + ': ' + rr.how;
      }).join(' ') + ' Starting cost ' + fmtK(plan.responseOneOff, 0) + '.' + (plan.notes && plan.notes.length ? ' ' + plan.notes.join(' ') : '') });
    }

    var dc = (r.summary.shares.car - b.summary.shares.car) * 100;
    var db = (r.summary.shares.bus - b.summary.shares.bus) * 100;
    var dw = (r.summary.shares.walk - b.summary.shares.walk) * 100;
    var dn = (r.summary.shares.none - b.summary.shares.none) * 100;
    if (Math.max(Math.abs(dc), Math.abs(db), Math.abs(dw), Math.abs(dn)) >= 0.3) {
      var why = '';
      var busWorse = r.lines.some(function (l) {
        var bl = b.lines.filter(function (x) { return x.id === l.id; })[0];   // a new shuttle line has no "before"
        return bl && l.mult < bl.mult - 0.001;
      });
      if (dn >= 0.3 && db < -0.3) why = ' Bus riders cut off by the closure have no way to travel, and some other riders switch to cars.';
      else if (busWorse && db < -0.3 && dc > 0.3) why = ' Longer waits and crowded buses make the bus less attractive, so some riders switch to cars.';
      else if (dw < -0.3) why = ' Heat makes walking less attractive.';
      else if (dc < -0.3 && db > 0.3) why = ' Better bus service or heavier traffic pushes drivers onto buses.';
      var parts = 'Car ' + sgn(dc, 1) + ' pts, bus ' + sgn(db, 1) + ' pts, walking ' + sgn(dw, 1) + ' pts';
      if (dn >= 0.3) parts += ', no route ' + sgn(dn, 1) + ' pts';
      steps.push({ tag: 'Mode choice', text: parts + '.' + why });
    }

    var bEdge = {};
    b.edges.forEach(function (e) { bEdge[e.id] = e; });
    var moved = r.edges.filter(function (e) {
      return !e.closed && bEdge[e.id].vc != null && Math.abs(e.vc - bEdge[e.id].vc) >= 0.03;
    }).sort(function (x, y) {
      return Math.abs(y.vc - bEdge[y.id].vc) - Math.abs(x.vc - bEdge[x.id].vc);
    }).slice(0, 3);
    if (moved.length) {
      steps.push({
        tag: 'Roads', text: moved.map(function (e) {
          return e.name + ' goes from ' + Math.round(bEdge[e.id].vc * 100) + '% to ' + Math.round(e.vc * 100) +
            '% full' + (e.delay >= 0.1 ? ' (' + e.delay.toFixed(1) + ' min delay)' : '');
        }).join('; ') + '.' + (closed.length ? ' Traffic from the closed road reroutes onto these.' : '')
      });
    } else if (closed.length) {
      steps.push({ tag: 'Roads', text: 'Little traffic used the closed road, so other roads barely change.' });
    }

    function lineBefore(l) { return b.lines.filter(function (x) { return x.id === l.id; })[0]; }
    var crowded = r.lines.filter(function (l) {
      var bl = lineBefore(l);
      return l.active && (l.util > 1 || (bl && Math.abs(l.util - bl.util) >= 0.15));
    }).map(function (l) {
      var bl = lineBefore(l);
      return l.name + ' peak load is ' + Math.round(l.util * 100) + '% of capacity' + (bl ? ' (was ' + Math.round(bl.util * 100) + '%)' : ' (new line)');
    });
    if (crowded.length) steps.push({ tag: 'Buses', text: crowded.join('; ') + '. Over 100% means riders wait longer and ride crowded.' });

    var bBy = {};
    b.byNbhd.forEach(function (n) { bBy[n.id] = n; });
    var dCommute = r.summary.commute - b.summary.commute;
    if (Math.abs(dCommute) >= 0.05) {
      // Leave out areas where most people are cut off: the few who can still
      // travel there would make the area look like it improved.
      var worst = r.byNbhd.filter(function (n) { return n.shares.none < 0.2 && bBy[n.id].shares.none < 0.2; })
        .map(function (n) { return { n: n, d: n.commute - bBy[n.id].commute }; })
        .sort(function (x, y) { return Math.abs(y.d) - Math.abs(x.d); })[0];
      var pct = b.summary.commute ? dCommute / b.summary.commute * 100 : 0;
      steps.push({
        tag: 'Commutes', text: 'Average commute ' + b.summary.commute.toFixed(1) + ' to ' + r.summary.commute.toFixed(1) +
          ' min (' + sgn(dCommute, 1) + ', ' + sgn(pct, 0) + '%).' +
          (worst && Math.abs(worst.d) >= 0.3 ? ' Biggest change: ' + worst.n.name + ' (' + sgn(worst.d, 1) + ' min).' : '')
      });
    }

    if (dn >= 0.2) {
      var cut = r.byNbhd.filter(function (n) { return n.shares.none > 0.005; })
        .map(function (n) { return n.name + ' ' + Math.round(n.shares.none * 100) + '%'; });
      steps.push({
        tag: 'Access', text: Math.round(r.summary.shares.none * 1000) / 10 + '% of residents have no way to reach their job (' + cut.join(', ') +
          '). The average commute above leaves them out, so it can look better than reality.'
      });
    }

    var dGap = r.summary.equityGap - b.summary.equityGap;
    if (Math.abs(dGap) >= 0.5) {
      steps.push({ tag: 'Fairness', text: 'The gap between the best and worst area ' + (dGap > 0 ? 'widens' : 'narrows') + ' from ' +
        b.summary.equityGap.toFixed(1) + ' to ' + r.summary.equityGap.toFixed(1) + ' min.' });
    }

    econSteps(r, b).forEach(function (s) { steps.push(s); });

    if (steps.length === 1) steps.push({ tag: 'Result', text: 'Compared with the baseline, nothing changed noticeably.' });
    return steps;
  }

  function econSteps(r, b) {
    var er = r.econ, eb = b.econ, out = [];
    var tol = cfg.latenessToleranceMin;

    var dLate = (er.totals.lateShare - eb.totals.lateShare) * 100;
    var dPres = (er.totals.presentShare - eb.totals.presentShare) * 100;
    var dProd = (er.totals.productivity - eb.totals.productivity) * 100;
    if (Math.abs(dLate) >= 0.5 || Math.abs(dPres) >= 0.3 || Math.abs(dProd) >= 0.1) {
      var parts = [];
      if (er.totals.lateShare > 0.005) parts.push(Math.round(er.totals.lateShare * 100) + '% of workers arrive late (on average ' +
        er.totals.lateMin.toFixed(1) + ' min beyond their usual commute plus a ' + tol + '-min grace)');
      if (dPres <= -0.3) parts.push((-dPres).toFixed(1) + '% of workers cannot reach work at all and can only partly work from home (' +
        Math.round(cfg.strandedProductivity * 100) + '% output)');
      out.push({ tag: 'Workers', text: (parts.length ? parts.join('; ') + '. ' : '') + 'Productivity ' +
        (eb.totals.productivity * 100).toFixed(1) + '% to ' + (er.totals.productivity * 100).toFixed(1) + '%.' });
    }

    var dVis = eb.totals.visits ? (er.totals.visits / eb.totals.visits - 1) * 100 : 0;
    if (Math.abs(dVis) >= 0.5) {
      out.push({ tag: 'Shopping', text: (dVis < 0 ? 'Longer or impossible trips mean fewer shop visits: ' : 'Shorter trips mean more shop visits: ') +
        sgn(dVis, 1) + '% (' + Math.round(eb.totals.visits).toLocaleString() + ' to ' + Math.round(er.totals.visits).toLocaleString() +
        ' a day). Retail revenue ' + fmtK(eb.totals.retail, 0) + ' to ' + fmtK(er.totals.retail, 0) + '.' });
    }

    if (er.power.shortfall > 0.001) {
      out.push({ tag: 'Power', text: 'Demand reaches ' + Math.round(er.power.load * 100) + '% of supply, so the grid blacks out about ' +
        Math.round(er.power.shortfall * 100) + '% of the time and businesses lose hours. Traffic signals fail too: roads lose ' +
        Math.round((1 - er.signalScale) * 100) + '% of capacity, which feeds back into congestion.' });
    }
    if (er.water.shortfall > 0.001) {
      out.push({ tag: 'Water', text: 'Demand is ' + Math.round(er.water.load * 100) + '% of available supply, so water is rationed about ' +
        Math.round(er.water.shortfall * 100) + '% of the time. Industry is hit hardest.' });
    }

    var dRev = eb.totals.revenue ? (er.totals.revenue / eb.totals.revenue - 1) * 100 : 0;
    if (Math.abs(dRev) >= 0.3) {
      out.push({ tag: 'Revenue', text: 'Business output ' + fmtK(eb.totals.revenue, 0) + ' to ' + fmtK(er.totals.revenue, 0) +
        ' a day (' + sgn(dRev, 1) + '%): offices ' + sgn((er.totals.office - eb.totals.office) / 1000, 1) + 'k, industry ' +
        sgn((er.totals.industry - eb.totals.industry) / 1000, 1) + 'k, retail ' + sgn((er.totals.retail - eb.totals.retail) / 1000, 1) + 'k.' });
    }

    var dBal = er.budget.balance - eb.budget.balance;
    if (Math.abs(dBal) >= 100 || er.budget.oneOff) {
      var txt = 'Income ' + sgn((er.budget.income - eb.budget.income) / 1000, 1) + 'k and bus operating cost ' +
        sgn((er.budget.busOps - eb.budget.busOps) / 1000, 1) + 'k a day: balance ' + fmtK(eb.budget.balance) + ' to ' + fmtK(er.budget.balance) + '.';
      if (er.budget.oneOff) txt += ' Plus a one-off repair bill of ' + fmtK(er.budget.oneOff, 0) + '.';
      var dTime = er.timeCost - eb.timeCost;
      if (dBal > 0 && dTime > 1000) txt += ' The budget only looks better because the city spends less on buses: residents lose about ' +
        Math.round(dTime / 1000) + 'k a day in travel time.';
      out.push({ tag: 'Budget', text: txt });
    }

    if (proj && proj.minService < 0.999) {
      var low = proj.days.reduce(function (a, d) { return !a || d.revenue < a.revenue ? d : a; }, null);
      out.push({ tag: 'Feedback', text: 'The reserve runs out on day ' + proj.reserveOutDay + ', so the austerity rule trims bus service 10% a day, down to ' +
        Math.round(proj.minService * 100) + '% at its worst. Commutes peak at ' + proj.summary.peakCommute.toFixed(1) + ' min (normal ' +
        proj.summary.refCommute.toFixed(1) + ') and business output dips to ' + fmtK(low.revenue, 0) + ' on day ' + low.day +
        (proj.finalService >= 0.999 ? '; service is back to normal by day 14.' : '; service is still reduced on day 14.') +
        ' The budget decision feeds back into transport and the economy.' });
    } else if (proj && proj.reserveOutDay) {
      out.push({ tag: 'Feedback', text: 'The reserve runs out on day ' + proj.reserveOutDay + ' and the austerity rule is off, so the deficit keeps growing.' });
    }
    return out;
  }

  function paintWhy(r) {
    $('why').innerHTML = explain(r, baseline).map(function (s) {
      return '<li><span class="tag">' + esc(s.tag) + '</span><span>' + esc(s.text) + '</span></li>';
    }).join('');
  }

  // ------------------------------------------------- area detail (click the map)

  function selectArea(id) {
    selectedArea = selectedArea === id ? null : id;
    paintArea(result);
    data.neighbourhoods.forEach(function (n) {
      nodeEls[n.id].g.setAttribute('class', n.id === selectedArea ? 'node-g sel' : 'node-g');
    });
  }

  function paintArea(r) {
    var host = $('area-detail');
    if (!selectedArea) { host.className = 'hint'; host.textContent = 'Click an area on the map for its details.'; return; }
    function by(list, id) { return list.filter(function (x) { return x.id === id; })[0]; }
    var n = by(r.byNbhd, selectedArea), bn = by(baseline.byNbhd, selectedArea);
    var z = by(r.econ.zones, selectedArea), bz = by(baseline.econ.zones, selectedArea);
    host.className = '';
    if (!n) { host.textContent = ''; return; }
    function cell(label, val, delta, good) {
      var cls = delta == null || Math.abs(delta) < 0.05 ? '' : ((delta > 0) === (good === 'high') ? 'good' : 'bad');
      return '<div><span>' + esc(label) + '</span><b>' + val + '</b>' +
        (delta == null || Math.abs(delta) < 0.05 ? '' : ' <span class="' + cls + '" style="display:inline">' + (delta > 0 ? '+' : '-') + Math.abs(delta).toFixed(1) + '</span>') + '</div>';
    }
    var dRev = z && bz && bz.revenue ? (z.revenue / bz.revenue - 1) * 100 : null;
    host.innerHTML = '<h3>' + esc(n.name) + '</h3><div class="grid">' +
      cell('Average commute', n.commute.toFixed(1) + ' min', n.commute - bn.commute, 'low') +
      cell('By car / bus / walk', Math.round(n.shares.car * 100) + '% / ' + Math.round(n.shares.bus * 100) + '% / ' + Math.round(n.shares.walk * 100) + '%') +
      cell('Cannot reach work', Math.round(n.shares.none * 100) + '%', (n.shares.none - bn.shares.none) * 100, 'low') +
      (z ? cell('Business output', fmtK(z.revenue, 0) + '/day', dRev, 'high') +
        cell('Staff at work', Math.round(z.presence * 100) + '%') +
        cell('Late workers', Math.round(z.lateShare * 100) + '%') : '') + '</div>';
  }

  // ------------------------------------------------------------- timeline

  // Which days each event is still running (they end after their set duration).
  function eventRuns(sc) {
    var D = sc.durations || {}, runs = [];
    function on(k, d) { return D[k] == null || d <= D[k]; }
    [['f', 'flood', sc.flood, 'River flood'], ['h', 'heatwave', sc.heatwave, 'Heatwave'],
     ['s', 'strike', sc.strike, 'Transit strike'], ['c', 'closures', (sc.closedRoads || []).length > 0, 'Road closures']]
      .forEach(function (e) {
        if (!e[2]) return;
        var days = [];
        for (var d = 1; d <= 14; d++) days.push(on(e[1], d));
        runs.push({ cls: e[0], name: e[3], days: days });
      });
    return runs;
  }

  function paintTimeline() {
    var runs = eventRuns(scenario);
    $('evbars').innerHTML = runs.map(function (e) {
      return '<div class="evbars" title="' + esc(e.name) + '">' + e.days.map(function (on) {
        return '<i' + (on ? ' class="' + e.cls + '"' : '') + '></i>';
      }).join('') + '</div>';
    }).join('');
    var html = '';
    for (var d = 1; d <= 14; d++) {
      var pd = proj && proj.days[d - 1];
      var anyOn = runs.some(function (e) { return e.days[d - 1]; });
      var cls = (d === viewDay ? 'sel' : '') + (runs.length && !anyOn ? ' over' : '');
      var label = 'Day ' + d + (pd ? ': commute ' + pd.commute.toFixed(0) + ' minutes, reserve ' + fmtK(pd.reserve, 0) +
        (pd.service < 0.999 ? ', bus service ' + Math.round(pd.service * 100) + '%' : '') : '');
      html += '<button type="button" data-day="' + d + '" class="' + cls + '" aria-pressed="' + (d === viewDay) + '" aria-label="' + esc(label) + '" title="' + esc(label) + '">' +
        '<span class="d">' + d + '</span><br>' +
        (pd ? '<span class="c">' + pd.commute.toFixed(0) + '</span><br><span class="r" style="color:' + (pd.reserve < 0 ? 'var(--bad)' : 'var(--muted)') + '">' + fmtK(pd.reserve, 0) + '</span>' +
          '<span class="tl-bars" style="background:' + minColor(pd.commute) + '"></span>' : '<span class="c">&middot;</span>') + '</button>';
    }
    $('timeline').innerHTML = html;
  }

  $('timeline').addEventListener('click', function (ev) {
    var b = ev.target.closest ? ev.target.closest('button[data-day]') : null;
    if (!b) return;
    stopPlay();
    goToDay(+b.getAttribute('data-day'));
  });

  function stopPlay() {
    if (playTimer) clearInterval(playTimer);
    playTimer = null;
    $('btn-play').innerHTML = '&#9654; Play';
  }
  function startPlay() {
    if (!proj) { clearTimeout(projTimer); proj = projectionFor(scenario); paintOutlook(); }
    if (viewDay >= 14) goToDay(1);
    $('btn-play').innerHTML = '&#10073;&#10073; Pause';
    playTimer = setInterval(function () {
      if (viewDay >= 14) { stopPlay(); return; }
      goToDay(viewDay + 1);
    }, 800);
  }
  $('btn-play').addEventListener('click', function () { if (playTimer) stopPlay(); else startPlay(); });

  // ------------------------------------------- ranges over several simulated cities

  // Works through a stepper (see uncertainty.js) a little at a time so the page stays responsive.
  function runStepper(st, isCurrent, onProgress, onDone) {
    function tick() {
      if (!isCurrent()) return;
      var t0 = Date.now(), done = false;
      while (Date.now() - t0 < 100 && !(done = st.step())) { /* work for a moment */ }
      onProgress(st.progress());
      if (!done) setTimeout(tick, 0); else onDone(st.result());
    }
    setTimeout(tick, 20);
  }

  var spread = { key: null, result: null, running: false, token: 0, done: 0, planned: 0 };
  function spreadKey() { return JSON.stringify([scenario, austerityOn]); }
  function spreadFresh() { return !!(spread.result && spread.key === spreadKey()); }

  function startSpread() {
    if (spread.running) return;
    var tok = ++spread.token;
    spread.running = true; spread.result = null; spread.key = spreadKey(); spread.done = 0; spread.planned = Uncertainty.DEFAULT_RUNS;
    paintRange();
    var st = Uncertainty.spread(data, clone(scenario), cfg, Uncertainty.DEFAULT_RUNS, { enabled: austerityOn });
    runStepper(st, function () { return tok === spread.token; },
      function (p) { spread.done = p.done; spread.planned = p.planned; paintRange(); },
      function (res) { spread.result = res; spread.running = false; paintRange(); paintOutlook(); });
  }
  $('btn-range').addEventListener('click', startSpread);

  function num(v, d) { return (+v.toFixed(d)).toFixed(d); }   // no "-0"
  function rng(st, d, unit) {
    return '<b>' + num(st.mean, d) + unit + '</b> <span class="rg">(' + num(st.min, d) + ' to ' + num(st.max, d) + ')</span>';
  }
  function paintRange() {
    var btn = $('btn-range'), host = $('sum-range');
    if (spread.running && spread.key !== spreadKey()) { spread.token++; spread.running = false; }   // the scenario moved on
    if (spread.running) {
      btn.disabled = true; btn.textContent = 'Checking… ' + spread.done + '/' + spread.planned;
      host.textContent = '';
      return;
    }
    btn.disabled = false;
    if (!spreadFresh()) { btn.textContent = 'Check across ' + Uncertainty.DEFAULT_RUNS + ' cities'; host.textContent = ''; return; }
    var m = spread.result.metrics, n = spread.result.n;
    btn.textContent = 'Re-check';
    host.innerHTML = 'Across ' + n + ' simulated cities (different homes, jobs and cars; same rules): commute ' + rng(m.commute, 1, ' min') +
      ' &middot; cannot reach work ' + rng(m.none, 1, '%') +
      ' &middot; output ' + rng({ mean: m.output.mean / 1000, min: m.output.min / 1000, max: m.output.max / 1000 }, 0, 'k') +
      ' &middot; reserve on day 14 ' + rng({ mean: m.finalReserve.mean / 1000, min: m.finalReserve.min / 1000, max: m.finalReserve.max / 1000 }, 0, 'k') + '.';
  }

  // -------------------------------------------------------------- summary

  function paintSummary(r) {
    var t = r.econ.totals, bt = baseline.econ.totals;
    var dC = r.summary.commute - baseline.summary.commute;
    var outPct = bt.revenue ? (t.revenue / bt.revenue - 1) * 100 : 0;
    var none = r.summary.shares.none * 100;
    var short = Math.max(r.econ.power.shortfall, r.econ.water.shortfall);
    var desc = Events.describe(data, scenario), normalCity = /normal city/.test(desc);
    var calm = normalCity && Math.abs(dC) < 0.05 && Math.abs(outPct) < 0.05 && !(scenario.responses || []).length;

    $('sum-head').textContent = calm ? 'Lumen Bay is running normally.' :
      'Day ' + viewDay + ' of 14' + (normalCity ? '' : ' · ' + desc.charAt(0).toUpperCase() + desc.slice(1)) + ': commutes ' +
      sgn(dC, 1) + ' min, business output ' + sgn(outPct, 1) + '%.';

    var pd = proj && proj.days[viewDay - 1];
    var budget;
    if (!pd) budget = { st: '', cls: '', v: 'Calculating…', s: '14-day outlook is being worked out' };
    else if (pd.service < 0.999) budget = { st: 'cuts', cls: 'bad', v: 'Reserve ' + fmtK(pd.reserve, 0), s: 'austerity: buses at ' + Math.round(pd.service * 100) + '%' };
    else if (pd.reserve < 0) budget = { st: 'overdrawn', cls: 'warn', v: 'Reserve ' + fmtK(pd.reserve, 0), s: 'balance ' + fmtK(pd.balance, 0) + '/day' };
    else budget = { st: 'ok', cls: 'ok', v: 'Reserve ' + fmtK(pd.reserve, 0), s: 'balance ' + fmtK(pd.balance, 0) + '/day' };

    var chips = [
      { k: 'Transport', st: none > 2 || dC >= 4 ? 'strained' : dC >= 1 || none > 0.5 ? 'slower' : 'ok',
        cls: none > 2 || dC >= 4 ? 'bad' : dC >= 1 || none > 0.5 ? 'warn' : 'ok',
        v: r.summary.commute.toFixed(1) + ' min commute', s: none > 0.5 ? Math.round(none) + '% cannot reach work' : sgn(dC, 1) + ' min vs baseline' },
      { k: 'Businesses', st: outPct <= -5 ? 'hurt' : outPct <= -1 ? 'dipping' : 'ok',
        cls: outPct <= -5 ? 'bad' : outPct <= -1 ? 'warn' : 'ok',
        v: fmtK(t.revenue, 0) + '/day output', s: sgn(outPct, 1) + '% · ' + Math.round(t.lateShare * 100) + '% of workers late' },
      { k: 'Utilities', st: short >= 0.1 ? 'short' : short > 0.001 ? 'tight' : 'ok',
        cls: short >= 0.1 ? 'bad' : short > 0.001 ? 'warn' : 'ok',
        v: 'Power ' + Math.round(r.econ.power.load * 100) + '% · water ' + Math.round(r.econ.water.load * 100) + '%',
        s: short > 0.001 ? (r.econ.power.shortfall > 0.001 ? Math.round(r.econ.power.shortfall * 100) + '% blackouts ' : '') +
          (r.econ.water.shortfall > 0.001 ? Math.round(r.econ.water.shortfall * 100) + '% water rationed' : '') : 'demand within supply' },
      { k: 'Budget', st: budget.st, cls: budget.cls, v: budget.v, s: budget.s }
    ];
    $('sum-chips').innerHTML = chips.map(function (c) {
      return '<div class="chip ' + c.cls + '"><span class="st">' + esc(c.st) + '</span><div class="k">' + c.k + '</div><div class="v">' +
        esc(c.v) + '</div><div class="s">' + esc(c.s) + '</div></div>';
    }).join('');

    var res = cmp.result, fresh = res && cmp.key === eventKey(scenario);
    var next;
    if (fresh) {
      var rows = res.rows.filter(function (x) { return x.oneOff <= cmp.budget; }), best = rows[0];
      next = best && best.ids.length ?
        'Best response within ' + fmtK(cmp.budget, 0) + ': <b>' + esc(best.name) + '</b>, which cuts 14-day harm by ' +
        fmtK(Math.abs(best.vsNothing), 0) + '. <button type="button" data-apply="' + esc(best.ids.join(',')) + '"' +
        (sameIds(scenario.responses || [], best.ids) ? ' disabled>In force' : '>Apply it') + '</button>' :
        'Doing nothing is the best option within ' + fmtK(cmp.budget, 0) + '.';
    } else if (!normalCity || (scenario.responses || []).length) {
      next = '<button type="button" id="sum-compare">Compare responses</button> to see what is worth doing about it.';
    } else {
      next = 'Try a preset on the right, press <b>Surprise me</b>, or click a road to close it.';
    }
    $('sum-next').innerHTML = next;
    paintRange();
  }

  $('sum-next').addEventListener('click', function (ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    var a = t.closest('button[data-apply]');
    if (a) { applyIds(a.getAttribute('data-apply')); return; }
    if (t.closest('#sum-compare')) $('btn-goto-compare').click();
  });

  // ----------------------------------------------------- shareable address

  function encodeState() {
    var q = [], sc = scenario;
    if (sc.closedRoads.length) q.push('c=' + sc.closedRoads.join(','));
    var bus = data.busLines.filter(function (l) { return sc.busFrequency[l.id] != null && Math.abs(sc.busFrequency[l.id] - 1) > 0.001; })
      .map(function (l) { return l.id + ':' + (+sc.busFrequency[l.id].toFixed(2)); });
    if (bus.length) q.push('b=' + bus.join(','));
    if (sc.flood) q.push('f=1');
    if (sc.heatwave) q.push('h=1');
    if (sc.strike) q.push('s=1');
    if ((sc.responses || []).length) q.push('r=' + sc.responses.join(','));
    if (!austerityOn) q.push('a=0');
    if (viewDay > 1) q.push('d=' + viewDay);
    return q.join('&');
  }
  function writeHash() {
    try {
      var h = encodeState();
      window.history.replaceState(null, '', h ? '#' + h : window.location.pathname + window.location.search);
    } catch (e) { /* opened from a place that forbids it: the link button still works */ }
  }
  $('btn-link').addEventListener('click', function () {
    writeHash();
    var url = String(window.location.href), note = $('link-note');
    function done(ok) { note.textContent = ok ? ' Link copied.' : ' Copy this from the address bar: ' + url; }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(url).then(function () { done(true); }, function () { done(false); }); return; }
    } catch (e) { /* fall through */ }
    done(false);
  });

  // ---------------------------------------------------------------- update

  function paintAll(r) {
    paintMap(r);
    paintMetrics(r);
    paintTables(r);
    paintEconomy(r);
    paintBudget(r);
    paintWhy(r);
    syncControls();
    paintArea(r);
    paintTimeline();
    paintSummary(r);
    writeHash();
  }

  // The 14-day outlook runs several full-city simulations, so it waits until
  // the person stops dragging a slider.
  var projTimer = null;
  function scheduleProjection() {
    proj = null;
    clearTimeout(projTimer);
    paintOutlook();
    paintTimeline();
    projTimer = setTimeout(function () {
      proj = projectionFor(scenario);
      if (viewDay > 1) { result = runView(scenario, viewDay); paintAll(result); }   // now we know the austerity level that day
      paintOutlook();
      paintWhy(result);
      paintTimeline();
      paintSummary(result);
    }, 150);
  }

  var pending = false;
  function update() {
    if (pending) return;
    pending = true;
    stopPlay();
    var run = window.requestAnimationFrame || function (f) { setTimeout(f, 0); };
    run(function () {
      pending = false;
      proj = null;
      result = runView(scenario, viewDay);
      paintAll(result);
      scheduleProjection();
      renderCompare();
    });
  }

  // ------------------------------------------------------ compare responses

  var CMP_MAX = 60000;   // search up to this budget once; the slider then filters instantly
  var cmp = { result: null, key: null, running: false, token: 0, budget: data.budget.emergencySpendingLimit,
    event: null, austerity: true, sample: null, sampling: null, sampleToken: 0 };

  function eventKey(sc) {
    var s = clone(sc);
    s.responses = [];
    return JSON.stringify([s, austerityOn]);
  }

  function startCompare() {
    if (cmp.running) return;
    var ev = clone(scenario);
    ev.responses = [];
    var token = ++cmp.token;
    cmp.running = true; cmp.result = null; cmp.key = eventKey(scenario);
    cmp.event = ev; cmp.austerity = austerityOn; cmp.sample = null; cmp.sampling = null; cmp.sampleToken++;
    $('cmp-results').innerHTML = ''; $('cmp-explain').innerHTML = '';
    var bar = $('cmp-bar');
    bar.hidden = false; bar.max = 1; bar.value = 0;
    $('cmp-status').textContent = 'Setting up…';
    $('btn-compare').disabled = true;
    var o = null;
    setTimeout(function () {
      o = Responses.optimiser(data, agents, ev, normal, cfg, CMP_MAX, { enabled: austerityOn });
      tick();
    }, 30);
    function tick() {
      if (token !== cmp.token) return;
      var t0 = Date.now(), done = false;
      while (Date.now() - t0 < 120 && !(done = o.step())) { /* work for a moment, then let the page breathe */ }
      var p = o.progress();
      bar.max = Math.max(p.planned, 1); bar.value = p.done;
      $('cmp-status').textContent = 'Tried ' + p.done + ' of about ' + p.planned + ' options…';
      if (!done) { setTimeout(tick, 0); return; }
      cmp.result = o.result(); cmp.running = false;
      bar.hidden = true; $('btn-compare').disabled = false;
      $('cmp-status').textContent = 'Compared ' + cmp.result.tried + ' options (' + cmp.result.pruned + ' skipped as not worth trying).';
      renderCompare();
      startSampling();
    }
  }

  // The search above uses one city. Re-run the leading options in several, to see if the ranking holds.
  function startSampling() {
    var res = cmp.result;
    if (!res || cmp.running) return;
    var rows = res.rows.filter(function (r) { return r.ids.length && r.oneOff <= cmp.budget; });
    if (!rows.length) { cmp.sample = null; cmp.sampling = null; return; }
    var tok = ++cmp.sampleToken, key = cmp.key;
    cmp.sample = null; cmp.sampling = { done: 0, planned: 1 };
    var st = Uncertainty.sampleOptions(data, cmp.event, rows.slice(0, 4).map(function (r) { return r.ids; }), cfg,
      Uncertainty.DEFAULT_RUNS, { enabled: cmp.austerity });
    var bar = $('cmp-bar');
    bar.hidden = false;
    runStepper(st, function () { return tok === cmp.sampleToken; },
      function (p) {
        cmp.sampling = p; bar.max = Math.max(p.planned, 1); bar.value = p.done;
        $('cmp-status').textContent = 'Checking the top options in ' + Uncertainty.DEFAULT_RUNS + ' simulated cities… ' + p.done + ' of ' + p.planned;
      },
      function (r) {
        cmp.sample = { key: key, result: r, budget: cmp.budget }; cmp.sampling = null;
        bar.hidden = true;
        $('cmp-status').textContent = 'Compared ' + res.tried + ' options; the top ones were re-run in ' + r.n + ' simulated cities.';
        renderCompare();
      });
  }
  function sampleFor(row) {
    if (!cmp.sample || cmp.sample.key !== cmp.key) return null;
    return cmp.sample.result.options.filter(function (o) { return sameIds(o.ids, row.ids); })[0] || null;
  }
  function rangeCells(r) {
    if (cmp.sampling) return '<td class="hint">checking…</td><td></td>';
    var o = sampleFor(r);
    if (!o) return '<td class="hint">' + (cmp.sample ? 'not checked' : '-') + '</td><td>-</td>';
    var n = cmp.sample.result.n;
    return '<td>' + fmtK(o.harm.min, 0) + '&ndash;' + fmtK(o.harm.max, 0) + '</td><td' + (r.ids.length && o.beatsNothing < n ? ' class="bad"' : '') + '>' +
      (r.ids.length ? o.beatsNothing + ' of ' + n : '-') + '</td>';
  }
  // One sentence on whether the winner is robust to which city we happen to simulate.
  function confidenceHtml(best) {
    if (cmp.sampling) return '<p class="conf">Checking how well this ranking holds up in other simulated cities…</p>';
    if (!cmp.sample || cmp.sample.key !== cmp.key) return '';
    var res = cmp.sample.result, n = res.n, mine = sampleFor(best);
    if (!mine) return '<p class="conf close">The option ranked first for this budget was not in the cities check. <button type="button" id="btn-recheck">Check the top options again</button></p>';
    var name = best.ids.length ? best.name : 'Doing nothing';
    var spreadTxt = ' Its harm ranges from ' + fmtK(mine.harm.min, 0) + ' to ' + fmtK(mine.harm.max, 0) + ' depending on who lives and works where.';
    if (mine.wins === n) return '<p class="conf ok"><b>Holds up:</b> ' + esc(name) + ' came out best in all ' + n + ' simulated cities.' + spreadTxt + '</p>';
    var other = res.options.filter(function (o) { return o !== mine && o.wins > 0; }).sort(function (a, b) { return b.wins - a.wins; })[0];
    if (mine.wins / n >= 0.75) return '<p class="conf ok"><b>Mostly holds up:</b> ' + esc(name) + ' was best in ' + mine.wins + ' of ' + n + ' cities' +
      (other ? ', ' + esc(other.name) + ' in ' + other.wins : '') + '.' + spreadTxt + '</p>';
    return '<p class="conf close"><b>Close call:</b> ' + esc(name) + ' was best in only ' + mine.wins + ' of ' + n + ' cities' +
      (other ? '; ' + esc(other.name) + ' won ' + other.wins : '') + '. Treat the top options as roughly equal.' + spreadTxt + '</p>';
  }

  function sameIds(a, b) { return a.length === b.length && a.every(function (x) { return b.indexOf(x) >= 0; }); }
  function signedK(n) { return (n < 0 ? '-' : '+') + Math.abs(n / 1000).toFixed(0) + 'k'; }

  function renderCompare() {
    var host = $('cmp-results'), ex = $('cmp-explain');
    $('cmp-event').textContent = Events.describe(data, scenario);
    var res = cmp.result;
    if (!res) { if (!cmp.running) { host.innerHTML = ''; ex.innerHTML = ''; } paintSummary(result); return; }

    var stale = cmp.key !== eventKey(scenario);
    var budget = cmp.budget, nothing = res.nothing;
    var rows = res.rows.filter(function (r) { return r.oneOff <= budget; });
    var best = rows[0];
    var shown = rows.slice(0, 7);
    if (shown.indexOf(nothing) < 0) shown.push(nothing);
    var maxH = Math.max.apply(null, shown.map(function (r) { return r.harm.total; }));
    var inForce = scenario.responses || [];

    var html = '';
    if (stale) html += '<p class="banner">The event or settings changed since this comparison ran. Press <b>Compare responses</b> again.</p>';
    html += '<div class="scroll"><table class="cmp"><thead><tr><th>#</th><th>Option</th><th>Spend now</th><th>Harm over 14 days</th>' +
      '<th>vs do nothing</th><th title="Lowest to highest 14-day harm across the simulated cities">Range</th><th title="In how many simulated cities it beats doing nothing">Beats nothing</th><th>Avg commute</th><th>Worst no-route</th><th>Reserve</th><th></th></tr></thead><tbody>';
    shown.forEach(function (r) {
      var rank = rows.indexOf(r) + 1;
      var isBest = r === best && r.ids.length > 0;
      var reserve = r.reserveOutDay ? 'out on day ' + r.reserveOutDay : 'stays positive';
      if (r.minService < 0.999) reserve += ', buses cut to ' + Math.round(r.minService * 100) + '%';
      var vs = r.ids.length ? '<span class="' + (r.vsNothing < 0 ? 'good' : 'bad') + '">' + signedK(r.vsNothing) + '</span>' : '-';
      var active = sameIds(inForce, r.ids);
      html += '<tr' + (isBest ? ' class="best"' : '') + '><td>' + rank + '</td><td>' + esc(r.name) +
        (isBest ? ' <span class="badge">best within budget</span>' : '') +
        (r.notes && r.notes.length ? '<div class="hint">' + esc(r.notes.join(' ')) + '</div>' : '') + '</td><td>' +
        (r.oneOff ? fmtK(r.oneOff, 0) : '-') + '</td><td><span class="bar" style="width:' +
        Math.max(2, Math.round(r.harm.total / maxH * 100)) + 'px"></span> ' + fmtK(r.harm.total, 0) + '</td><td>' + vs +
        '</td>' + rangeCells(r) + '<td>' + r.summary.avgCommute.toFixed(1) + ' min</td><td>' +
        (r.summary.peakNone > 0.005 ? Math.round(r.summary.peakNone * 100) + '%' : '-') + '</td><td>' + esc(reserve) +
        '</td><td><button data-apply="' + esc(r.ids.join(',')) + '"' + (active ? ' disabled' : '') + '>' +
        (active ? 'In force' : (r.ids.length ? 'Apply' : 'Clear')) + '</button></td></tr>';
    });
    html += '</tbody></table></div>';

    var overall = res.rows[0];
    if (overall.oneOff > budget) {
      html += '<p class="note">With more money, <b>' + esc(overall.name) + '</b> would cut harm to ' + fmtK(overall.harm.total, 0) +
        ' (' + signedK(overall.harm.total - (best || nothing).harm.total) + ' compared with the best option you can afford) but needs ' +
        fmtK(overall.oneOff, 0) + ' to start.</p>';
    }
    html += '<p class="note"><b>Harm</b> = business output lost + extra travel time for residents + extra bus spending + repair bills + the response cost, ' +
      'all measured against the unchanged city over 14 days. Events end after their set duration; responses stay in force. ' +
      'The austerity rule is ' + (austerityOn ? 'on' : 'off') + '.</p>';
    html += confidenceHtml(best);
    host.innerHTML = html;

    // Why the winner wins
    var h = best.harm, n = nothing.harm, ehtml = '';
    if (!best.ids.length) {
      ehtml += '<h3>No response beats doing nothing within this budget</h3><p class="note">Every option costs more than the harm it prevents, or none fits the budget. Raise the budget or change the event.</p>';
    } else {
      ehtml += '<h3>Why ' + esc(best.name) + '</h3><p>' + esc(Responses.describe(best, nothing)) + '</p>';
      var parts = [['Output lost', 'lostOutput'], ['Residents’ travel time', 'extraTravel'], ['Extra bus spending', 'busSpend'],
        ['Repair bills', 'repairs'], ['Response cost', 'response'], ['Total harm', 'total']];
      ehtml += '<div class="scroll"><table><thead><tr><th>14-day harm (credits)</th><th>Do nothing</th><th>' + esc(best.name) +
        '</th><th>Difference</th></tr></thead><tbody>' + parts.map(function (p) {
        var d = h[p[1]] - n[p[1]];
        return '<tr' + (p[1] === 'total' ? ' class="strong"' : '') + '><td>' + p[0] + '</td><td>' + fmtMoney(n[p[1]]) + '</td><td>' +
          fmtMoney(h[p[1]]) + '</td><td class="' + (Math.round(d) < 0 ? 'good' : Math.round(d) > 0 ? 'bad' : '') + '">' +
          (Math.round(d) === 0 ? '-' : (d > 0 ? '+' : '-') + Math.abs(Math.round(d)).toLocaleString()) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
    }
    var singles = res.rows.filter(function (r) { return r.ids.length === 1; });
    ehtml += '<h3>What each response does on its own</h3><ul class="singles">' + singles.map(function (r) {
      var rr = Responses.responseById(data, r.ids[0]);
      return '<li><b>' + esc(rr.name) + '</b> (' + fmtK(rr.oneOff, 0) + '): ' +
        '<span class="' + (r.vsNothing < 0 ? 'good' : 'bad') + '">' + (r.vsNothing < 0 ? 'saves ' : 'adds ') + fmtK(Math.abs(r.vsNothing), 0) + ' of harm</span>. ' +
        esc(rr.how) +
        // A response that does nothing useful should only add its price; more than that means the budget rule kicked in.
        (austerityOn && r.vsNothing > rr.oneOff + 1000 ? ' <span class="hint">More than its price because the spend empties the reserve sooner, so the austerity rule cuts buses sooner.</span>' : '') +
        '</li>';
    }).join('') + '</ul>';
    ex.innerHTML = ehtml;
    paintSummary(result);
  }

  $('cmp-results').addEventListener('click', function (ev) {
    if (ev.target.closest && ev.target.closest('#btn-recheck')) { startSampling(); return; }
    var b = ev.target.closest ? ev.target.closest('button[data-apply]') : null;
    if (!b) return;
    applyIds(b.getAttribute('data-apply'));
  });
  function applyIds(v) {
    scenario.responses = v ? v.split(',') : [];
    viewDay = 1;
    update();
  }
  $('cmp-budget').addEventListener('input', function (ev) {
    cmp.budget = +ev.target.value;
    $('cmp-budget-out').textContent = fmtK(cmp.budget, 0);
    renderCompare();
  });
  $('cmp-budget').value = cmp.budget;
  $('cmp-budget-out').textContent = fmtK(cmp.budget, 0);
  $('btn-compare').addEventListener('click', startCompare);
  $('btn-goto-compare').addEventListener('click', function () {
    var el = $('compare');
    if (el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    startCompare();
  });

  paintAll(result);
  scheduleProjection();
  renderCompare();

  // Tiny hook so tests (or a curious judge) can drive the model from the console.
  window.LumenBay = {
    data: data, agents: agents, cfg: cfg,
    run: function (sc) { return Economy.runCity(data, agents, Economy.effective(data, appliedFor(sc || Events.base(data)), 1, 1), normal, cfg); },
    project: function (sc) { return projectionFor(sc || Events.base(data)); },
    getScenario: function () { return clone(scenario); }
  };
})();
