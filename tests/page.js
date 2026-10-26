// Loads src/index.html in a simulated browser and clicks through the controls.
// Needs jsdom:  npm install --no-save jsdom   then   node tests/page.js
let JSDOM;
try { ({ JSDOM } = require('jsdom')); } catch (e) {
  console.log('jsdom is not installed. Run: npm install --no-save jsdom'); process.exit(2);
}
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'src');

const html = fs.readFileSync(path.join(src, 'index.html'), 'utf8').replace(/<script src="[^"]+"><\/script>/g, '');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true });
const w = dom.window;
const errors = [];
w.addEventListener('error', (e) => errors.push(e.message));
for (const f of ['city-data.js', 'sim.js', 'economy.js', 'events.js', 'responses.js', 'app.js']) w.eval(fs.readFileSync(path.join(src, f), 'utf8'));
const d = w.document;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const text = (id) => d.getElementById(id).textContent.replace(/\s+/g, ' ').trim();
const metric = (label) => {
  const m = [...d.querySelectorAll('.metric')].find((x) => x.querySelector('.lbl').textContent === label);
  if (!m) throw new Error('no metric called ' + label);
  return m.querySelector('.val').textContent + ' | ' + m.querySelector('.dlt').textContent.trim() + ' | ' + m.querySelector('.sub').textContent;
};
const click = (id) => d.getElementById(id).click();
const SETTLE = 400;   // lets the debounced 14-day outlook finish

let failed = 0;
const check = (name, ok, extra) => {
  console.log((ok ? 'PASS ' : 'FAIL ') + name + (extra ? '  -> ' + extra : ''));
  if (!ok) failed++;
};

(async () => {
  await wait(SETTLE);
  check('map has 11 roads, 8 areas', d.querySelectorAll('.road').length === 11 && d.querySelectorAll('.node-dot').length === 8);
  check('18 metric cards in 2 groups', d.querySelectorAll('.metric').length === 18 && d.querySelectorAll('.mgroup').length === 2);
  check('economy table has 8 rows', d.querySelectorAll('#econ-table tbody tr').length === 8);
  check('budget table shows balance', /Daily balance/.test(text('budget-table')));
  check('outlook chart drawn', !!d.querySelector('#outlook svg.chart'), text('outlook').slice(0, 90));
  check('baseline why-panel', /baseline/i.test(text('why')));
  console.log('  baseline:', metric('Business output'), '/', metric('Budget balance'));

  // bus cut -> economy follows
  click('btn-cut'); await wait(SETTLE);
  check('bus cut: workers arrive late', !/^0\.0/.test(metric('Workers arriving late')), metric('Workers arriving late'));
  check('bus cut: output slips', /▼/.test(metric('Business output')), metric('Business output'));
  check('bus cut: budget improves, travel cost rises', /▲/.test(metric('Budget balance')) && /▲/.test(metric('Travel time cost')),
    metric('Budget balance') + ' // ' + metric('Travel time cost'));
  check('bus cut: why-chain reaches the budget trade-off', /only looks better because/.test(text('why')), text('why').slice(-260));

  // heatwave -> power -> signals -> roads
  click('btn-reset'); await wait(SETTLE);
  click('btn-heat'); await wait(SETTLE);
  check('heatwave: power over capacity', /blackouts/.test(metric('Power demand')) && !/no blackouts/.test(metric('Power demand')), metric('Power demand'));
  check('heatwave: output falls', /▼/.test(metric('Business output')), metric('Business output'));
  check('heatwave: why mentions signals', /Traffic signals fail/.test(text('why')));
  check('heatwave: reserve runs out in outlook', /Reserve runs out on/.test(text('outlook')), text('outlook').slice(-170));
  check('heatwave: austerity feedback explained', /austerity rule trims bus service/.test(text('why')));

  // austerity off
  d.getElementById('chk-austerity').checked = false;
  d.getElementById('chk-austerity').dispatchEvent(new w.Event('change', { bubbles: true })); await wait(SETTLE);
  check('austerity off: no service cut message', !/Bus service is cut/.test(text('outlook')) && /austerity rule is off/.test(text('why')), text('outlook').slice(-120));
  d.getElementById('chk-austerity').checked = true;
  d.getElementById('chk-austerity').dispatchEvent(new w.Event('change', { bubbles: true })); await wait(SETTLE);
  click('btn-heat'); await wait(SETTLE);

  // flood
  click('btn-flood'); await wait(SETTLE);
  check('flood: 4 roads flooded', d.querySelectorAll('.road.closed').length === 4, d.querySelectorAll('.road.closed').length + '');
  check('flood: water rationed', /rationed/.test(metric('Water demand')) && !/no rationing/.test(metric('Water demand')), metric('Water demand'));
  check('flood: repair bill shown', /One-off road repairs/.test(text('budget-table')) && /repair bill/.test(metric('Budget balance')));
  check('flood: flooded roads cannot be clicked open', (() => {
    d.querySelectorAll('.hit')[2].dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
    return true;
  })());
  await wait(SETTLE);
  check('flood: still 4 closed after clicking a flooded road', d.querySelectorAll('.road.closed').length === 4);
  check('flood: checkboxes on flooded roads disabled', d.querySelectorAll('#road-table input[disabled]').length === 4);
  check('flood: why mentions water and repairs', /Water/.test(text('why')) && /repair bill/.test(text('why')));
  click('btn-flood'); await wait(SETTLE);
  check('flood toggles off', d.querySelectorAll('.road.closed').length === 0);

  // bridge via map click then reopen via checkbox
  d.querySelectorAll('.hit')[2].dispatchEvent(new w.MouseEvent('click', { bubbles: true })); await wait(SETTLE);
  check('bridge closure: stranded workers lower output', d.querySelectorAll('.road.closed').length === 1 && /▼/.test(metric('Business output')), metric('Business output'));
  check('bridge closure: why shows Workers step', /cannot reach work/.test(text('why')));
  const cb = d.querySelector('input[data-road="e3"]');
  cb.checked = false; cb.dispatchEvent(new w.Event('change', { bubbles: true })); await wait(SETTLE);
  check('checkbox reopens road', d.querySelectorAll('.road.closed').length === 0);

  // slider and baseline reset
  const s = d.getElementById('s-L2'); s.value = '50'; s.dispatchEvent(new w.Event('input', { bubbles: true })); await wait(SETTLE);
  check('slider: readout updates', /50%/.test(d.getElementById('o-L2').textContent));
  click('btn-baseline'); await wait(SETTLE);
  check('use as baseline: no change shown', /no change/.test(metric('Business output')), metric('Business output'));

  // ------------------------------------------------------------ Day 4
  const waitFor = async (fn, ms) => { const t0 = Date.now(); while (Date.now() - t0 < ms) { if (fn()) return true; await wait(100); } return false; };
  const dayInput = d.getElementById('view-day');
  const setDay = async (n) => { dayInput.value = String(n); dayInput.dispatchEvent(new w.Event('input', { bubbles: true })); await wait(SETTLE); };

  click('btn-reset'); await wait(SETTLE);
  check('event line says normal city', /normal city/.test(text('event-line')), text('event-line'));

  // flood ends on its own: watch the recovery with the day slider
  click('btn-flood'); await wait(SETTLE);
  check('flood: day 1 has roads under water', d.querySelectorAll('.road.closed').length === 4);
  check('flood: event line shows its duration', /flood for 6 days/.test(text('event-line')), text('event-line'));
  await setDay(8);
  // The flood drained the reserve, so the austerity rule is still holding bus service down: recovery is not instant.
  check('flood: by day 8 the water has gone but reduced buses linger', d.querySelectorAll('.road.closed').length === 0 && /runs at \d+% of normal service/.test(text('why')) && !/under water/.test(text('why')), text('why').slice(0, 140));
  check('flood: day label updates', /day 8/.test(text('view-day-out')));
  await setDay(1);
  click('btn-flood'); await wait(SETTLE);

  // strike toggles on and off, and ends after its duration
  click('btn-strike'); await wait(SETTLE);
  check('strike on: pressed and commute much worse', d.getElementById('btn-strike').getAttribute('aria-pressed') === 'true' && /▲/.test(metric('Average commute')), metric('Average commute'));
  await setDay(9);
  check('strike over by day 9: commute back near normal', /no change|[▲▼] [+-]?[0-4]\.\d/.test(metric('Average commute')), metric('Average commute'));
  await setDay(1);
  click('btn-strike'); await wait(SETTLE);
  check('strike off', d.getElementById('btn-strike').getAttribute('aria-pressed') === 'false' && /normal city/.test(text('event-line')));

  // surprise
  click('btn-surprise'); await wait(SETTLE);
  check('surprise me creates an event', !/normal city/.test(text('event-line')), text('event-line'));
  click('btn-reset'); await wait(SETTLE);

  // compare responses to a bridge closure
  d.querySelectorAll('.hit')[2].dispatchEvent(new w.MouseEvent('click', { bubbles: true })); await wait(SETTLE);
  check('compare: event line names the bridge', /Crown Bridge closed for 10 days/.test(text('event-line')), text('event-line'));
  click('btn-compare');
  const done = await waitFor(() => /^Compared/.test(text('cmp-status')), 60000);
  check('compare finishes', done, text('cmp-status'));
  const rows = d.querySelectorAll('#cmp-results table.cmp tbody tr');
  check('compare: ranked table with a best option', rows.length >= 3 && !!d.querySelector('#cmp-results .badge'), rows.length + ' rows');
  check('compare: do nothing is listed', /Do nothing/.test(text('cmp-results')));
  check('compare: explains the winner', /Why /.test(text('cmp-explain')) && /What each response does on its own/.test(text('cmp-explain')));
  check('compare: harm breakdown table', /Output lost/.test(text('cmp-explain')) && /Total harm/.test(text('cmp-explain')));
  const best = d.querySelector('#cmp-results tr.best');
  const bestSpend = best && best.children[2].textContent;
  const bestName = best && best.children[1].textContent.replace('best within budget', '').trim();
  const applyBtn = best && best.querySelector('button[data-apply]');
  applyBtn.click(); await wait(SETTLE + 400);
  check('apply: plan is in force', /Responses in force/.test(text('resp-line')) && d.getElementById('btn-clear-resp').style.display !== 'none', text('resp-line'));
  check('apply: why panel has a Response step', /Response/.test(text('why')) && /Starting cost/.test(text('why')));
  check('apply: applied row shows In force', /In force/.test(text('cmp-results')));
  check('apply: budget shows response spending', /Response spending/.test(text('budget-table')));
  check('apply: comparison is not marked stale (same event)', !/changed since this comparison/.test(text('cmp-results')));

  // budget slider re-ranks without re-running
  const slider = d.getElementById('cmp-budget');
  slider.value = '0'; slider.dispatchEvent(new w.Event('input', { bubbles: true }));
  check('budget 0: only doing nothing is affordable', d.querySelectorAll('#cmp-results table.cmp tbody tr').length === 1 && /No response beats doing nothing/.test(text('cmp-explain')));
  slider.value = '60000'; slider.dispatchEvent(new w.Event('input', { bubbles: true }));
  check('budget 60k: many options again', d.querySelectorAll('#cmp-results table.cmp tbody tr').length >= 4);
  slider.value = '5000'; slider.dispatchEvent(new w.Event('input', { bubbles: true }));
  check('budget 5k: a bigger budget is suggested', /With more money/.test(text('cmp-results')), text('cmp-results').slice(-260));
  slider.value = '40000'; slider.dispatchEvent(new w.Event('input', { bubbles: true }));

  // clear, then change the event: comparison goes stale
  click('btn-clear-resp'); await wait(SETTLE);
  check('clear responses', /No responses in force/.test(text('resp-line')));
  click('btn-heat'); await wait(SETTLE);
  check('changing the event marks the comparison stale', /changed since this comparison/.test(text('cmp-results')));

  check('no script errors', errors.length === 0, errors.join('; '));
  console.log(failed ? '\n' + failed + ' FAILED' : '\nall passed');
  process.exit(failed ? 1 : 0);
})();
