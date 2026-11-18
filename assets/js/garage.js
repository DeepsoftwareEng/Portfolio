/*
 * Màn Pit Garage: bộ kỹ năng trình bày như các bộ phận phát triển của xe
 * (Aerodynamics, Chassis, Power Unit, Durability) thay cho đường đua và turn.
 *
 * - Mỗi "turn" trong content của chặng garage là một bộ phận:
 *   { part: 'aero'|'chassis'|'power'|'durability', title, sub, desc,
 *     upgrades: [{ name, note, races: ['r01', ...] }] }
 * - URL vẫn là #/{lang}/{raceId}/t{n} nên router, phím ← → và Back / Forward dùng chung với màn chặng.
 * - Không chấm điểm trình độ: mỗi nâng cấp ghi việc đã làm và các chặng đã dùng (bấm để sang chặng đó).
 */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  const { esc, rich, has, icon, pad2, fmt, visited } = PW.util;

  /*
   * Sơ đồ xe nhìn từ trên xuống, mũi xe hướng sang phải. Khung 600 × 360.
   * Thứ tự vẽ: Power Unit (sidepod) → Chassis (thân, mũi) → Aero (cánh) → Durability (bánh, hộp số, tay đòn).
   */
  const CAR = {
    power: [
      '<path d="M178 152 Q198 116 252 112 L336 118 Q364 122 370 150 L370 210 Q364 238 336 242 L252 248 Q198 244 178 208 Z"/>',
      '<path d="M150 168 L250 160 L250 200 L150 192 Z"/>',
    ],
    chassis: [
      '<path d="M140 166 L372 158 Q470 164 528 176 L528 184 Q470 196 372 202 L140 194 Z"/>',
      '<ellipse cx="300" cy="180" rx="36" ry="15"/>',
    ],
    aero: ['<rect x="36" y="92" width="42" height="176" rx="6"/>', '<path d="M520 82 L560 92 L560 268 L520 278 Z"/>'],
    durability: [
      '<rect x="104" y="64" width="86" height="50" rx="12"/>',
      '<rect x="104" y="246" width="86" height="50" rx="12"/>',
      '<rect x="420" y="76" width="68" height="44" rx="11"/>',
      '<rect x="420" y="240" width="68" height="44" rx="11"/>',
      '<rect x="78" y="160" width="58" height="40" rx="6"/>',
      '<path d="M190 102 L238 150 M190 258 L238 210 M420 112 L392 162 M420 248 L392 198" fill="none"/>',
    ],
  };
  const ORDER = ['power', 'chassis', 'aero', 'durability'];
  // Vị trí nhãn bộ phận trên sơ đồ (chỉ hiện ở sơ đồ lớn).
  const LABEL_POS = { aero: [540, 66], chassis: [450, 150], power: [274, 100], durability: [147, 330] };

  /**
   * @param {string[]} parts  danh sách part theo thứ tự turn (để gắn link vào từng vùng)
   * @param {(i:number)=>string} [href]  có → mỗi vùng là link tới bộ phận tương ứng
   * @param {string[]} [labels]  nhãn hiện trên sơ đồ
   */
  function carSvg(cls, parts, href, labels) {
    const zones = ORDER.map((p) => {
      const i = parts.indexOf(p);
      const shapes = CAR[p].join('');
      if (!href || i < 0) return '<g class="z z-' + p + '">' + shapes + '</g>';
      // Vùng trên sơ đồ là lối tắt cho chuột; bàn phím và trình đọc màn hình dùng danh sách tab bên dưới.
      return '<a class="z z-' + p + '" href="' + href(i) + '" tabindex="-1">' + shapes + '</a>';
    }).join('');
    const text = labels
      ? parts
          .map((p, i) =>
            LABEL_POS[p]
              ? '<text class="z-label z-label-' +
                p +
                '" x="' +
                LABEL_POS[p][0] +
                '" y="' +
                LABEL_POS[p][1] +
                '" text-anchor="middle">' +
                esc(labels[i]) +
                '</text>'
              : ''
          )
          .join('')
      : '';
    return (
      '<svg class="' + cls + '" viewBox="0 0 600 360" aria-hidden="true" focusable="false">' + zones + text + '</svg>'
    );
  }

  /** Thumbnail cho lịch mùa giải. */
  function thumb() {
    return carSvg('thumb car car-thumb', []);
  }

  function raceTag(lang, id) {
    const index = PW.tracks.findIndex((t) => t.id === id);
    if (index < 0) return '';
    const race = PW.i18n.race(id) || {};
    const code = 'R' + pad2(index + 1);
    return (
      '<li><a class="race-tag" href="' +
      PW.race.turnHref(lang, id, 0) +
      '" aria-label="' +
      esc(code + ' · ' + (race.name || '')) +
      '" title="' +
      esc(race.name || '') +
      '">' +
      code +
      '</a></li>'
    );
  }

  function panel(lang, raceIndex, index, race) {
    const t = PW.i18n.t.bind(PW.i18n);
    const part = race.turns[index] || {};
    const total = race.turns.length;
    const nb = PW.race.neighbors(lang, raceIndex, index);
    const upgrades = (part.upgrades || [])
      .map(
        (u) =>
          '<li class="upgrade"><div class="upgrade-head"><h3>' +
          esc(u.name) +
          '</h3><span class="installed">' +
          icon('check') +
          esc(t('installed')) +
          '</span></div>' +
          (has(u.note) ? '<p>' + rich(u.note) + '</p>' : '') +
          (has(u.races)
            ? '<div class="upgrade-races"><span>' +
              esc(t('usedIn')) +
              '</span><ul>' +
              u.races.map((id) => raceTag(lang, id)).join('') +
              '</ul></div>'
            : '') +
          '</li>'
      )
      .join('');
    return (
      '<p class="turn-kicker"><span>' +
      esc(t('part')) +
      ' ' +
      pad2(index + 1) +
      ' / ' +
      pad2(total) +
      '</span><span class="sector sector-current">' +
      esc(t('current')) +
      '</span></p>' +
      '<h2 class="turn-title part-title" id="turn-title" tabindex="-1">' +
      esc(part.title) +
      '</h2>' +
      (has(part.sub) ? '<p class="part-sub">' + esc(part.sub) + '</p>' : '') +
      (has(part.desc) ? '<p class="part-desc">' + rich(part.desc) + '</p>' : '') +
      '<ul class="upgrades">' +
      upgrades +
      '</ul>' +
      '<nav class="turn-nav" aria-label="' +
      esc(t('partListLabel')) +
      '">' +
      '<a class="btn turn-prev" href="' +
      nb.prev.href +
      '">' +
      icon('arrowLeft') +
      esc(nb.prev.label) +
      '</a>' +
      '<a class="btn turn-next" href="' +
      nb.next.href +
      '">' +
      esc(nb.next.label) +
      icon('arrowRight') +
      '</a></nav>'
    );
  }

  /**
   * Render màn garage. Trả về cùng giao diện với PW.race.mount.
   * @returns {{update(i:number):string, neighbors(i:number):object, destroy():void}}
   */
  function mount(container, lang, raceIndex, index) {
    const t = PW.i18n.t.bind(PW.i18n);
    const def = PW.tracks[raceIndex];
    const race = PW.i18n.race(def.id);
    const parts = race.turns.map((p) => p.part);
    const total = race.turns.length;
    const href = (i) => PW.race.turnHref(lang, def.id, i);

    const tabs = race.turns
      .map(
        (p, i) =>
          '<li><a class="turn-chip part-tab" data-index="' +
          i +
          '" href="' +
          href(i) +
          '"><b>' +
          esc(p.title) +
          '</b>' +
          (has(p.sub) ? '<span>' + esc(p.sub) + '</span>' : '') +
          icon('check', 'chk') +
          '<span class="sr-only chip-state"></span></a></li>'
      )
      .join('');

    container.innerHTML =
      '<div class="view view-race view-garage container">' +
      PW.race.head(lang, raceIndex) +
      '<div class="race-grid">' +
      '<section class="track-card car-card" aria-label="' +
      esc(t('carLabel', { name: race.name })) +
      '">' +
      '<div class="track-wrap car-wrap">' +
      carSvg(
        'car car-big',
        parts,
        href,
        race.turns.map((p) => p.title)
      ) +
      '</div>' +
      '<nav aria-label="' +
      esc(t('partListLabel')) +
      '"><ol class="turn-list part-list">' +
      tabs +
      '</ol></nav>' +
      '<p class="kbd-hint">' +
      esc(t('garageHint')) +
      '</p>' +
      '</section>' +
      '<article class="turn-panel part-panel" id="turn-panel"></article>' +
      '</div></div>';

    const root = container.querySelector('.view-garage');
    const car = root.querySelector('.car-big');
    const panelEl = root.querySelector('#turn-panel');
    const tabEls = Array.prototype.slice.call(root.querySelectorAll('.part-tab'));

    function update(i) {
      visited.add(def.id, i);
      const seen = visited.get(def.id);
      const part = race.turns[i] || {};
      panelEl.innerHTML = panel(lang, raceIndex, i, race);
      car.setAttribute('data-active', part.part || '');
      tabEls.forEach((tab, k) => {
        const isCurrent = k === i;
        const isSeen = !isCurrent && seen.has(k);
        if (isCurrent) tab.setAttribute('aria-current', 'step');
        else tab.removeAttribute('aria-current');
        tab.classList.toggle('is-visited', isSeen);
        tab.querySelector('.chip-state').textContent = isCurrent
          ? ' (' + t('current') + ')'
          : isSeen
            ? ' (' + t('visited') + ')'
            : '';
      });
      return fmt(t('partAnnounce'), { n: i + 1, total, title: part.title || '' });
    }

    update(index);

    return {
      raceId: def.id,
      update,
      neighbors: (i) => PW.race.neighbors(lang, raceIndex, i),
      destroy() {},
    };
  }

  PW.garage = { mount, thumb };
})();
