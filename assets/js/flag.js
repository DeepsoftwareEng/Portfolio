/*
 * Chuyển cảnh cờ caro: hai lá cờ lớn vẫy từ hai bên, bắt chéo nhau che kín màn hình,
 * đổi nội dung khi đã che kín rồi bay tiếp ra phía đối diện. Tôn trọng reduced-motion.
 *
 * Cờ được vẽ bằng canvas: mỗi ô caro là một đa giác bám theo mặt sóng liên tục
 * (cạnh cong, có khử răng cưa), bóng nếp vải là gradient theo độ dốc của sóng.
 */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  const { reducedMotion } = PW.util;

  const COVER = 620; // ms: lúc hai cờ đã che kín màn hình → đổi nội dung
  const DURATION = 1500; // ms: tổng thời gian chuyển cảnh
  const LIGHT = '#f2f3f5';
  const DARK = '#14161c';
  const TAU = Math.PI * 2;

  let current = null;
  let pending = null;

  const easeOut = (x) => 1 - Math.pow(1 - x, 3);
  const easeIn = (x) => x * x * x;
  const lerp = (a, b, x) => a + (b - a) * x;

  /** Vị trí (theo bề rộng màn hình) và góc nghiêng của cờ trái tại tiến độ p ∈ [0,1]. Cờ phải là ảnh đối xứng. */
  function track(p) {
    if (p < 0.4) {
      const x = easeOut(p / 0.4);
      return { x: lerp(-1.6, 0, x), rot: -12 };
    }
    if (p < 0.6) {
      const x = (p - 0.4) / 0.2;
      return { x: lerp(0, 0.03, x), rot: lerp(-12, -10, x) };
    }
    const x = easeIn((p - 0.6) / 0.4);
    return { x: lerp(0.03, 1.6, x), rot: lerp(-10, -6, x) };
  }

  /** Tạo bộ vẽ một lá cờ kích thước fw × fh (px), ô caro cạnh sq. */
  function makeFlag(fw, fh, sq, amp, seed) {
    const k = (TAU * 1.5) / fw; // ~1.5 bước sóng trên bề rộng cờ
    const kv = (TAU * 0.6) / fh;
    const w = TAU / 0.9; // chu kỳ 0.9s
    const cols = Math.ceil(fw / sq);
    const rows = Math.ceil(fh / sq);
    const SEG = 4; // số đoạn trên mỗi cạnh ô → cạnh cong mượt

    function point(u, v, t) {
      const ph = u * k - w * t + seed;
      const a = amp * (0.25 + 0.75 * Math.min(1, u / (fw * 0.25)));
      return [
        u - a * 0.3 * Math.cos(ph) + amp * 0.2 * Math.sin(v * kv - w * 0.8 * t + seed),
        v + a * Math.sin(ph) + amp * 0.3 * Math.sin(v * kv * 0.7 + w * 0.6 * t + seed),
      ];
    }

    /** Thêm một cạnh từ (u0,v0) tới (u1,v1) vào path, chia nhỏ để bám sóng. */
    function edge(path, u0, v0, u1, v1, t, n, first) {
      for (let s = first ? 0 : 1; s <= n; s++) {
        const p = point(lerp(u0, u1, s / n), lerp(v0, v1, s / n), t);
        if (s === 0) path.moveTo(p[0], p[1]);
        else path.lineTo(p[0], p[1]);
      }
    }

    function quad(path, u0, v0, u1, v1, t, n) {
      edge(path, u0, v0, u1, v0, t, n, true);
      edge(path, u1, v0, u1, v1, t, n, false);
      edge(path, u1, v1, u0, v1, t, n, false);
      edge(path, u0, v1, u0, v0, t, n, false);
      path.closePath();
    }

    return function draw(ctx, t) {
      // Nền vải sáng + bóng đổ lên lá cờ bên dưới
      const outline = new Path2D();
      quad(outline, 0, 0, fw, fh, t, Math.max(cols, rows) * SEG);
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 40;
      ctx.fillStyle = LIGHT;
      ctx.fill(outline);
      ctx.restore();

      // Ô đen
      const dark = new Path2D();
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if ((i + j) % 2) continue;
          quad(dark, i * sq, j * sq, Math.min(fw, (i + 1) * sq), Math.min(fh, (j + 1) * sq), t, SEG);
        }
      }
      ctx.fillStyle = DARK;
      ctx.fill(dark);

      // Nếp vải: tối ở sườn đi xuống, sáng nhẹ ở sườn đi lên
      const g = ctx.createLinearGradient(0, 0, fw, 0);
      const STOPS = 48;
      for (let s = 0; s <= STOPS; s++) {
        const u = (fw * s) / STOPS;
        const c = Math.cos(u * k - w * t + seed) * Math.min(1, 0.3 + u / (fw * 0.25));
        g.addColorStop(
          s / STOPS,
          c > 0 ? 'rgba(0, 0, 0, ' + (c * 0.32).toFixed(3) + ')' : 'rgba(255, 255, 255, ' + (-c * 0.1).toFixed(3) + ')'
        );
      }
      ctx.save();
      ctx.clip(outline);
      ctx.fillStyle = g;
      ctx.fillRect(-fw * 0.1, -fh * 0.1, fw * 1.2, fh * 1.2);
      ctx.restore();

      // Cán cờ
      const pole = Math.max(6, sq * 0.14);
      const pg = ctx.createLinearGradient(-pole, 0, 0, 0);
      pg.addColorStop(0, '#6b707c');
      pg.addColorStop(0.45, LIGHT);
      pg.addColorStop(1, '#8a8f9c');
      ctx.fillStyle = pg;
      ctx.fillRect(-pole, -fh * 0.05, pole, fh * 1.1);
    };
  }

  function start(el) {
    const canvas = el.firstChild;
    const ctx = canvas.getContext('2d');
    const W = window.innerWidth;
    const H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);

    const fw = W * 1.1;
    const fh = H * 1.7;
    const sq = Math.min(W, H) * 0.12;
    const amp = H * 0.025;
    const flags = [
      { draw: makeFlag(fw, fh, sq, amp, 0), left: -0.3 * W, dir: 1 },
      { draw: makeFlag(fw, fh, sq, amp, 1.7), left: 0.2 * W, dir: -1 },
    ];
    const top = -0.35 * H;
    const t0 = performance.now();

    function frame(now) {
      if (current !== el) return;
      const ms = now - t0;
      const p = Math.min(1, ms / DURATION);
      const tr = track(p);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      flags.forEach((f) => {
        ctx.save();
        ctx.translate(f.left + fw / 2 + f.dir * tr.x * W, top + fh / 2);
        ctx.rotate((f.dir * tr.rot * Math.PI) / 180);
        if (f.dir < 0) ctx.scale(-1, 1);
        ctx.translate(-fw / 2, -fh / 2);
        f.draw(ctx, ms / 1000);
        ctx.restore();
      });
      if (p < 1) window.requestAnimationFrame(frame);
    }
    window.requestAnimationFrame(frame);
  }

  /** Huỷ lần đổi nội dung đang chờ (khi route khác chen vào giữa chừng). */
  function cancel() {
    if (pending) window.clearTimeout(pending);
    pending = null;
  }

  /**
   * Chạy chuyển cảnh và gọi `swap` khi màn hình đã bị che kín.
   * Nếu người xem tắt chuyển động → gọi `swap` ngay.
   */
  function cover(swap) {
    cancel();
    if (reducedMotion()) {
      swap();
      return;
    }
    if (current) current.remove();
    const el = document.createElement('div');
    el.className = 'xflag-overlay';
    el.setAttribute('aria-hidden', 'true');
    el.appendChild(document.createElement('canvas'));
    current = el;
    document.body.appendChild(el);
    start(el);

    pending = window.setTimeout(() => {
      pending = null;
      swap();
    }, COVER);
    window.setTimeout(() => {
      el.remove();
      if (current === el) current = null;
    }, DURATION);
  }

  PW.flag = { cover, cancel };
})();
