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
for (const f of ['city-data.js', 'sim.js', 'economy.js', 'app.js']) w.eval(fs.readFileSync(path.join(src, f), 'utf8'));
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

  check('no script errors', errors.length === 0, errors.join('; '));
  console.log(failed ? '\n' + failed + ' FAILED' : '\nall passed');
  process.exit(failed ? 1 : 0);
})();
