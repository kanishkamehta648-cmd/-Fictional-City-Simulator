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

Tests: `npm test` checks that every cause-and-effect link runs in the right
direction (26 checks). `npm run test:page` also clicks through the page in a
simulated browser (needs `npm install --no-save jsdom` first). After editing
`data/city.json`, run `node scripts/build-data.js` so the browser copy
(`src/city-data.js`) stays in sync.

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

## How businesses, utilities and the budget connect (Day 3)

Everything below is calculated from the transport result, not typed in
(`src/economy.js`):

1. **Lateness**: workers plan around the usual commute. Minutes beyond that plus a
   5-minute grace are "late" and cost productivity (0.3-0.6% per minute by sector).
2. **Stranded workers**: people with no route can only partly work from home (25% output).
3. **Shopping**: residents choose shops by size and travel time. Each extra minute
   cuts visits by 1.2%; areas that become unreachable lose their share.
4. **Utilities**: power demand (peak hour, heatwave, how many people are at work)
   against supply; water demand against supply (a flood cuts supply 35%). A shortfall
   means blackouts or rationing, which cost each sector revenue in proportion to how
   sensitive it is.
5. **Power back into transport**: blackouts switch off traffic signals and cut road
   capacity, so the grid and the roads are solved together.
6. **Budget**: business tax + income tax + fares, minus bus operations and other
   services. A flood adds a one-off repair bill.
7. **14-day outlook**: if the reserve runs out, the austerity rule cuts bus service
   10% a day, which changes commutes and the economy the next day (switch it off in
   the controls to compare).

**One finding to be aware of:** cutting buses improves the budget and hurts residents.
The page shows both ("Budget balance" and "Travel time cost") so a budget-only view
does not mislead. Details in `docs/coupling_map.md`.

## Known simplifications

- The average commute leaves out people with no route at all; their share is
  shown separately and feeds the economy through lost productivity.
- Morning peak hour only; one commute per person; capacity is peak-direction.
- Shopping trips use the same travel conditions as the commute.
- Everyone has a job; job capacity per area is not enforced.
- Power and water are city-wide totals; blackouts are shared evenly across areas.
- Events last the whole 14-day outlook; nothing recovers on its own yet.

## Repo layout

- `docs/coupling_map.md`: every cause-and-effect link the model must contain
- `data/city.json`: the Lumen Bay city spec and all model assumptions
- `src/sim.js`: the transport engine (runs in browser and Node)
- `src/economy.js`: businesses, utilities, budget and the multi-day outlook
- `src/index.html`, `src/app.js`: the interface
- `src/city-data.js`: generated copy of the city data for the browser
- `scripts/build-data.js`: regenerates `src/city-data.js`
- `tests/scenarios.js`, `tests/economy.js`: cause-and-effect regression tests
- `tests/page.js`: clicks through the page in a simulated browser

## Roadmap

- [x] Day 1: coupling map and city data
- [x] Day 2: transport core (mode choice, congestion, interactive map)
- [x] Day 3: link businesses, utilities and budget
- [ ] Day 4: event engine and baseline vs scenario comparison
- [ ] Day 5: polish the interactive map and controls
- [ ] Day 6: response comparison and uncertainty ranges
- [ ] Day 7: testing, polish, demo
