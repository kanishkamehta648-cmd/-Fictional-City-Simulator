/*
 * Lumen Bay economy, utilities and budget (Day 3)
 *
 * Sits on top of the transport model (sim.js). Nothing here is typed in as a
 * result: every number is calculated from what the transport model produced.
 *
 *   transport -> lateness, workers who cannot reach work   -> productivity
 *   transport -> shop trip times / reach                   -> shop visits
 *   productivity + visits + power + water                  -> business revenue
 *   revenue + workers + fares - bus cost - services        -> budget balance
 *   heatwave / flood -> power and water shortfall -> revenue
 *   power shortfall  -> traffic signals fail      -> road capacity (back into transport)
 *   budget deficit   -> austerity bus cuts        -> transport (multi-day projection)
 *
 * Works in the browser (window.Economy, needs window.Sim) and in Node.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./sim.js'));
  else root.Economy = factory(root.Sim);
})(typeof self !== 'undefined' ? self : this, function (Sim) {
  'use strict';

  var DEFAULTS = {
    tripsPerWorkerDay: 2,
    strandedProductivity: 0.25,
    shopTripsPerResidentDay: 1.0,
    shopDecayMin: 15,
    shopVisitDropPerExtraTripMin: 0.012,
    latenessToleranceMin: 5,
    presenceLoadShare: 0.5,
    signalCapacityLossPerShortfall: 0.5
  };

  function ecfg(data) {
    return Object.assign({}, DEFAULTS, Sim.config(data));
  }

  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  // -------------------------------------------------------------- utilities

  function powerState(data, presence, heat, ec) {
    var P = data.utilities.power, s = ec.presenceLoadShare;
    var byZone = data.neighbourhoods.map(function (n, i) {
      return n.basePowerMW * P.peakHourMultiplier * (heat ? P.heatwaveDemandMultiplier : 1) *
        (1 - s + s * presence[i]);
    });
    var demand = byZone.reduce(function (a, b) { return a + b; }, 0);
    var supply = P.supplyCapacityMW;
    return {
      demand: demand, supply: supply, load: demand / supply,
      shortfall: Math.max(0, 1 - supply / demand), byZone: byZone
    };
  }

  function waterState(data, scenario, ec) {
    var W = data.utilities.water, rep = ec.agentRepresentsResidents;
    var residents = data.neighbourhoods.reduce(function (s, n) { return s + n.agents * rep; }, 0);
    var demand = residents / 1000 * W.baseDemandMLPer1000Residents *
      (scenario.heatwave ? (W.heatwaveDemandMultiplier || 1) : 1);
    var supply = W.supplyCapacityML * (scenario.flood ? 1 - W.floodSupplyReduction : 1);
    return { demand: demand, supply: supply, load: demand / supply, shortfall: Math.max(0, 1 - supply / demand) };
  }

  // ------------------------------------------------------------- evaluation

  function evaluate(data, T, ref, scenario, ec) {
    scenario = scenario || {};
    var nodes = data.neighbourhoods, N = nodes.length;
    var rep = ec.agentRepresentsResidents, tol = ec.latenessToleranceMin;
    var B = data.businesses, bud = data.budget;
    ref = ref || T;

    var refTime = {};
    ref.groups.forEach(function (g) { refTime[g.home + '|' + g.job + '|' + (g.hasCar ? 1 : 0)] = g.time; });

    var kZone = nodes.map(function (n) {
      var m = n.sectorMix;
      return m.retail * B.retail.productivityLossPerLateMin + m.office * B.office.productivityLossPerLateMin +
        m.industry * B.industry.productivityLossPerLateMin;
    });

    var Z = nodes.map(function () {
      return { W: 0, prodSum: 0, present: 0, lateMin: 0, lateWorkers: 0 };
    });
    var effWorkers = 0, fareTrips = 0, timeCost = 0;

    T.groups.forEach(function (g) {
      var N0 = g.n * rep, reach = 1 - g.P.none, z = Z[g.job];
      var rt = refTime[g.home + '|' + g.job + '|' + (g.hasCar ? 1 : 0)];
      var late = rt == null ? 0 : Math.max(0, g.time - rt - tol);
      var prod = reach * Math.max(0, 1 - kZone[g.job] * late) + g.P.none * ec.strandedProductivity;
      z.W += N0; z.prodSum += N0 * prod; z.present += N0 * reach;
      z.lateMin += N0 * reach * late; z.lateWorkers += N0 * reach * (late > 0 ? 1 : 0);
      effWorkers += N0 * (reach + g.P.none * ec.strandedProductivity);
      fareTrips += N0 * g.P.bus * g.busFare * ec.tripsPerWorkerDay;
      var vot = ec.valueOfTimeCreditsPerMin * ec.incomeVotMultiplier[g.income];
      timeCost += N0 * reach * g.time * ec.tripsPerWorkerDay * vot;
    });

    var presence = Z.map(function (z) { return z.W ? z.present / z.W : 1; });
    var prodZone = Z.map(function (z) { return z.W ? z.prodSum / z.W : 1; });

    // Shop visits: where residents shop (nearer, bigger shopping areas win) and
    // how often (each extra minute of travel cuts visits; unreachable areas count for nothing).
    var visits = new Array(N).fill(0), access = [], shopTime = [];
    for (var h = 0; h < N; h++) {
      var w = [], wr = [], sw = 0, swr = 0, tAvg = 0, tRef = 0, reachMass = 0;
      for (var d = 0; d < N; d++) {
        var o = T.od[h][d], or = ref.od[h][d];
        w.push(o.t == null ? 0 : nodes[d].shops * Math.exp(-o.t / ec.shopDecayMin) * o.reach);
        wr.push(or.t == null ? 0 : nodes[d].shops * Math.exp(-or.t / ec.shopDecayMin) * or.reach);
        sw += w[d]; swr += wr[d];
        // How much of the usual shopping reach survives. Uses usual travel
        // times so that slower trips are not penalised twice (they are
        // handled by the extra-minutes rule below).
        reachMass += or.t == null ? 0 : nodes[d].shops * Math.exp(-or.t / ec.shopDecayMin) * Math.min(o.reach, or.reach);
      }
      for (d = 0; d < N; d++) {
        if (sw > 0) tAvg += (w[d] / sw) * (T.od[h][d].t || 0);
        if (swr > 0) tRef += (wr[d] / swr) * (ref.od[h][d].t || 0);
      }
      var acc = swr > 0 ? Math.min(1, reachMass / swr) : 1;
      var timeFactor = clamp(1 - ec.shopVisitDropPerExtraTripMin * (tAvg - tRef), 0.3, 1.15);
      var trips = nodes[h].agents * rep * ec.shopTripsPerResidentDay * timeFactor * acc;
      for (d = 0; d < N; d++) visits[d] += sw > 0 ? trips * w[d] / sw : 0;
      access.push({ trips: trips, extraMin: tAvg - tRef, access: acc });
      shopTime.push(tAvg);
    }

    // Utilities
    var heat = !!scenario.heatwave;
    var power = powerState(data, presence, heat, ec);
    var water = waterState(data, scenario, ec);

    // Revenue
    var zones = nodes.map(function (n, i) {
      var m = n.sectorMix, z = Z[i];
      function f(sector) {
        return (1 - B[sector].powerSensitivity * power.shortfall) *
          (1 - B[sector].waterSensitivity * water.shortfall);
      }
      var office = z.W * m.office * B.office.revenuePerWorkerDay * prodZone[i] * f('office');
      var industry = z.W * m.industry * B.industry.revenuePerWorkerDay * prodZone[i] * f('industry');
      var retail = visits[i] * B.retail.revenuePerVisit * prodZone[i] * f('retail');
      return {
        id: n.id, name: n.name, workers: z.W, presence: presence[i], productivity: prodZone[i],
        lateMin: z.present ? z.lateMin / z.present : 0,
        lateShare: z.present ? z.lateWorkers / z.present : 0,
        visits: visits[i], shopAccess: access[i], powerMW: power.byZone[i],
        revenue: office + industry + retail, office: office, industry: industry, retail: retail
      };
    });

    var rev = zones.reduce(function (s, z) { return s + z.revenue; }, 0);
    var totalW = Z.reduce(function (s, z) { return s + z.W; }, 0);
    var presentW = Z.reduce(function (s, z) { return s + z.present; }, 0);
    var lateMinW = Z.reduce(function (s, z) { return s + z.lateMin; }, 0);
    var lateW = Z.reduce(function (s, z) { return s + z.lateWorkers; }, 0);

    // Budget
    var busOps = data.busLines.reduce(function (s, l, i) {
      return s + l.buses * T.lines[i].mult * bud.busCostPerBusHour * bud.busHoursPerDay;
    }, 0);
    var flooded = T.edges.filter(function (e) { return e.flooded; }).length;
    var businessTax = bud.businessTaxRate * rev;
    var incomeTax = bud.incomeTaxPerWorkerDay * effWorkers;
    var income = businessTax + incomeTax + fareTrips;
    var spending = busOps + bud.baseServicesCostPerDay;

    return {
      zones: zones,
      totals: {
        revenue: rev,
        office: zones.reduce(function (s, z) { return s + z.office; }, 0),
        industry: zones.reduce(function (s, z) { return s + z.industry; }, 0),
        retail: zones.reduce(function (s, z) { return s + z.retail; }, 0),
        visits: visits.reduce(function (a, b) { return a + b; }, 0),
        productivity: totalW ? Z.reduce(function (s, z) { return s + z.prodSum; }, 0) / totalW : 1,
        presentShare: totalW ? presentW / totalW : 1,
        lateMin: presentW ? lateMinW / presentW : 0,
        lateShare: presentW ? lateW / presentW : 0,
        workers: totalW, effWorkers: effWorkers
      },
      power: power, water: water,
      signalScale: T.scenario && T.scenario.capacityScale != null ? T.scenario.capacityScale : 1,
      budget: {
        businessTax: businessTax, incomeTax: incomeTax, fares: fareTrips, income: income,
        busOps: busOps, baseServices: bud.baseServicesCostPerDay, spending: spending,
        balance: income - spending, oneOff: flooded * bud.roadRepairCostPerDamagedEdge, floodedRoads: flooded
      },
      timeCost: timeCost
    };
  }

  // ---------------------------------------------------------------- one day

  /**
   * Run the whole city for one day. `normal` is the transport result of the
   * unchanged city (workers plan their departure around usual commute times).
   * Power shortfall switches off traffic signals, which cuts road capacity, so
   * the grid and the roads are solved together (up to 3 passes).
   */
  function runCity(data, agents, scenario, normal, cfg) {
    scenario = scenario || {};
    cfg = cfg || Sim.config(data);
    var ec = ecfg(data), heat = !!scenario.heatwave;
    var userScale = scenario.capacityScale == null ? 1 : scenario.capacityScale;
    var ones = data.neighbourhoods.map(function () { return 1; });
    var shortfall = powerState(data, ones, heat, ec).shortfall;
    var T, E, used = null;

    for (var pass = 0; pass < 3; pass++) {
      var sc = clone(scenario);
      sc.capacityScale = userScale * (1 - ec.signalCapacityLossPerShortfall * shortfall);
      T = Sim.runTransport(data, agents, sc, cfg);
      E = evaluate(data, T, normal, scenario, ec);
      used = shortfall;
      if (Math.abs(E.power.shortfall - shortfall) <= 0.01) break;
      shortfall = E.power.shortfall;
    }
    E.power.signalShortfallUsed = used;
    T.econ = E;
    return T;
  }

  function normalCity(data, agents, cfg) {
    return Sim.runTransport(data, agents, {}, cfg || Sim.config(data));
  }

  // ------------------------------------------------------------ many days

  /**
   * Project the reserve day by day. If the reserve goes negative the city cuts
   * bus service a step each day (and restores it once the reserve recovers).
   * Cutting service changes commutes and the economy, which changes next
   * day's budget: the budget -> transport feedback loop.
   */
  function projectDays(data, agents, scenario, normal, cfg, days, optsIn) {
    days = days || 14;
    var A = Object.assign({}, data.budget.austerity, optsIn || {});
    var cache = {}, reserve = data.budget.dailyReserve, level = 1, out = [], outDay = null;

    for (var day = 1; day <= days; day++) {
      var key = level.toFixed(2);
      if (!cache[key]) {
        var sc = clone(scenario);
        sc.busFrequency = sc.busFrequency || {};
        data.busLines.forEach(function (l) {
          var base = sc.busFrequency[l.id] == null ? 1 : sc.busFrequency[l.id];
          sc.busFrequency[l.id] = base * level;
        });
        cache[key] = runCity(data, agents, sc, normal, cfg);
      }
      var r = cache[key], b = r.econ.budget;
      var oneOff = day === 1 ? b.oneOff : 0;
      var balance = b.balance - oneOff;
      reserve += balance;
      if (reserve < 0 && outDay === null) outDay = day;
      out.push({
        day: day, service: level, reserve: reserve, balance: balance,
        commute: r.summary.commute, revenue: r.econ.totals.revenue,
        busShare: r.summary.shares.bus, busOps: b.busOps
      });
      if (A.enabled) {
        if (reserve < 0) level = Math.max(A.minService, Math.round((level - A.stepPerDay) * 100) / 100);
        else if (reserve > A.restoreAbove && level < 1) level = Math.min(1, Math.round((level + A.stepPerDay) * 100) / 100);
      }
    }
    return { days: out, reserveOutDay: outDay, finalReserve: reserve, finalService: out[out.length - 1].service };
  }

  return {
    DEFAULTS: DEFAULTS, ecfg: ecfg, evaluate: evaluate,
    runCity: runCity, normalCity: normalCity, projectDays: projectDays,
    powerState: powerState, waterState: waterState
  };
});
