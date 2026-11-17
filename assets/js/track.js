/*
 * Vẽ đường đua SVG từ danh sách góc trong data/tracks.js.
 * - Đường đua là polygon kín có bo cua (Q-curve); vị trí từng turn tự tính từ góc tương ứng.
 * - Xe chạy dọc đường bằng getPointAtLength trong requestAnimationFrame.
 */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  const { esc, reducedMotion } = PW.util;

  const NS = 'http://www.w3.org/2000/svg';
  const VIEW_W = 1000;
  const VIEW_H = 600;
  const LABEL_OFFSET = 54;
  const KERB_HALF = 42;
  const STRIPE = 9;
  const cache = new Map();
  let measureSvg = null;
  let uid = 0;

  const round = (n) => Math.round(n * 10) / 10;
  const pt = (p) => round(p.x) + ' ' + round(p.y);
  const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  function toward(from, to, d) {
    const len = dist(from, to) || 1;
    return { x: from.x + ((to.x - from.x) / len) * d, y: from.y + ((to.y - from.y) / len) * d };
  }

  /** Dựng path kín bo góc; điểm bắt đầu (vạch xuất phát) là trung điểm cạnh cuối → đầu. */
  function roundedPath(points, radius) {
    const n = points.length;
    const corners = points.map((cur, i) => {
      const prev = points[(i - 1 + n) % n];
      const next = points[(i + 1) % n];
      const r = Math.min(radius, dist(prev, cur) / 2, dist(cur, next) / 2);
      const a = toward(cur, prev, r);
      const b = toward(cur, next, r);
      return {
        a,
        b,
        c: cur,
        mid: { x: 0.25 * a.x + 0.5 * cur.x + 0.25 * b.x, y: 0.25 * a.y + 0.5 * cur.y + 0.25 * b.y },
      };
    });
    const start = { x: (points[n - 1].x + points[0].x) / 2, y: (points[n - 1].y + points[0].y) / 2 };
    let d = 'M' + pt(start);
    corners.forEach((k) => {
      d += ' L' + pt(k.a) + ' Q' + pt(k.c) + ' ' + pt(k.b);
    });
    d += ' L' + pt(start) + ' Z';
    return { d, corners, start };
  }

  function measurePath(d) {
    if (!measureSvg) {
      measureSvg = document.createElementNS(NS, 'svg');
      measureSvg.setAttribute('aria-hidden', 'true');
      measureSvg.setAttribute('width', '0');
      measureSvg.setAttribute('height', '0');
      measureSvg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
      document.body.appendChild(measureSvg);
    }
    const p = document.createElementNS(NS, 'path');
    p.setAttribute('d', d);
    measureSvg.appendChild(p);
    return p;
  }

  /**
   * Tính hình học của một đường đua (có cache).
   * @param {{id:string, points:number[][], radius?:number, turns:number[]}} def
   * @returns {{d:string, total:number, turns:Array<{len:number,x:number,y:number,lx:number,ly:number}>, start:{x:number,y:number,angle:number}}}
   */
  function geometry(def) {
    if (cache.has(def.id)) return cache.get(def.id);
    const points = def.points.map((p) => ({ x: p[0], y: p[1] }));
    const built = roundedPath(points, def.radius || 70);
    const path = measurePath(built.d);
    const total = path.getTotalLength();

    const N = 720;
    const samples = [];
    for (let i = 0; i <= N; i++) {
      const len = (total * i) / N;
      const p = path.getPointAtLength(len);
      samples.push({ len, x: p.x, y: p.y });
    }

    const turns = def.turns.map((cornerIndex) => {
      const k = built.corners[cornerIndex];
      let best = samples[0];
      let bestD = Infinity;
      samples.forEach((s) => {
        const d2 = (s.x - k.mid.x) ** 2 + (s.y - k.mid.y) ** 2;
        if (d2 < bestD) {
          bestD = d2;
          best = s;
        }
      });
      const vx = k.c.x - k.mid.x;
      const vy = k.c.y - k.mid.y;
      const vl = Math.hypot(vx, vy) || 1;
      return {
        len: best.len,
        x: best.x,
        y: best.y,
        lx: clamp(best.x + (vx / vl) * LABEL_OFFSET, 30, VIEW_W - 30),
        ly: clamp(best.y + (vy / vl) * LABEL_OFFSET, 30, VIEW_H - 30),
      };
    });

    const p0 = path.getPointAtLength(0);
    const p1 = path.getPointAtLength(2);
    const angle = (Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180) / Math.PI;
    path.remove();

    const geo = { d: built.d, total, turns, start: { x: p0.x, y: p0.y, angle } };
    cache.set(def.id, geo);
    return geo;
  }

  /** stroke-dasharray chỉ vẽ trong các khoảng [start, end] dọc theo path. */
  function dashFor(intervals, total) {
    const arr = [0];
    let pos = 0;
    intervals
      .slice()
      .sort((a, b) => a[0] - b[0])
      .forEach(([s, e]) => {
        const from = Math.max(s, pos, 0);
        const to = Math.min(e, total);
        if (to <= from) return;
        arr.push(from - pos, to - from);
        pos = to;
      });
    arr.push(Math.max(total - pos, 0) + 1);
    return arr.map((n) => round(n)).join(' ');
  }

  function kerbIntervals(geo) {
    return geo.turns.map((t) => [t.len - KERB_HALF, t.len + KERB_HALF]);
  }

  function stripeIntervals(geo) {
    const out = [];
    kerbIntervals(geo).forEach(([s, e]) => {
      for (let x = s; x + STRIPE <= e; x += STRIPE * 2) out.push([x, x + STRIPE]);
    });
    return out;
  }

  function startLine(geo, id, w) {
    const s = geo.start;
    return (
      '<g class="trk-start" transform="translate(' +
      round(s.x) +
      ' ' +
      round(s.y) +
      ') rotate(' +
      round(s.angle) +
      ')"><rect x="-5" y="' +
      -w / 2 +
      '" width="10" height="' +
      w +
      '" fill="url(#' +
      id +
      '-chk)"/></g>'
    );
  }

  function checkerDef(id) {
    return (
      '<pattern id="' +
      id +
      '-chk" width="10" height="10" patternUnits="userSpaceOnUse">' +
      '<rect width="10" height="10" fill="#F2F3F5"/>' +
      '<rect width="5" height="5" fill="#0B0C10"/><rect x="5" y="5" width="5" height="5" fill="#0B0C10"/>' +
      '</pattern>'
    );
  }

  /** SVG nhỏ cho lịch mùa giải (chuỗi HTML). */
  function thumb(def) {
    const geo = geometry(def);
    const id = 'th' + ++uid;
    return (
      '<svg class="thumb" viewBox="0 0 ' +
      VIEW_W +
      ' ' +
      VIEW_H +
      '" aria-hidden="true" focusable="false">' +
      '<defs>' +
      checkerDef(id) +
      '</defs>' +
      '<path class="t-base" d="' +
      geo.d +
      '"/>' +
      '<path class="t-draw" pathLength="1" d="' +
      geo.d +
      '"/>' +
      startLine(geo, id, 44) +
      '</svg>'
    );
  }

  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  /**
   * Render sơ đồ đường đua đầy đủ.
   * @param {object} def   định nghĩa từ PW.tracks
   * @param {object} opts  { href(i) } — SVG chỉ để nhìn (aria-hidden); điều hướng có thể truy cập nằm ở danh sách chip turn.
   * @returns {{el: SVGSVGElement, setCurrent(i:number, animate:boolean, visited:Set<number>):void, destroy():void}}
   */
  function renderRace(def, opts) {
    const geo = geometry(def);
    const id = 'tk' + ++uid;
    const markers = geo.turns
      .map((t, i) => {
        return (
          '<a class="turn-marker" data-index="' +
          i +
          '" href="' +
          esc(opts.href(i)) +
          '" tabindex="-1" aria-hidden="true">' +
          '<line class="trk-leader" x1="' +
          round(t.x) +
          '" y1="' +
          round(t.y) +
          '" x2="' +
          round(t.lx) +
          '" y2="' +
          round(t.ly) +
          '"/>' +
          '<circle cx="' +
          round(t.lx) +
          '" cy="' +
          round(t.ly) +
          '" r="23"/>' +
          '<text x="' +
          round(t.lx) +
          '" y="' +
          round(t.ly) +
          '">' +
          (i + 1) +
          '</text></a>'
        );
      })
      .join('');

    const html =
      '<svg class="track" viewBox="0 0 ' +
      VIEW_W +
      ' ' +
      VIEW_H +
      '" aria-hidden="true" focusable="false">' +
      '<defs>' +
      checkerDef(id) +
      '</defs>' +
      '<path class="trk-runoff" d="' +
      geo.d +
      '"/>' +
      '<path class="trk-kerb-w" d="' +
      geo.d +
      '" stroke-dasharray="' +
      dashFor(kerbIntervals(geo), geo.total) +
      '"/>' +
      '<path class="trk-kerb-r" d="' +
      geo.d +
      '" stroke-dasharray="' +
      dashFor(stripeIntervals(geo), geo.total) +
      '"/>' +
      '<path class="trk-asphalt" d="' +
      geo.d +
      '"/>' +
      '<path class="trk-center" d="' +
      geo.d +
      '"/>' +
      '<path class="trk-progress" d="' +
      geo.d +
      '" stroke-dasharray="' +
      round(geo.total) +
      ' ' +
      round(geo.total + 10) +
      '" stroke-dashoffset="' +
      round(geo.total) +
      '"/>' +
      startLine(geo, id, 34) +
      markers +
      '<g class="car"><circle class="car-halo" r="26"/><circle class="car-body" r="12"/></g>' +
      '</svg>';

    const holder = document.createElement('div');
    holder.innerHTML = html;
    const svg = holder.firstChild;
    const pathEl = svg.querySelector('.trk-asphalt');
    const progressEl = svg.querySelector('.trk-progress');
    const carEl = svg.querySelector('.car');
    const markerEls = Array.prototype.slice.call(svg.querySelectorAll('.turn-marker'));

    let currentLen = 0;
    let rafId = 0;

    function place(len) {
      currentLen = len;
      const p = pathEl.getPointAtLength(len);
      carEl.setAttribute('transform', 'translate(' + round(p.x) + ' ' + round(p.y) + ')');
      progressEl.setAttribute('stroke-dashoffset', String(round(geo.total - len)));
    }

    function setCurrent(index, animate, visitedSet) {
      markerEls.forEach((m, i) => {
        m.classList.toggle('is-current', i === index);
        m.classList.toggle('is-visited', i !== index && !!visitedSet && visitedSet.has(i));
      });
      const target = geo.turns[index] ? geo.turns[index].len : 0;
      cancelAnimationFrame(rafId);
      if (!animate || reducedMotion()) {
        place(target);
        return;
      }
      const from = currentLen;
      const duration = 650;
      const t0 = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - t0) / duration);
        place(from + (target - from) * ease(t));
        if (t < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    }

    return {
      el: svg,
      setCurrent,
      destroy() {
        cancelAnimationFrame(rafId);
      },
    };
  }

  PW.track = { geometry, thumb, renderRace, VIEW_W, VIEW_H };
})();
