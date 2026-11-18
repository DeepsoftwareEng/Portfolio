/* Tiện ích dùng chung: escape HTML, format chuỗi, storage an toàn, icon SVG. */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});

  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  /** Escape một giá trị để chèn an toàn vào HTML. */
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (c) => ESC[c]);
  }

  /** Escape rồi biến `đoạn code` thành <code>. */
  function rich(value) {
    return esc(value).replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  /** Thay {key} trong chuỗi bằng vars[key]. */
  function fmt(template, vars) {
    return String(template).replace(/\{(\w+)\}/g, (match, key) =>
      vars && Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : match
    );
  }

  function pad2(n) {
    return String(n).padStart(2, '0');
  }

  /** true nếu giá trị có nội dung thật (dùng để ẩn khối trống). */
  function has(value) {
    if (value == null) return false;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'string') return value.trim() !== '';
    return true;
  }

  const storage = {
    get(area, key, fallback) {
      try {
        const raw = window[area].getItem(key);
        return raw == null ? fallback : JSON.parse(raw);
      } catch (e) {
        return fallback;
      }
    },
    set(area, key, value) {
      try {
        window[area].setItem(key, JSON.stringify(value));
      } catch (e) {
        /* storage bị chặn: bỏ qua, giao diện vẫn chạy */
      }
    },
  };

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /** Các turn đã xem, lưu theo chặng trong localStorage. */
  const visited = {
    KEY: 'pw.visited.v2', // v2: mã chặng đã đổi nghĩa khi sắp xếp lại mùa giải
    all() {
      const data = storage.get('localStorage', this.KEY, {});
      return data && typeof data === 'object' ? data : {};
    },
    get(raceId) {
      const list = this.all()[raceId];
      return new Set(Array.isArray(list) ? list : []);
    },
    add(raceId, index) {
      const data = this.all();
      const set = new Set(Array.isArray(data[raceId]) ? data[raceId] : []);
      set.add(index);
      data[raceId] = Array.from(set);
      storage.set('localStorage', this.KEY, data);
    },
  };

  // Icon từ bộ Lucide (ISC license), dạng stroke.
  const ICONS = {
    arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    external:
      '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  };

  function icon(name, className) {
    return (
      '<svg class="icon' +
      (className ? ' ' + className : '') +
      '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      (ICONS[name] || '') +
      '</svg>'
    );
  }

  /** Link ngoài mở tab mới; mailto giữ nguyên. */
  function linkAttrs(href) {
    return /^https?:/i.test(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
  }

  PW.util = { esc, rich, fmt, pad2, has, storage, reducedMotion, visited, icon, linkAttrs };
})();
