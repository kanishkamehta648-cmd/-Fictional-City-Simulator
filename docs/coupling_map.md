# Lumen Bay: Coupling Map (Day 1)

The rule for the whole project: every arrow below must exist in code as a real
calculation, not a hard-coded result. If an arrow is missing, the systems are
not coupled.

## The 5 systems

1. **Transport**: roads, bridges, 3 bus lines, congestion
2. **Residents**: 3,000 agents with home, job, shopping habits, mode choice
3. **Businesses**: jobs, customers, productivity, revenue
4. **Utilities**: power and water demand vs capacity
5. **Budget**: tax income vs bus operating cost, repairs, services

## Main causal chain (the one to demo)

```
Bus frequency cut
  -> longer waits, bus gets less attractive
  -> some residents switch bus -> car              [mode choice]
  -> more cars on roads/bridges
  -> congestion up, travel time up                 [BPR volume/capacity curve]
  -> workers arrive late                           [lateness]
  -> business productivity down                    [revenue hit]
  -> fewer shop visits (people avoid long trips)   [footfall]
  -> business revenue down
  -> tax revenue down                              [budget]
  -> less money for bus service / road repair
  -> (feedback) service stays poor or worsens
```

## Feedback loops (the "interesting" part judges look for)

| Loop | Type | Description | Status |
|---|---|---|---|
| Bus death spiral | Reinforcing | fewer buses -> fewer riders -> less fare income -> fewer buses | Built (austerity rule), but the model shows it is **not** a spiral: see finding below |
| Congestion loop | Balancing | congestion -> longer car trips -> some people switch to bus/walk -> congestion eases | Built (Day 2) |
| Revenue-budget loop | Reinforcing | congestion -> lower revenue -> lower budget -> poorer roads/service -> more congestion | Built (Day 3, 14-day outlook) |
| Heat-power loop | Reinforcing | heatwave -> power strain -> blackouts -> businesses lose hours; signals fail -> road capacity falls -> congestion | Built (Day 3) |

### Finding from the model: austerity helps the budget but hurts the city

Day 1 predicted a "bus death spiral". With the Day 3 numbers it does not happen.
Cutting buses saves far more than the tax and fares it loses:

| Heatwave, 14 days | Austerity rule ON | Austerity rule OFF |
|---|---|---|
| Reserve on day 14 | about -70k | about -134k |
| Commute on day 14 | about 27 min | about 19 min |
| Business output on day 14 | about 984k/day | about 1,021k/day |

So the budget improves while commutes lengthen by 8 minutes and output falls 3.6%.
The cost lands on residents (the "Travel time cost" metric), not on the city's books,
which is why a budget-only view makes bus cuts look attractive. The fares loop is
real but small (fares are about 8% of income).

## What each day built

- Day 2: transport links (mode choice, congestion, closures, bus crowding).
- Day 3: lateness and stranded workers -> productivity; shop trips -> visits;
  power and water -> revenue; power -> traffic signals -> roads; revenue -> tax -> budget;
  deficit -> austerity -> bus service -> transport (multi-day).

## Cross-system links (full list)

| From | To | How it is calculated |
|---|---|---|
| Bus headway | Residents | wait time = headway / 2, feeds mode-choice cost |
| Residents' mode choice | Transport | car volume per road edge = sum of agents routed through it |
| Road volume | Transport | travel time = freeflow * (1 + 0.15 * (volume/capacity)^4) |
| Travel time | Residents | commute duration, lateness = max(0, commute - tolerance) |
| Lateness | Businesses | productivity = 1 - k * average lateness |
| Travel time to shops | Residents | shop-visit probability drops as trip time grows |
| Shop visits + productivity | Businesses | daily revenue |
| Business revenue | Budget | business tax = rate * revenue |
| Employed residents | Budget | income tax per working resident |
| Budget | Transport | bus fleet and hours affordable, repair funds |
| Residents + businesses | Utilities | power and water demand per neighbourhood |
| Utility shortfall | Businesses | operating hours lost, revenue lost |
| Flood event | Transport | flood-prone edges closed or capacity cut |
| Flood event | Utilities | water treatment capacity reduced |
| Heatwave event | Utilities, Residents | demand up, walking less attractive |

## Events (judge-surprise buttons)

1. Bus frequency cut (by X%)
2. Bridge closure (pick any bridge)
3. Flood (closes flood-prone roads, hits water supply)
4. Heatwave (power demand up, walking down)
5. Transit strike (bus service drops to near zero)

## Responses to compare (for each event)

- Reroute / add buses on the surviving corridor
- Stagger work start times (spreads the peak)
- Temporary shuttle or park-and-ride
- Emergency spending from reserve
- Do nothing (baseline for comparison)

## Metrics to show for every run

- Average commute time (minutes) and worst neighbourhood
- Share of trips by mode (car / bus / walk)
- Congestion index (average volume/capacity on busiest edges)
- Business revenue per day
- Budget balance per day
- Power and water load as % of capacity
- Equity: gap between best-off and worst-off neighbourhood commute

## Honesty rules

- Run each scenario 10+ times with random seeds and show ranges.
- Keep every assumption in one visible table (see `assumptions` in city.json).
