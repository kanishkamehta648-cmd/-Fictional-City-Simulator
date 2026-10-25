# Lumen Bay: Fictional City Simulator

An interactive digital twin of a city that doesn't exist. Change one thing
(a bus schedule, a flooded bridge) and watch the effects ripple through
transport, residents, businesses, utilities and the public budget.

## Core idea

The systems are coupled, not separate charts:

```
Bus cut -> mode switch to cars -> congestion -> longer commutes
        -> lateness + fewer shop visits -> lower revenue
        -> lower tax income -> smaller budget -> worse service
```

## Try it

Open `src/index.html` in a browser. No install, no server.

- Drag the bus service sliders, or press a preset (bus cut, strike, flood, heatwave).
- Click any road on the map (or tick it in the Roads table) to close or reopen it.
- Watch the map, the metrics (all compared with the baseline) and the
  "Why did this happen?" panel, which traces the chain of effects.
- "Use current as baseline" lets you compare one response against another.

Tests: `node tests/scenarios.js` checks that every cause-and-effect link runs in
the right direction. After editing `data/city.json`, run `node scripts/build-data.js`
so the browser copy (`src/city-data.js`) stays in sync.

## How the transport model works (Day 2)

1. **Residents**: 3,000 agents (each stands for 5 people) with a home, a job
   (nearby jobs are more likely) and a car or not.
2. **Mode choice**: each agent picks car, bus or walk with a logit model on
   generalized cost: travel time + wait penalty + money cost (fuel, parking,
   fare) converted to minutes. Low-income residents feel costs more.
3. **Congestion**: car volume raises road travel time (BPR curve). Buses share
   the roads, so traffic slows buses too. Crowded buses add delay.
4. **Feedback**: choices depend on travel times and travel times depend on
   choices, so the model iterates (method of successive averages) until they agree.
5. **Closures**: a closed road disappears from the network. People reroute, switch
   mode, or, if no route exists, are counted as "cannot reach work".

Baseline calibration: about 49% car, 42% bus, 8% walk; bridges 55-75% full.

## Known simplifications

- The average commute leaves out people with no route at all; their share is
  shown separately (and will feed business losses on Day 3).
- Morning peak hour only; one trip per person; capacity is peak-direction.
- Everyone has a job; job capacity per area is not enforced.

## Repo layout

- `docs/coupling_map.md`: every cause-and-effect link the model must contain
- `data/city.json`: the Lumen Bay city spec and all model assumptions
- `src/sim.js`: the simulation engine (runs in browser and Node)
- `src/index.html`, `src/app.js`: the interface
- `src/city-data.js`: generated copy of the city data for the browser
- `scripts/build-data.js`: regenerates `src/city-data.js`
- `tests/scenarios.js`: cause-and-effect regression tests

## Roadmap

- [x] Day 1: coupling map and city data
- [x] Day 2: transport core (mode choice, congestion, interactive map)
- [ ] Day 3: link businesses, utilities and budget
- [ ] Day 4: event engine and baseline vs scenario comparison
- [ ] Day 5: polish the interactive map and controls
- [ ] Day 6: response comparison and uncertainty ranges
- [ ] Day 7: testing, polish, demo
