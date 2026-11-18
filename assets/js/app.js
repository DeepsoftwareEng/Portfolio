/*
 * Khởi động + router hash: #/{lang}/{raceId}/{turnId}
 *   #/vi            → lịch mùa giải
 *   #/vi/r04        → chặng R04 (tự chuyển tới t1)
 *   #/en/r04/t5     → turn 5 của R04, tiếng Anh
 */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  const { esc, icon, has } = PW.util;
  const i18n = PW.i18n;

  const state = { view: null, lang: null, raceId: null, ctrl: null };
  let mainEl;
  let liveEl;

  /** Phân tích hash thành { lang, race, turn } (chuỗi thô). */
  function parse(hash) {
    const parts = (hash || '').replace(/^#\/?/, '').split('/').filter(Boolean);
    return { lang: parts[0], race: parts[1], turn: parts[2], extra: parts.length > 3 };
  }

  /** Kiểm tra dữ liệu: số turn trong tracks.js phải khớp với nội dung từng ngôn ngữ. */
  function validate() {
    const problems = [];
    (PW.tracks || []).forEach((def) => {
      i18n.LANGS.forEach((lang) => {
        const race = ((PW.content[lang] || {}).races || {})[def.id];
        if (!race) problems.push(lang + ': thiếu chặng ' + def.id);
        else if ((race.turns || []).length !== def.turns.length) {
          problems.push(
            lang + ': ' + def.id + ' có ' + (race.turns || []).length + ' turn, tracks.js khai báo ' + def.turns.length
          );
        }
      });
    });
    problems.forEach((p) => console.warn('[portfolio] ' + p));
    return problems;
  }

  function announce(text) {
    if (!liveEl) return;
    liveEl.textContent = '';
    window.setTimeout(() => {
      liveEl.textContent = text;
    }, 30);
  }

  function setMeta(title) {
    const meta = i18n.meta();
    document.title = title ? title + ' — ' + i18n.driver().name : meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && meta.description) desc.setAttribute('content', meta.description);
  }

  function focusTitle() {
    const h = document.getElementById('view-title');
    if (h) h.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  /** Cập nhật phần khung tĩnh (skip link, nút ngôn ngữ, footer) theo ngôn ngữ và route hiện tại. */
  function updateChrome(route) {
    const lang = i18n.lang;
    document.getElementById('skip-link').textContent = i18n.t('skip');
    document.getElementById('brand-link').setAttribute('href', '#/' + lang);
    const sw = document.getElementById('lang-switch');
    sw.setAttribute('aria-label', i18n.t('langLabel'));
    const rest = [route.race, route.turn].filter(Boolean).join('/');
    Array.prototype.forEach.call(sw.querySelectorAll('a[data-lang]'), (a) => {
      const l = a.getAttribute('data-lang');
      a.setAttribute('href', '#/' + l + (rest ? '/' + rest : ''));
      if (l === lang) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });

    const d = i18n.driver();
    document.getElementById('footer-note').textContent = i18n.t('footer');
    const links = [];
    if (has(d.email)) links.push('<li><a href="mailto:' + esc(d.email) + '">' + icon('mail') + 'Email</a></li>');
    if (has(d.linkedin)) {
      links.push(
        '<li><a href="' +
          esc(d.linkedin) +
          '" target="_blank" rel="noopener noreferrer">' +
          icon('linkedin') +
          'LinkedIn</a></li>'
      );
    }
    document.getElementById('footer-links').innerHTML = links.join('');
  }

  function teardown() {
    if (state.ctrl) state.ctrl.destroy();
    state.ctrl = null;
    state.raceId = null;
  }

  function showCalendar() {
    teardown();
    mainEl.innerHTML = PW.calendar.render(i18n.lang);
    state.view = 'calendar';
    setMeta('');
    focusTitle();
  }

  function showRedFlag() {
    teardown();
    mainEl.innerHTML =
      '<div class="view view-redflag container"><div class="redflag">' +
      icon('flag', 'flag-icon') +
      '<h1 class="section-title" id="view-title" tabindex="-1">' +
      esc(i18n.t('redFlagTitle')) +
      '</h1><p>' +
      esc(i18n.t('redFlagText')) +
      '</p><a class="btn btn-primary" href="#/' +
      i18n.lang +
      '">' +
      icon('arrowLeft') +
      esc(i18n.t('redFlagCta')) +
      '</a></div></div>';
    state.view = 'redflag';
    setMeta(i18n.t('redFlagTitle'));
    focusTitle();
  }

  function showRace(raceIndex, turnIndex) {
    const def = PW.tracks[raceIndex];
    const race = i18n.race(def.id);
    const sameRace = state.view === 'race' && state.raceId === def.id && state.lang === i18n.lang && state.ctrl;
    let message;
    if (sameRace) {
      message = state.ctrl.update(turnIndex);
    } else {
      const mount = () => {
        teardown();
        state.ctrl = PW.race.mount(mainEl, i18n.lang, raceIndex, turnIndex);
        state.raceId = def.id;
        state.view = 'race';
        focusTitle();
      };
      // Vào chặng mới từ trong trang (không phải mở thẳng link / đổi ngôn ngữ) → chuyển cảnh cờ caro.
      const entering = state.view !== null && !(state.view === 'race' && state.raceId === def.id);
      if (entering) PW.flag.cover(mount);
      else mount();
      message = '';
    }
    const turn = race.turns[turnIndex] || {};
    const unit = i18n.t(def.kind === 'garage' ? 'part' : 'lap');
    setMeta(race.name + ' · ' + unit + ' ' + (turnIndex + 1) + (turn.title ? ': ' + turn.title : ''));
    if (message) announce(message);
  }

  function route() {
    const r = parse(window.location.hash);
    PW.flag.cancel();

    if (!i18n.isLang(r.lang)) {
      // Thiếu hoặc sai ngôn ngữ → thêm ngôn ngữ mặc định, giữ phần còn lại nếu có.
      const rest = r.lang ? [r.lang, r.race, r.turn].filter(Boolean).join('/') : '';
      window.location.replace('#/' + i18n.preferred() + (rest ? '/' + rest : ''));
      return;
    }

    i18n.set(r.lang);
    updateChrome(r);

    if (!r.race) {
      showCalendar();
    } else {
      const raceIndex = PW.tracks.findIndex((t) => t.id === r.race);
      if (raceIndex === -1 || r.extra) {
        showRedFlag();
      } else if (!r.turn) {
        window.location.replace('#/' + r.lang + '/' + r.race + '/t1');
        return;
      } else {
        const m = /^t(\d+)$/.exec(r.turn);
        const turnIndex = m ? parseInt(m[1], 10) - 1 : -1;
        if (turnIndex < 0 || turnIndex >= PW.tracks[raceIndex].turns.length) showRedFlag();
        else showRace(raceIndex, turnIndex);
      }
    }
    state.lang = i18n.lang;
  }

  /** Phím ← / → chuyển turn khi đang ở màn chặng. */
  function onKeydown(e) {
    if (state.view !== 'race' || !state.ctrl) return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const tag = (e.target && e.target.tagName) || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || (e.target && e.target.isContentEditable)) return;
    const r = parse(window.location.hash);
    const m = /^t(\d+)$/.exec(r.turn || '');
    if (!m) return;
    const nb = state.ctrl.neighbors(parseInt(m[1], 10) - 1);
    e.preventDefault();
    window.location.hash = (e.key === 'ArrowRight' ? nb.next : nb.prev).href;
  }

  function init() {
    mainEl = document.getElementById('main');
    liveEl = document.getElementById('live');
    validate();

    document.getElementById('skip-link').addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('view-title') || mainEl;
      target.focus();
    });
    window.addEventListener('hashchange', route);
    document.addEventListener('keydown', onKeydown);

    const initial = parse(window.location.hash);
    i18n.set(i18n.isLang(initial.lang) ? initial.lang : i18n.preferred());
    route();
    PW.intro.maybeRun(!!initial.race);
  }

  PW.app = { parse, validate, route };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
