import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import city from '../data/city.json';
import states from './states.json';
import facadeUrl from './facade.jpg';

export async function createCity(canvas) {

let W = innerWidth, H = innerHeight;
const S = 2.4;                                   // grid (0-100) -> world units
const gx = (x) => x * S - 120, gz = (y) => y * S - 120;
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const R = rng(7);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

// ---------- renderer / scene
const LOW = matchMedia('(pointer:coarse)').matches || Math.min(innerWidth, innerHeight) < 600;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !LOW, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, LOW ? 1.25 : 1.75)); renderer.setSize(W, H, false);
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.85;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, W / H, 1, 6000);

const sky = new Sky(); sky.scale.setScalar(4500); scene.add(sky);
const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 11), THREE.MathUtils.degToRad(215));
const su = sky.material.uniforms; su.turbidity.value = 7; su.rayleigh.value = 1.6; su.mieCoefficient.value = 0.006; su.mieDirectionalG.value = 0.86; su.sunPosition.value.copy(sunDir);
const pm = new THREE.PMREMGenerator(renderer); const envScene = new THREE.Scene(); envScene.add(sky.clone());
scene.environment = pm.fromScene(sky.parent ? scene : envScene, 0, 1, 6000).texture;
scene.fog = new THREE.FogExp2(0xe8b98a, 0.0006);

const sun = new THREE.DirectionalLight(0xffb878, 5.0); sun.position.copy(sunDir).multiplyScalar(320);
sun.castShadow = true; sun.shadow.mapSize.set(LOW ? 2048 : 4096, LOW ? 2048 : 4096);
Object.assign(sun.shadow.camera, { left: -190, right: 190, top: 190, bottom: -190, near: 10, far: 800 });
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.35; scene.add(sun);
scene.add(new THREE.HemisphereLight(0xffd0a0, 0x4a4238, 0.35));

// ---------- geometry helpers
const rivers = { hw: 4.2 };
const rz = (gridX) => 41 + 4 * Math.sin(gridX / 13 + 0.6);          // river centre (grid y)
const roads = city.roads, nb = Object.fromEntries(city.neighbourhoods.map(n => [n.id, n]));
const roadPts = (rd, n = 90) => { const a = nb[rd.from], b = nb[rd.to], p = []; for (let i = 0; i <= n; i++) { const t = i / n; p.push({ gx: a.x + (b.x - a.x) * t, gy: a.y + (b.y - a.y) * t }); } return p; };
const riverD = (x, z) => { const X = (x + 120) / S, Y = (z + 120) / S; return Math.abs(Y - rz(X)); };  // grid units
function gh(x, z) {                                                    // ground height
  const X = (x + 120) / S, Y = (z + 120) / S, d = Math.abs(Y - rz(X)), hw = rivers.hw;
  let h = 0.1 + 0.07 * clamp(d - (hw + 2.2), 0, 7);
  h = h * smooth(hw - 0.4, hw + 2.2, d) + (-2.4) * (1 - smooth(hw - 0.4, hw + 2.2, d));
  const sea = smooth(91.5, 95.5, Y); h = h * (1 - sea) + (-2.6) * sea;
  const far = Math.hypot(x, z * 0.9); if (far > 175) h += Math.min(14,(far - 175) * 0.05) * (0.6 + 0.4 * Math.sin(x / 23) * Math.cos(z / 19));
  return h;
}

// ---------- ground
{
  const g = new THREE.PlaneGeometry(520, 520, 260, 260); g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position, col = new Float32Array(pos.count * 3), c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), y = gh(x, z); pos.setY(i, y);
    const n = 0.5 + 0.5 * Math.sin(x / 9) * Math.cos(z / 11) + 0.15 * Math.sin(x / 3.1 + z / 2.3);
    c.setRGB(0.30 + 0.07 * n, 0.40 + 0.07 * n, 0.21 + 0.05 * n);     // grass
    let urban = 0; city.neighbourhoods.forEach(d => { urban = Math.max(urban, 1 - smooth(8, 15, Math.hypot(x - gx(d.x), z - gz(d.y)) / 1)); });
    c.lerp(new THREE.Color(0.47, 0.44, 0.40), urban * 0.9);              // paved
    if (y < 0.25 && y > -1.2) c.lerp(new THREE.Color(0.66, 0.60, 0.46), 0.7);   // bank
    if (y <= -1.2) c.setRGB(0.18, 0.28, 0.30);
    col.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 })); m.receiveShadow = true; scene.add(m);
}
// ---------- water
function normalTex() {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d'), im = g.createImageData(256, 256);
  const hgt = (x, y) => Math.sin(x * 0.13 + Math.sin(y * 0.07) * 2) * 0.5 + Math.sin(y * 0.19 + x * 0.05) * 0.3 + Math.sin((x + y) * 0.31) * 0.2;
  for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) { const dx = hgt(x + 1, y) - hgt(x - 1, y), dy = hgt(x, y + 1) - hgt(x, y - 1); const i = (y * 256 + x) * 4; im.data[i] = 128 + dx * 60; im.data[i + 1] = 128 + dy * 60; im.data[i + 2] = 255; im.data[i + 3] = 255; }
  g.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(26, 26); return t;
}
const water = new THREE.Mesh(new THREE.PlaneGeometry(2400, 2400).rotateX(-Math.PI / 2), new THREE.MeshPhysicalMaterial({ color: 0x35697a, roughness: 0.07, metalness: 0.0, normalMap: normalTex(), normalScale: new THREE.Vector2(0.35, 0.35), envMapIntensity: 1.4, clearcoat: 1, clearcoatRoughness: 0.1 }));
water.position.y = -0.6; scene.add(water);

// ---------- textures
function tex(c, rx = 1, ry = 1, mirror = false) { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = mirror ? THREE.MirroredRepeatWrapping : THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.repeat.set(rx, ry); return t; }
const rnd = rng(11);
function facadeTile(style) {
  const c = document.createElement('canvas'), e = document.createElement('canvas'); c.width = c.height = e.width = e.height = 256;
  const g = c.getContext('2d'), q = e.getContext('2d');
  const base = { glass: '#243649', brick: '#8a4f3b', plaster: '#d3b98f', concrete: '#a8a39a', industrial: '#8d8f8a' }[style];
  g.fillStyle = base; g.fillRect(0, 0, 256, 256); q.fillStyle = '#000'; q.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 1800; i++) { g.fillStyle = `rgba(${rnd() < .5 ? 0 : 255},${rnd() < .5 ? 0 : 255},${rnd() < .5 ? 0 : 255},${rnd() * 0.05})`; g.fillRect(rnd() * 256, rnd() * 256, 3, 3); }
  for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) {
    const x = k * 64, y = r * 64;
    if (style === 'glass') {
      const gr = g.createLinearGradient(x, y, x + 64, y + 64); gr.addColorStop(0, '#6f93b0'); gr.addColorStop(1, '#1d3045'); g.fillStyle = gr; g.fillRect(x + 2, y + 2, 60, 60);
      g.strokeStyle = '#0d1824'; g.lineWidth = 2; g.strokeRect(x + 1, y + 1, 62, 62);
      if (rnd() < 0.3) { q.fillStyle = '#ffd9a0'; q.fillRect(x + 4, y + 4, 56, 56); }
    } else {
      g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(x + 13, y + 9, 38, 46);
      const gr = g.createLinearGradient(x, y + 9, x, y + 55); gr.addColorStop(0, '#5b7186'); gr.addColorStop(1, '#1c2733'); g.fillStyle = gr; g.fillRect(x + 16, y + 12, 32, 40);
      g.strokeStyle = style === 'brick' ? '#d8c9b0' : '#f1e6d0'; g.lineWidth = 3; g.strokeRect(x + 16, y + 12, 32, 40); g.beginPath(); g.moveTo(x + 32, y + 12); g.lineTo(x + 32, y + 52); g.stroke();
      g.fillStyle = 'rgba(40,36,32,0.9)'; g.fillRect(x + 12, y + 52, 40, 4);
      if (r % 2 === 0) { g.strokeStyle = '#1b1a19'; g.lineWidth = 1.5; g.beginPath(); for (let b = 0; b < 8; b++) { g.moveTo(x + 14 + b * 5, y + 44); g.lineTo(x + 14 + b * 5, y + 54); } g.stroke(); }
      if (rnd() < 0.28) { q.fillStyle = '#ffcf8a'; q.fillRect(x + 17, y + 13, 30, 38); }
    }
  }
  g.fillStyle = 'rgba(0,0,0,0.25)'; for (let r = 0; r < 4; r++) g.fillRect(0, r * 64 + 62, 256, 2);
  return { c, e };
}
const tiles = {}; ['glass', 'brick', 'plaster', 'concrete', 'industrial'].forEach(s => tiles[s] = facadeTile(s));
const photo = await new Promise(r => { const im = new Image(); im.onload = () => r(im); im.onerror = () => r(null); im.src = facadeUrl; });
const asphaltC = document.createElement('canvas'); asphaltC.width = 128; asphaltC.height = 256;
{ const g = asphaltC.getContext('2d'); g.fillStyle = '#34363a'; g.fillRect(0, 0, 128, 256);
  for (let i = 0; i < 5000; i++) { const v = 40 + rnd() * 40; g.fillStyle = `rgba(${v},${v},${v},0.35)`; g.fillRect(rnd() * 128, rnd() * 256, 2, 2); }
  g.fillStyle = '#d7d4c8'; g.fillRect(62, 20, 4, 90); g.fillRect(62, 148, 4, 90); g.fillStyle = 'rgba(230,230,220,.55)'; g.fillRect(4, 0, 2, 256); g.fillRect(122, 0, 2, 256); }
const asphalt = tex(asphaltC); const asphaltMat = new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.82, metalness: 0.0 });
const concrete = new THREE.MeshStandardMaterial({ color: 0xb4ada0, roughness: 0.9 });
const stoneBridge = new THREE.MeshStandardMaterial({ color: 0xb9a98a, roughness: 0.9 });

// ---------- buildings
const footprints = [];                                                     // for tree / overlap tests
const distRoad = (x, z) => { let m = 1e9; for (const rd of roads) { const a = nb[rd.from], b = nb[rd.to]; const ax = gx(a.x), az = gz(a.y), bx = gx(b.x), bz = gz(b.y); const dx = bx - ax, dz = bz - az; const t = clamp(((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz), 0, 1); m = Math.min(m, Math.hypot(x - (ax + dx * t), z - (az + dz * t))); } return m; };
const okSpot = (x, z, r) => distRoad(x, z) > 3.4 + r * 0.15 && riverD(x, z) * S > rivers.hw * S + 3 + r * 0.5 && !footprints.some(f => Math.hypot(f.x - x, f.z - z) < f.r + r + 0.2) && Math.hypot(x, z) < 150 && gz(95) > z;
const matCache = {};
function wallMat(style, w, h, photoTex) {
  if (photoTex && !photo) photoTex = false;
  const key = style + Math.round(w) + 'x' + Math.round(h) + (photoTex ? 'p' : '');
  if (matCache[key]) return matCache[key];
  let m;
  if (photoTex) { const t = tex(photo, 1, 1, true); t.repeat.set(Math.max(1, w / 15), Math.max(0.8, h / 9.2)); m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.85 }); }
  else {
    const T = tiles[style], rx = Math.max(1, w / 6.4), ry = Math.max(1, h / 12);
    const map = tex(T.c, rx, ry), em = tex(T.e, rx, ry);
    m = style === 'glass' ? new THREE.MeshPhysicalMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.18, metalness: 0.55, envMapIntensity: 1.6 })
      : new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0.7, roughness: 0.88 });
  }
  return matCache[key] = m;
}
const roofMats = { terracotta: new THREE.MeshStandardMaterial({ color: 0x9a4b2f, roughness: 0.8 }), slate: new THREE.MeshStandardMaterial({ color: 0x4a4f57, roughness: 0.7 }), flat: new THREE.MeshStandardMaterial({ color: 0x6b6a66, roughness: 0.95 }), zinc: new THREE.MeshStandardMaterial({ color: 0x8c949a, roughness: 0.55, metalness: 0.4 }) };
const bldGroup = new THREE.Group(); scene.add(bldGroup);
function building(x, z, w, d, h, style, o = {}) {
  const y0 = gh(x, z) - 0.4, mats = [wallMat(style, d, h, o.photo), wallMat(style, d, h, o.photo), roofMats.flat, roofMats.flat, wallMat(style, w, h, o.photo), wallMat(style, w, h, o.photo)];
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h + 0.4, d), mats); m.position.set(x, y0 + (h + 0.4) / 2, z); m.castShadow = m.receiveShadow = true; bldGroup.add(m);
  const top = y0 + h + 0.4;
  if (o.roof) {                                                      // hip roof
    const rh = o.roofH || 2.4, g = new THREE.ConeGeometry(Math.hypot(w, d) / 2 * 1.03, rh, 4, 1); g.rotateY(Math.PI / 4); g.scale(w / Math.hypot(w, d) * 1.414, 1, d / Math.hypot(w, d) * 1.414);
    const r = new THREE.Mesh(g, roofMats[o.roof]); r.position.set(x, top + rh / 2, z); r.castShadow = true; bldGroup.add(r);
    if (rnd() < 0.8) { const ch = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.8, 0.7), new THREE.MeshStandardMaterial({ color: 0x8a5a44, roughness: 0.9 })); ch.position.set(x + w * 0.25, top + rh * 0.5 + 0.6, z - d * 0.2); ch.castShadow = true; bldGroup.add(ch); }
  } else if (rnd() < 0.7) {
    const ac = new THREE.Mesh(new THREE.BoxGeometry(1.4 + rnd(), 0.9, 1.1), roofMats.zinc); ac.position.set(x + (rnd() - .5) * w * .5, top + 0.45, z + (rnd() - .5) * d * .5); ac.castShadow = true; bldGroup.add(ac);
  }
  footprints.push({ x, z, r: Math.hypot(w, d) / 2 });
}
function fillDistrict(d, spec) {
  const cx = gx(d.x), cz = gz(d.y); let placed = 0, tries = 0;
  while (placed < spec.count && tries < spec.count * 200) {
    tries++; const a = R() * Math.PI * 2, r = Math.sqrt(R()) * spec.radius, x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r * 0.85;
    const w = spec.w[0] + R() * (spec.w[1] - spec.w[0]), dd = spec.d ? spec.d[0] + R() * (spec.d[1] - spec.d[0]) : w * (0.85 + R() * 0.4);
    const h = spec.h[0] + Math.pow(R(), spec.hp || 1.4) * (spec.h[1] - spec.h[0]) * (1 - (r / spec.radius) * 0.35);
    if (!okSpot(x, z, Math.hypot(w, dd) / 2)) continue;
    const o = { roof: spec.roof && (typeof spec.roof === 'function' ? spec.roof() : spec.roof), photo: spec.photo, roofH: spec.roofH };
    building(x, z, w, dd, h, spec.style(), o); placed++;
  }
}
const D = city.neighbourhoods; const byId = (i) => D.find(n => n.id === i);
fillDistrict(byId('cbd'), { count: 40, radius: 15, w: [4, 7], h: [16, 46], hp: 0.8, style: () => 'glass' });
fillDistrict(byId('cbd'), { count: 18, radius: 16, w: [5, 9], h: [8, 16], style: () => R() < 0.5 ? 'glass' : 'concrete' });
fillDistrict(byId('techpark'), { count: 14, radius: 15, w: [8, 13], d: [6, 9], h: [6, 12], hp: 1, style: () => 'glass' });
fillDistrict(byId('oldtown'), { count: 110, radius: 19, w: [6, 11], h: [9, 15], hp: 1, style: () => 'plaster', roof: () => R() < 0.7 ? 'terracotta' : 'slate', roofH: 2.6, photo: true });
fillDistrict(byId('riverside'), { count: 70, radius: 18, w: [6, 11], h: [9, 14], style: () => 'plaster', roof: () => R() < 0.6 ? 'terracotta' : 'slate', roofH: 2.4, photo: true });
for (const id of ['northfield', 'hillcrest', 'eastgate']) fillDistrict(byId(id), { count: 80, radius: 19, w: [3.4, 6], h: [4, 9], hp: 1.6, style: () => R() < 0.5 ? 'plaster' : 'brick', roof: () => R() < 0.75 ? 'terracotta' : 'slate', roofH: 2.2 });
fillDistrict(byId('harbor'), { count: 22, radius: 15, w: [8, 16], d: [5, 8], h: [4, 7], hp: 1, style: () => 'industrial' });
// landmarks
function landmark(id, x, z, w, d, h, style, o) { building(x, z, w, d, h, style, o); }
const cb = byId('cbd'); landmark('bay_general', gx(cb.x) + 14, gz(cb.y) + 9, 11, 8, 14, 'concrete', {});
const hb = byId('harbor'); landmark('harbor_health', gx(hb.x) - 8, gz(hb.y) - 13, 8, 6, 9, 'brick', {});
// clock tower in Old Town
{ const ot = byId('oldtown'), x = gx(ot.x) + 3, z = gz(ot.y) + 6; const mat = new THREE.MeshStandardMaterial({ color: 0xc9ab7c, roughness: 0.85 }); const t = new THREE.Mesh(new THREE.BoxGeometry(3.2, 20, 3.2), mat); t.position.set(x, gh(x, z) + 10, z); t.castShadow = true; scene.add(t);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(2.6, 6.5, 4), roofMats.terracotta); cap.rotation.y = Math.PI / 4; cap.position.set(x, gh(x, z) + 23.2, z); cap.castShadow = true; scene.add(cap);
  const face = new THREE.MeshStandardMaterial({ color: 0xf3ead3, emissive: 0xffd9a0, emissiveIntensity: 0.4 }); [[0, 1.65], [1.65, 0]].forEach(([dx, dz]) => { const c = new THREE.Mesh(new THREE.CircleGeometry(1.1, 24), face); c.position.set(x + dx, gh(x, z) + 17, z + dz); c.rotation.y = dz === 0 ? Math.PI / 2 : 0; scene.add(c); });
  footprints.push({ x, z, r: 3 }); }

// ---------- roads
const roadGroup = new THREE.Group(); scene.add(roadGroup);
const roadInfo = {};
function ribbon(pts, w, ys, mat, vscale = 1, lift = 0) {
  const g = new THREE.BufferGeometry(), P = [], UV = [], I = []; let len = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz) || 1, nx = -tz / l, nz = tx / l;
    if (i) len += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z);
    P.push(pts[i].x + nx * w / 2, ys[i] + lift, pts[i].z + nz * w / 2, pts[i].x - nx * w / 2, ys[i] + lift, pts[i].z - nz * w / 2); UV.push(0, len * vscale, 1, len * vscale);
    if (i < pts.length - 1) { const k = i * 2; I.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(UV, 2)); g.setIndex(I); g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.receiveShadow = true; m.castShadow = false; return m;
}
const hMark = new THREE.MeshStandardMaterial({ color: 0xe8e4d6, roughness: 0.8 });
const lampPos = [];
for (const rd of roads) {
  const gp = roadPts(rd), pts = gp.map(p => ({ x: gx(p.gx), z: gz(p.gy) })), isBr = rd.bridge;
  const ys = pts.map((p, i) => { const d = Math.abs(gp[i].gy - rz(gp[i].gx)); const bp = 1.35 * smooth(rivers.hw + 3.6, rivers.hw + 0.4, d); return Math.max(gh(p.x, p.z) + 0.08, bp > 0.05 ? 0.2 + bp : 0); });
  const w = isBr ? 3.6 : 3.2;
  const road = ribbon(pts, w, ys, asphaltMat, 1 / 18); road.userData.road = rd.id; roadGroup.add(road);
  roadGroup.add(ribbon(pts, w + 2.6, ys, concrete, 1, -0.06));
  // piers + parapets on bridge parts
  const onBr = ys.map((y, i) => y > 0.9);
  for (let i = 0; i < pts.length - 1; i++) if (onBr[i]) {
    const a = pts[i], b = pts[i + 1], l = Math.hypot(b.x - a.x, b.z - a.z), ang = Math.atan2(b.x - a.x, b.z - a.z), nxx = -(b.z - a.z) / l, nzz = (b.x - a.x) / l;
    [-1, 1].forEach(s => { const p = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.8, l + 0.05), stoneBridge); p.position.set((a.x + b.x) / 2 + nxx * s * (w / 2 + 0.2), ys[i] + 0.5, (a.z + b.z) / 2 + nzz * s * (w / 2 + 0.2)); p.rotation.y = ang; p.castShadow = true; scene.add(p); });
    const belly = new THREE.Mesh(new THREE.BoxGeometry(w + 0.5, 0.9, l + 0.05), stoneBridge); belly.position.set((a.x + b.x) / 2, ys[i] - 0.45, (a.z + b.z) / 2); belly.rotation.y = ang; belly.castShadow = true; scene.add(belly);
    if (i % 12 === 6) { const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.2, ys[i] + 3.2, 14), stoneBridge); pier.position.set(a.x, (ys[i] - 3.2) / 2 - 0.2, a.z); pier.castShadow = true; scene.add(pier); }
  }
  // crosswalks near both ends
  [0.09, 0.91].forEach(t => { const i = Math.round(t * (pts.length - 1)), p = pts[i], q = pts[Math.min(pts.length - 1, i + 1)], l = Math.hypot(q.x - p.x, q.z - p.z) || 1, ang = Math.atan2(q.x - p.x, q.z - p.z);
    for (let k = -3; k <= 3; k++) { const s = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 2.2).rotateX(-Math.PI / 2), hMark); s.position.set(p.x + (-(q.z - p.z) / l) * k * 0.95 * 0.55 * 1.0, ys[i] + 0.1, p.z + ((q.x - p.x) / l) * k * 0.95 * 0.55 * 1.0); s.rotation.y = ang + Math.PI / 2; roadGroup.add(s); } });
  roadInfo[rd.id] = { pts, ys, w, len: pts.reduce((s, p, i) => i ? s + Math.hypot(p.x - pts[i - 1].x, p.z - pts[i - 1].z) : 0, 0) };
  for (let i = 4; i < pts.length - 4; i += 6) if (ys[i] < 0.9) lampPos.push({ x: pts[i].x + (i % 12 ? 1 : -1) * (w / 2 + 1.7), z: pts[i].z + 0.4, y: ys[i] });
}
// street lamps (instanced poles + glowing heads)
{ const poles = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.07, 0.09, 4.2, 6), new THREE.MeshStandardMaterial({ color: 0x1b1c1e, roughness: 0.6 }), lampPos.length);
  const heads = new THREE.InstancedMesh(new THREE.SphereGeometry(0.28, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffe2b0, emissive: 0xffc070, emissiveIntensity: 4 }), lampPos.length); const M = new THREE.Matrix4();
  lampPos.forEach((p, i) => { M.makeTranslation(p.x, p.y + 2.1, p.z); poles.setMatrixAt(i, M); M.makeTranslation(p.x, p.y + 4.3, p.z); heads.setMatrixAt(i, M); }); poles.castShadow = true; scene.add(poles, heads); }

// ---------- trees
{ const trees = []; const tr = rng(99);
  for (let i = 0; i < 3200 && trees.length < 420; i++) { const x = (tr() - 0.5) * 300, z = (tr() - 0.5) * 300; if (Math.hypot(x, z * 0.9) > 150 || gz(94) < z) continue; if (riverD(x, z) * S < rivers.hw * S + 2.2) continue; if (distRoad(x, z) < 3.4) continue; if (footprints.some(f => Math.hypot(f.x - x, f.z - z) < f.r + 1.2)) continue; const inUrban = D.some(d => Math.hypot(x - gx(d.x), z - gz(d.y)) < 9 && ['cbd', 'techpark', 'harbor'].includes(d.id)); if (inUrban && tr() < 0.8) continue; trees.push({ x, z, s: 0.8 + tr() * 0.9 }); }
  // street trees
  for (const rd of roads) { const info = roadInfo[rd.id]; for (let i = 8; i < info.pts.length - 8; i += 9) if (info.ys[i] < 0.9) { const p = info.pts[i]; [-1, 1].forEach(s => { const x = p.x + s * (info.w / 2 + 3.4), z = p.z; if (!footprints.some(f => Math.hypot(f.x - x, f.z - z) < f.r + 0.5) && riverD(x, z) * S > rivers.hw * S + 2) trees.push({ x, z, s: 0.7 + tr() * 0.4 }); }); } }
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.18, 0.26, 2.4, 6), new THREE.MeshStandardMaterial({ color: 0x4d3a2a, roughness: 1 }), trees.length);
  const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1.7, 1), new THREE.MeshStandardMaterial({ roughness: 0.9, flatShading: false }), trees.length);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3(), col = new THREE.Color();
  trees.forEach((t, i) => { const y = gh(t.x, t.z); M.compose(v.set(t.x, y + 1.2 * t.s, t.z), q, sc.set(t.s, t.s, t.s)); trunk.setMatrixAt(i, M); M.compose(v.set(t.x, y + 3.6 * t.s, t.z), q, sc.set(t.s * 1.1, t.s * 1.0, t.s * 1.1)); crown.setMatrixAt(i, M);
    col.setHSL(0.22 + (tr() - 0.5) * 0.06, 0.45 + tr() * 0.2, 0.2 + tr() * 0.12); crown.setColorAt(i, col); });
  trunk.castShadow = crown.castShadow = true; crown.receiveShadow = true; scene.add(trunk, crown); }

// ---------- harbor containers, cranes
{ const hb2 = byId('harbor'), cols = [0x2d5f8b, 0x9c4a2f, 0x3e7a52, 0xb98a2e, 0x7d3b34]; const cont = new THREE.InstancedMesh(new THREE.BoxGeometry(2.4, 1.1, 1.0), new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.2 }), 260); const M = new THREE.Matrix4(); let n = 0; const c2 = new THREE.Color();
  for (let a = 0; a < 6; a++) for (let b = 0; b < 8; b++) for (let h = 0; h < 3; h++) { if (n >= 260) break; const x = gx(hb2.x) + 14 + a * 3.2, z = gz(hb2.y) - 8 + b * 1.4; if (!okSpot(x, z, 1.3) && distRoad(x, z) < 3) continue; M.makeTranslation(x, gh(x, z) + 0.7 + h * 1.1, z); cont.setMatrixAt(n, M); c2.set(cols[(a * 3 + b + h) % cols.length]); cont.setColorAt(n, c2); n++; }
  cont.count = n; cont.castShadow = true; scene.add(cont);
  const steel = new THREE.MeshStandardMaterial({ color: 0x5d7a99, roughness: 0.5, metalness: 0.5 });
  [[-6, 14], [6, 14]].forEach(([dx, dz]) => { const x = gx(hb2.x) + dx, z = gz(hb2.y) + dz; const g = new THREE.Group(); [[-2, 0], [2, 0]].forEach(([a]) => { const leg = new THREE.Mesh(new THREE.BoxGeometry(0.5, 16, 0.5), steel); leg.position.set(a, 8, 0); g.add(leg); }); const boom = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.7, 18), steel); boom.position.set(0, 16, -5); g.add(boom); g.position.set(x, 0, z); g.traverse(o => o.castShadow = true); scene.add(g); }); }

// ---------- traffic (cars along roads), driven by state
const carBody = new THREE.InstancedMesh(new THREE.BoxGeometry(1.7, 0.55, 0.85), new THREE.MeshStandardMaterial({ roughness: 0.35, metalness: 0.6 }), 900);
const carTop = new THREE.InstancedMesh(new THREE.BoxGeometry(0.85, 0.4, 0.75), new THREE.MeshStandardMaterial({ color: 0x182028, roughness: 0.15, metalness: 0.6 }), 900);
const carLights = new THREE.InstancedMesh(new THREE.BoxGeometry(0.1, 0.18, 0.7), new THREE.MeshStandardMaterial({ color: 0xff2a20, emissive: 0xff2010, emissiveIntensity: 3 }), 900);
carBody.castShadow = carTop.castShadow = true; scene.add(carBody, carTop, carLights);
const palette = [0xe9e6df, 0x24272b, 0x8b1e22, 0x2b4d7a, 0xc8c9cc, 0x4d5b4a, 0xb77b2c]; const cr = rng(5); const carDefs = [];
function buildCars(state) {
  carDefs.length = 0;
  for (const r of state.roads) { if (r.closed || r.flooded) continue; const info = roadInfo[r.id]; if (!info) continue; const ratio = clamp(r.loadRatio, 0.1, 1.6), n = Math.round(info.len / 4.2 * (0.3 + ratio * 0.95));
    for (let k = 0; k < n && carDefs.length < 900; k++) carDefs.push({ id: r.id, t0: cr(), dir: cr() < 0.5 ? 1 : -1, lane: 0.85, speed: (0.012 + 0.02 * (r.speedFactor || 1)) * (0.8 + cr() * 0.4), col: palette[Math.floor(cr() * palette.length)], cong: ratio > 1.0 }); }
}
function updateCars(time) {
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), c = new THREE.Color();
  carDefs.forEach((cd, i) => { const info = roadInfo[cd.id], t = (((cd.t0 + cd.dir * cd.speed * time * 6 / (info.len / 100)) % 1) + 1) % 1, f = t * (info.pts.length - 1), a = Math.floor(f), b = Math.min(info.pts.length - 1, a + 1), u = f - a;
    const pa = info.pts[a], pb = info.pts[b], x = pa.x + (pb.x - pa.x) * u, z = pa.z + (pb.z - pa.z) * u, y = info.ys[a] + (info.ys[b] - info.ys[a]) * u; const tx = pb.x - pa.x, tz = pb.z - pa.z, l = Math.hypot(tx, tz) || 1, nx = -tz / l, nz = tx / l, off = cd.dir * cd.lane;
    e.set(0, Math.atan2(tx * cd.dir, tz * cd.dir) - Math.PI / 2, 0); q.setFromEuler(e); v.set(x + nx * off, y + 0.42, z + nz * off); M.compose(v, q, one); carBody.setMatrixAt(i, M);
    v.set(x + nx * off, y + 0.82, z + nz * off); M.compose(v, q, one); carTop.setMatrixAt(i, M); const bk = new THREE.Vector3(-0.85 * cd.dir * tx / l * -1, 0, -0.85 * cd.dir * tz / l * -1);
    v.set(x + nx * off - tx / l * 0.86 * cd.dir, y + 0.5, z + nz * off - tz / l * 0.86 * cd.dir); M.compose(v, q, one); carLights.setMatrixAt(i, M); c.set(cd.col); carBody.setColorAt(i, c); });
  [carBody, carTop, carLights].forEach(m => { m.count = carDefs.length; m.instanceMatrix.needsUpdate = true; }); if (carBody.instanceColor) carBody.instanceColor.needsUpdate = true;
}
// buses
const busLines = [{ id: 'L1', col: 0x2f6db5 }, { id: 'L2', col: 0x7a49b5 }, { id: 'L3', col: 0x1f9aa0 }];
const buses = new THREE.InstancedMesh(new THREE.BoxGeometry(4.6, 1.5, 1.25), new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.3 }), 40); buses.castShadow = true; scene.add(buses);
const busDefs = [];
function buildBuses(state) { busDefs.length = 0; city.busLines.forEach(l => { const st = state.buses.find(b => b.lineId === l.id); if (!st || !st.active) return; const col = busLines.find(b => b.id === l.id).col, n = Math.max(1, Math.round(st.busesRunning / 3));
  const seg = []; for (let i = 0; i < l.stops.length - 1; i++) { const rd = roads.find(r => (r.from === l.stops[i] && r.to === l.stops[i + 1]) || (r.to === l.stops[i] && r.from === l.stops[i + 1])); if (rd) seg.push(rd.id); }
  for (let k = 0; k < n && seg.length; k++) busDefs.push({ id: seg[k % seg.length], t0: (k * 0.37) % 1, dir: k % 2 ? 1 : -1, col, line: l.id }); }); }
function updateBuses(time) { const M = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1), c = new THREE.Color(); let n = 0;
  busDefs.forEach(bd => { const info = roadInfo[bd.id]; if (!info || closedRoads.has(bd.id)) return; const t = (((bd.t0 + bd.dir * 0.006 * time * 6 / (info.len / 100)) % 1) + 1) % 1, f = t * (info.pts.length - 1), a = Math.floor(f), b = Math.min(info.pts.length - 1, a + 1), u = f - a, pa = info.pts[a], pb = info.pts[b];
    const tx = pb.x - pa.x, tz = pb.z - pa.z, l = Math.hypot(tx, tz) || 1, nx = -tz / l, nz = tx / l, off = bd.dir * 0.85; e.set(0, Math.atan2(tx * bd.dir, tz * bd.dir) - Math.PI / 2, 0); q.setFromEuler(e);
    v.set(pa.x + tx * u + nx * off, info.ys[a] + 1.0, pa.z + tz * u + nz * off); M.compose(v, q, one); buses.setMatrixAt(n, M); c.set(bd.col); buses.setColorAt(n, c); n++; });
  buses.count = n; buses.instanceMatrix.needsUpdate = true; if (buses.instanceColor) buses.instanceColor.needsUpdate = true; }

// ---------- barricade + labels
const barr = new THREE.Group(); scene.add(barr);
function label(text, color = '#ffffff', big = false) { const c = document.createElement('canvas'); c.width = 1024; c.height = 128; const g = c.getContext('2d'); g.font = `600 ${big ? 54 : 46}px Onest, Arial`; g.textAlign = 'center'; g.fillStyle = 'rgba(15,20,28,0.62)'; const w = g.measureText(text).width + 60; g.beginPath(); g.roundRect(512 - w / 2, 22, w, 84, 24); g.fill(); g.fillStyle = color; g.fillText(text, 512, 82); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true })); s.scale.set(big ? 44 : 30, big ? 5.5 : 3.75, 1); s.renderOrder = 10; return s; }
const closedRoads = new Set(); let closedLabel = null;
function setClosed(ids, word) { closedRoads.clear(); ids.forEach(i => closedRoads.add(i)); barr.clear(); closedLabel = null;
  const stripe = document.createElement('canvas'); stripe.width = 64; stripe.height = 16; const g = stripe.getContext('2d'); for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#f3f3f0' : '#d1301f'; g.fillRect(i * 8, 0, 8, 16); } const st = tex(stripe, 2, 1); const sm = new THREE.MeshStandardMaterial({ map: st, roughness: 0.6 });
  ids.forEach(id => { const info = roadInfo[id], rd = roads.find(r => r.id === id); [4, info.pts.length - 5].forEach(i => { const p = info.pts[i], q = info.pts[i + 1], ang = Math.atan2(q.x - p.x, q.z - p.z); const b = new THREE.Mesh(new THREE.BoxGeometry(info.w + 0.6, 0.55, 0.3), sm); b.position.set(p.x, info.ys[i] + 0.9, p.z); b.rotation.y = ang; b.castShadow = true; barr.add(b);
      const b2 = b.clone(); b2.position.y += 0.7; barr.add(b2); for (let k = -1; k <= 1; k += 2) { const cone = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.8, 10), new THREE.MeshStandardMaterial({ color: 0xff6a1a, roughness: 0.6 })); cone.position.set(p.x + Math.cos(ang) * k * 2.4, info.ys[i] + 0.4, p.z - Math.sin(ang) * k * 2.4); barr.add(cone); } });
    const mid = info.pts[Math.floor(info.pts.length / 2)]; closedLabel = label(rd.name + (word || ' CLOSED'), '#ff8a7a', true); closedLabel.position.set(mid.x, info.ys[Math.floor(info.pts.length / 2)] + 9, mid.z); barr.add(closedLabel); });
}
const labels = new THREE.Group(); scene.add(labels);
D.forEach(d => { const s = label(d.name); s.position.set(gx(d.x), (d.id === 'cbd' ? 56 : d.id === 'techpark' ? 22 : 24), gz(d.y)); labels.add(s); });

// ---------- state
let floodLevel = 0;
function applyState(name, flood) {
  const st = states[name]; buildCars(st); buildBuses(st); setClosed(st.roads.filter(r => r.closed).map(r => r.id), flood > 0 ? ' FLOODED' : ' CLOSED');
  floodLevel = flood; water.position.y = -0.6 + flood * 1.5;
  scene.fog.color.set(flood > 0 ? 0xc9b49a : 0xd9b48f);
}

// ---------- compose
const composer = new EffectComposer(renderer); composer.setSize(W, H); composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(W, H), LOW ? 0.0 : 0.5, 0.65, 0.9); composer.addPass(bloom); composer.addPass(new OutputPass());
applyState('normal', 0);
const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();
return {
  roadNames: Object.fromEntries(roads.map(r => [r.id, r.name])),
  setState(name, flood) { applyState(name, flood || 0); },
  setFlood(f) { floodLevel = f; water.position.y = -0.6 + f * 1.5; },
  setView(p, t, fov) { camera.position.set(p[0], p[1], p[2]); camera.lookAt(t[0], t[1], t[2]); if (fov && camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); } },
  setLabels(o) { labels.visible = o > 0.02; labels.children.forEach(s => s.material.opacity = o); },
  resize(w, h) { W = w; H = h; renderer.setSize(w, h, false); composer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); },
  render(time) { updateCars(time); updateBuses(time); (LOW ? renderer.render(scene, camera) : composer.render()); },
  dispose() { renderer.dispose(); composer.dispose && composer.dispose(); },
  low: LOW
};
}
