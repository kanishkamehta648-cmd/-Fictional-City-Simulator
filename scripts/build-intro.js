// Builds src/intro/intro.js (the 3D intro page) from intro-src/. The bundle is committed, so
// the simulator and the intro page still need no build step to run. Rebuild only after changing intro-src/.
//   npm i --no-save esbuild three@0.160.0 && node scripts/build-intro.js
const path = require('path');
let esbuild;
try { esbuild = require('esbuild'); } catch (e) { console.error('Run first:  npm i --no-save esbuild three@0.160.0'); process.exit(1); }
esbuild.build({
  entryPoints: [path.join(__dirname, '..', 'intro-src', 'main.js')],
  outfile: path.join(__dirname, '..', 'src', 'intro', 'intro.js'),
  bundle: true, minify: true, format: 'iife', target: 'es2019',
  loader: { '.jpg': 'dataurl' }, legalComments: 'none', logLevel: 'info'
}).catch(function () { process.exit(1); });
