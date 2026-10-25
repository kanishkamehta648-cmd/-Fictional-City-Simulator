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

## Repo layout

- `docs/coupling_map.md`: every cause-and-effect link the model must contain
- `data/city.json`: the Lumen Bay city spec (neighbourhoods, roads, bus lines, utilities, budget, events, assumptions)
- `src/`: simulation and interface code

## Roadmap

- [x] Day 1: coupling map and city data
- [ ] Day 2: transport core (mode choice, congestion)
- [ ] Day 3: link businesses, utilities and budget
- [ ] Day 4: event engine and baseline vs scenario comparison
- [ ] Day 5: interactive map and controls
- [ ] Day 6: response comparison and "why did this happen" explanations
- [ ] Day 7: testing, polish, demo
