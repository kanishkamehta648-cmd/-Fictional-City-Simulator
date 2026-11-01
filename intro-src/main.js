import { createCity } from './city3d.js';

var doc = document, root = doc.documentElement, body = doc.body;
body.classList.remove('no-js');
var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
var $ = function (s, c) { return (c || doc).querySelector(s); };
var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
var lerp = function (a, b, t) { return a + (b - a) * t; };
var ease = function (t) { return t * t * (3 - 2 * t); };

/* ---- reveal on scroll (plain DOM, works with or without WebGL) */
function wireReveals() {
  var els = $$('[data-rv], .mask-line');
  if (!('IntersectionObserver' in window) || reduce) { els.forEach(function (e) { e.classList.add('rv-in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (e) { io.observe(e); });
}

/* ---- nav: stick, hide on scroll down, burger, active link */
function wireNav() {
  var nav = $('#nav'), last = 0, burger = $('#burger');
  function onScroll() {
    var y = scrollY; nav.classList.toggle('stuck', y > 40);
    nav.classList.toggle('hide', y > last && y > 240 && !body.classList.contains('menu-open'));
    last = y;
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  burger.addEventListener('click', function () {
    var o = body.classList.toggle('menu-open'); burger.setAttribute('aria-expanded', o ? 'true' : 'false');
  });
  $$('.nav-link').forEach(function (a) { a.addEventListener('click', function () { body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', 'false'); }); });
  addEventListener('keydown', function (e) { if (e.key === 'Escape') { body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', 'false'); } });
}

var secs = $$('[data-cam]');
var rail = $('#rail');
secs.forEach(function (s, i) {
  var b = doc.createElement('button'); b.setAttribute('aria-label', 'Go to section ' + (i + 1));
  b.innerHTML = '<i></i>'; b.addEventListener('click', function () { scrollTo({ top: s.getBoundingClientRect().top + scrollY, behavior: reduce ? 'auto' : 'smooth' }); });
  rail.appendChild(b);
});
function centers() { return secs.map(function (s) { var r = s.getBoundingClientRect(); return r.top + scrollY + r.height * 0.5; }); }

function wirePreloader(set) {
  var fill = $('#pre-fill'), pct = $('#pre-pct'), v = 0;
  return {
    to: function (p) { v = Math.max(v, p); fill.style.right = (100 - v) + '%'; pct.textContent = Math.round(v); },
    done: function () { this.to(100); setTimeout(function () { $('#pre').classList.add('done'); body.classList.remove('is-locked'); }, 350); }
  };
}

/* ---- camera path, one key per section (world units, see city3d.js) */
var KEYS = [
  { p: [-125, 70, 190], t: [5, 8, 0], fov: 42, state: 'normal', flood: 0, label: 1, exp: 0.9 },
  { p: [-72, 36, 118], t: [-16, 9, 34], fov: 44, state: 'normal', flood: 0, label: 0.9, exp: 0.82 },
  { p: [-100, 38, -2], t: [-14, 2, -20], fov: 40, state: 'bridgeClosed', flood: 0, label: 0.9, exp: 0.82 },
  { p: [-135, 52, -88], t: [2, -2, 12], fov: 44, state: 'flood', flood: 0.6, label: 0.5, exp: 0.78 },
  { p: [-112, 62, -142], t: [14, 6, 24], fov: 40, state: 'normal', flood: 0, label: 0, exp: 0.9 },
  { p: [0, 210, 90], t: [0, 0, 0], fov: 40, state: 'normal', flood: 0, label: 0, exp: 0.8 }
];

function boot() {
  var pre = wirePreloader();
  body.classList.add('is-locked');
  wireReveals(); wireNav();
  var canvas = $('#gl');
  var test = null;
  try { test = canvas.getContext('webgl2') || canvas.getContext('webgl'); } catch (e) { test = null; }
  if (!test) { root.classList.add('no-webgl'); pre.done(); return; }
  pre.to(12);
  var tick = setInterval(function () { pre.to(Math.min(88, 12 + Math.random() * 10 + (performance.now() / 60))); }, 250);
  createCity(canvas).then(function (city) {
    clearInterval(tick);
    var cs = centers(), cur = 0, curState = 'normal', flood = 0, floodTarget = 0, mx = 0, my = 0, smx = 0, smy = 0;
    var cam = { p: KEYS[0].p.slice(), t: KEYS[0].t.slice(), fov: KEYS[0].fov, label: 1 };
    function recalc() { cs = centers(); city.resize(innerWidth, innerHeight); }
    addEventListener('resize', recalc);
    addEventListener('load', recalc);
    if (!reduce) addEventListener('pointermove', function (e) { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });
    var railBtns = $$('button', rail), links = $$('.nav-link[href^="#"]');
    var visible = true; doc.addEventListener('visibilitychange', function () { visible = !doc.hidden; });
    var lastT = performance.now(), time = 0, steady = 0;
    function target() {
      var y = scrollY + innerHeight * 0.5, i = 0;
      while (i < cs.length - 2 && y > cs[i + 1]) i++;
      var t = clamp((y - cs[i]) / Math.max(1, cs[i + 1] - cs[i]), 0, 1);
      return { i: i, t: ease(t), near: t < 0.5 ? i : i + 1 };
    }
    var TEST = /[?&]test\b/.test(location.search), snap = false;
    function frame(now) {
      if (!TEST) requestAnimationFrame(frame);
      if (!visible) return;
      var dt = Math.min(0.05, (now - lastT) / 1000); lastT = now; time += dt;
      var tg = target(), a = KEYS[tg.i], b = KEYS[tg.i + 1], k = reduce ? Math.round(tg.t) : tg.t;
      var want = { p: [0, 1, 2].map(function (n) { return lerp(a.p[n], b.p[n], k); }), t: [0, 1, 2].map(function (n) { return lerp(a.t[n], b.t[n], k); }), fov: lerp(a.fov, b.fov, k), label: lerp(a.label, b.label, k) };
      var s = (reduce || snap) ? 1 : 1 - Math.pow(0.0015, dt);          /* frame-rate independent smoothing */
      for (var n = 0; n < 3; n++) { cam.p[n] += (want.p[n] - cam.p[n]) * s; cam.t[n] += (want.t[n] - cam.t[n]) * s; }
      cam.fov += (want.fov - cam.fov) * s; cam.label += (want.label - cam.label) * s;
      smx += (mx - smx) * (1 - Math.pow(0.01, dt)); smy += (my - smy) * (1 - Math.pow(0.01, dt));
      var drift = reduce ? 0 : Math.sin(time * 0.15) * 3;
      city.setView([cam.p[0] + smx * 10 + drift, cam.p[1] - smy * 6, cam.p[2]], [cam.t[0], cam.t[1], cam.t[2]], cam.fov);
      city.setLabels(clamp(cam.label, 0, 1));
      var K = KEYS[tg.near];
      if (K.state !== curState) { curState = K.state; city.setState(curState, flood); }
      floodTarget = K.flood; flood += (floodTarget - flood) * (1 - Math.pow(0.05, dt)); city.setFlood(flood);
      if (tg.near !== cur) { cur = tg.near; railBtns.forEach(function (b2, j) { b2.classList.toggle('on', j === cur); }); }
      city.render(reduce ? 3 : time);
    }
    railBtns[0] && railBtns[0].classList.add('on');
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { links.forEach(function (l) { l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id); }); } }); }, { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(function (s) { if (s.id) io.observe(s); });
    canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); root.classList.add('no-webgl'); });
    city.render(3); if (!TEST) requestAnimationFrame(frame); pre.done();
    window.__intro = { ready: true, draw: function () { snap = true; frame(performance.now()); snap = false; } };
  }).catch(function (err) { clearInterval(tick); console.error(err); root.classList.add('no-webgl'); pre.done(); });
}
boot();
