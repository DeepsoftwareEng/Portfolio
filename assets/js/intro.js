/* Đèn xuất phát: 5 cột đèn sáng dần rồi tắt. Chạy 1 lần mỗi phiên, có nút Skip, tôn trọng reduced-motion. */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  const { storage, reducedMotion } = PW.util;

  const KEY = 'pw.introSeen';
  const STEP = 150;
  const HOLD = 180;
  const FADE = 260;

  /**
   * @param {boolean} isDeepLink  true nếu người xem mở thẳng một chặng → bỏ intro
   */
  function maybeRun(isDeepLink) {
    const el = document.getElementById('intro');
    if (!el) return;
    if (isDeepLink || reducedMotion() || storage.get('sessionStorage', KEY, false)) return;
    storage.set('sessionStorage', KEY, true);

    const cols = Array.prototype.slice.call(el.querySelectorAll('.light-col'));
    const skipBtn = document.getElementById('intro-skip');
    const timers = [];
    let done = false;

    document.getElementById('intro-caption').textContent = PW.i18n.t('introCaption');
    skipBtn.textContent = PW.i18n.t('skipIntro');
    el.hidden = false;

    function finish() {
      if (done) return;
      done = true;
      timers.forEach(clearTimeout);
      cols.forEach((c) => c.classList.remove('on'));
      el.classList.add('is-out');
      document.removeEventListener('keydown', onKey, true);
      setTimeout(() => {
        el.hidden = true;
        el.classList.remove('is-out');
      }, FADE);
    }

    function onKey(e) {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        finish();
      }
    }

    skipBtn.addEventListener('click', finish, { once: true });
    el.addEventListener('click', finish, { once: true });
    document.addEventListener('keydown', onKey, true);

    cols.forEach((col, i) => {
      timers.push(setTimeout(() => col.classList.add('on'), STEP * (i + 1)));
    });
    timers.push(setTimeout(finish, STEP * cols.length + HOLD));
  }

  PW.intro = { maybeRun };
})();
