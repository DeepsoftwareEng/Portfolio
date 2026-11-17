/* Ngôn ngữ: chọn mặc định, tra chuỗi UI, ghép nội dung có fallback sang ngôn ngữ còn lại. */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  const { fmt, has, storage } = PW.util;

  const LANGS = ['vi', 'en'];
  const STORE_KEY = 'pw.lang';

  function other(lang) {
    return lang === 'vi' ? 'en' : 'vi';
  }

  function pick(obj, path) {
    return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
  }

  /** Lấy a nếu có nội dung, không thì b. */
  function prefer(a, b) {
    return has(a) ? a : b;
  }

  const i18n = {
    LANGS,
    lang: 'vi',

    isLang(value) {
      return LANGS.indexOf(value) !== -1;
    },

    /** Ngôn ngữ mặc định: lựa chọn đã lưu → ngôn ngữ trình duyệt → vi. */
    preferred() {
      const saved = storage.get('localStorage', STORE_KEY, null);
      if (this.isLang(saved)) return saved;
      const nav = (navigator.language || 'vi').toLowerCase();
      return nav.indexOf('vi') === 0 ? 'vi' : 'en';
    },

    set(lang) {
      this.lang = this.isLang(lang) ? lang : 'vi';
      document.documentElement.lang = this.lang;
      storage.set('localStorage', STORE_KEY, this.lang);
    },

    pack(lang) {
      return (PW.content && PW.content[lang || this.lang]) || {};
    },

    /** Chuỗi giao diện, ví dụ t('roundOf', { n: 4, total: 6 }). */
    t(key, vars) {
      const value = prefer(pick(this.pack().ui, key), pick(this.pack(other(this.lang)).ui, key));
      return value == null ? key : typeof value === 'string' ? fmt(value, vars) : value;
    },

    meta() {
      return Object.assign({}, this.pack(other(this.lang)).meta, this.pack().meta);
    },

    driver() {
      const a = this.pack().driver || {};
      const b = this.pack(other(this.lang)).driver || {};
      const out = {};
      Object.keys(Object.assign({}, b, a)).forEach((k) => {
        out[k] = prefer(a[k], b[k]);
      });
      return out;
    },

    /** Nội dung một chặng; trường thiếu lấy từ ngôn ngữ còn lại. */
    race(id) {
      const a = (this.pack().races || {})[id];
      const b = (this.pack(other(this.lang)).races || {})[id];
      if (!a && !b) return null;
      const src = a || {};
      const alt = b || {};
      const out = {};
      Object.keys(Object.assign({}, alt, src)).forEach((k) => {
        if (k !== 'turns') out[k] = prefer(src[k], alt[k]);
      });
      const ta = src.turns || [];
      const tb = alt.turns || [];
      out.turns = [];
      for (let i = 0; i < Math.max(ta.length, tb.length); i++) {
        const x = ta[i] || {};
        const y = tb[i] || {};
        const turn = {};
        Object.keys(Object.assign({}, y, x)).forEach((k) => {
          turn[k] = prefer(x[k], y[k]);
        });
        out.turns.push(turn);
      }
      return out;
    },
  };

  PW.i18n = i18n;
})();
