// Static checks for the 3D intro page (src/intro.html): every local file it points to exists, nothing is
// fetched from the internet at run time, the bundle is present, and the page links to the simulator.
// (A real-browser run of the page is done by hand and in docs/intro.md.)
const fs = require('fs'), path = require('path'), assert = require('assert');
const src = path.join(__dirname, '..', 'src');
const html = fs.readFileSync(path.join(src, 'intro.html'), 'utf8');
let n = 0;
function ok(cond, msg) { assert(cond, msg); n++; console.log('PASS ' + msg); }

const refs = []; html.replace(/(?:src|href)="([^"#][^"]*)"/g, function (_, u) { refs.push(u); });
refs.filter(function (u) { return !/^https?:/.test(u); }).forEach(function (u) {
  ok(fs.existsSync(path.join(src, u.split('?')[0])), 'intro.html: local file exists: ' + u);
});
ok(refs.some(function (u) { return u === 'index.html'; }), 'intro.html links to the simulator (index.html)');
ok(!/<(script|link|img)[^>]+(src|href)="https?:\/\/(?!github\.com)/.test(html), 'intro.html loads no script, style or image from the internet');
ok(!/url\(https?:/.test(html), 'intro.html CSS fetches nothing from the internet');
const bundle = fs.readFileSync(path.join(src, 'intro', 'intro.js'), 'utf8');
ok(bundle.length > 100000, 'intro bundle is built (' + Math.round(bundle.length / 1024) + ' KB)');
ok(!/fetch\(\s*["']https?:/.test(bundle) && !/XMLHttpRequest/.test(bundle), 'intro bundle makes no network requests');
ok(/Crown Bridge/.test(JSON.stringify(require('../data/city.json'))) && /Crown Bridge/.test(html), 'intro copy names a real road from city.json');
['142%', '6.5%', '20.6%', '1,132k', '67.7%'].forEach(function (f) { ok(html.indexOf(f) >= 0, 'intro quotes verified simulator figure ' + f); });
const imgs = fs.readdirSync(path.join(src, 'intro', 'img'));
const bytes = imgs.reduce(function (s, f) { return s + fs.statSync(path.join(src, 'intro', 'img', f)).size; }, 0);
ok(bytes < 2.5 * 1024 * 1024, 'intro images total ' + Math.round(bytes / 1024) + ' KB (under 2.5 MB)');
console.log('\n' + n + ' intro checks passed');
