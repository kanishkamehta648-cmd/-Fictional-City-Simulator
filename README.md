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
  Presets combine, and **Surprise me** picks one or two events at random.
- Click any road on the map (or tick it in the Roads table) to close or reopen it.
- Watch the map, the metrics (all compared with the baseline) and the
  "Why did this happen?" panel, which traces the chain of effects.
- Floods, heatwaves, strikes and closures end on their own. Use **Day shown** to
  watch the city recover (or not: see the austerity finding in `docs/coupling_map.md`).
- The **summary card** at the top gives the demo in one glance: a headline, four status
  chips (transport, businesses, utilities, budget) and the best response once compared.
- The **timeline** under the map shows all 14 days (commute, reserve, which events are
  still running). Click a day to jump to it, or press **Play** to watch the recovery.
  Floodwater and a heat tint appear on the map while those events last.
- Click an **area** on the map for its commute, mode split, output and late workers.
- **Copy scenario link** saves the whole scenario in the page address, so a link (or a
  refresh) reopens exactly this city. Unknown values in a link are ignored.
- **Compare responses** (button, or the panel at the bottom) ranks doing nothing,
  each response alone and every affordable combination, then explains the winner.
  Move the budget slider to see what more money would buy, and press **Apply** to
  put a plan into the live city.

Tests: `npm test` checks that every cause-and-effect link and every response runs
in the right direction (47 checks). `npm run test:page` also clicks through the
page in a simulated browser (80+ checks; needs `npm install --no-save jsdom`
first). After editing `data/city.json`, run `node scripts/build-data.js` so the
browser copy (`src/city-data.js`) stays in sync.

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

## Events and responses (Day 4)

**Events** (`src/events.js`) edit the scenario and the models play them out. They can
be combined, and each ends after a set number of days (`durationDays` in
`data/city.json`: flood 6, heatwave 4, strike 5, closure 10). A bus cut is a policy,
so it does not end.

**Responses** (`src/responses.js`) change the city; the simulation does the rest:

| Response | Starts at | What it does |
|---|---|---|
| Add buses | 12k | +50% trips on every regular line (running cost follows) |
| Stagger work start times | 2k | a quarter of peak trips move; costs 1% of output |
| Temporary shuttle | 9k | a new bus line on open roads from the worst-hit area to the main job centre |
| Emergency repair crews | 20k | flooded and closed roads reopen in half the time |
| Remote-work order | 3k | 25% of workers stay home: no traffic, 15% less output |
| Power and water conservation | 5k | demand falls 15%: fewer blackouts and less rationing |

The last two are defined in `responses.js` because `data/city.json` did not list them;
a response with the same id in the data file takes priority.

**Ranking** uses one scale, *harm* over 14 days against the unchanged city:
output lost + extra travel-time cost for residents + extra bus spending + repair
bills + the response cost. The search tries doing nothing and each response alone,
then every affordable combination of the ones that helped on their own (combinations
of responses that each make things worse are skipped, and the page says how many).
Response spending comes out of the same reserve as everything else.

## Known simplifications

- The average commute leaves out people with no route at all; their share is
  shown separately and feeds the economy through lost productivity.
- Morning peak hour only; one commute per person; capacity is peak-direction.
- Shopping trips use the same travel conditions as the commute.
- Everyone has a job; job capacity per area is not enforced.
- Power and water are city-wide totals; blackouts are shared evenly across areas.
- Responses stay in force for all 14 days (nothing is lifted when the event ends).
- Response spending draws on the operating reserve, so a large spend can trigger the
  austerity rule. Treat "emergency budget" as a cap on spending, not a separate fund.
- One run per option: no uncertainty ranges yet (planned for Day 6).

## Repo layout

- `docs/coupling_map.md`: every cause-and-effect link the model must contain
- `data/city.json`: the Lumen Bay city spec and all model assumptions
- `src/sim.js`: the transport engine (runs in browser and Node)
- `src/economy.js`: businesses, utilities, budget and the multi-day outlook
- `src/events.js`: event presets, combinations, random surprises
- `src/responses.js`: the six responses, the harm ranking and the search
- `src/index.html`, `src/app.js`: the interface
- `src/city-data.js`: generated copy of the city data for the browser
- `scripts/build-data.js`: regenerates `src/city-data.js`
- `tests/scenarios.js`, `tests/economy.js`, `tests/responses.js`: cause-and-effect regression tests
- `tests/page.js`: clicks through the page in a simulated browser

## Roadmap

- [x] Day 1: coupling map and city data
- [x] Day 2: transport core (mode choice, congestion, interactive map)
- [x] Day 3: link businesses, utilities and budget
- [x] Day 4: event engine, responses, ranked comparison under a budget
- [x] Day 5: polish the interactive map and controls (summary, timeline, area details, shareable links)
- [ ] Day 6: uncertainty ranges (repeat runs with different seeds) and more responses
- [ ] Day 7: testing, polish, demo
