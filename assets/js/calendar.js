/* Màn lịch mùa giải: thẻ tay đua, telemetry và danh sách 6 chặng. */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  const { esc, rich, has, icon, pad2, visited, linkAttrs } = PW.util;

  function telemetry(items) {
    if (!has(items)) return '';
    return (
      '<dl class="telemetry">' +
      items.map((m) => '<div><dt>' + esc(m.label) + '</dt><dd>' + esc(m.value) + '</dd></div>').join('') +
      '</dl>'
    );
  }

  function row(def, index, lang) {
    const i18n = PW.i18n;
    const race = i18n.race(def.id) || {};
    const total = def.turns.length;
    const seen = visited.get(def.id).size;
    const status = def.status || 'grid';
    const href = '#/' + lang + '/' + def.id;
    const desc = [race.short, race.label].filter(has).join(' · ');

    return (
      '<li class="race-row' +
      (def.feature ? ' is-feature' : '') +
      '">' +
      '<a class="race-link" href="' +
      href +
      '">' +
      '<span class="rnd"><span class="sr-only">' +
      esc(i18n.t('colRound')) +
      ' </span>R<b>' +
      pad2(index + 1) +
      '</b></span>' +
      '<span class="race-thumb">' +
      PW.track.thumb(def) +
      '</span>' +
      '<span class="race-main"><span class="race-name">' +
      esc(race.name) +
      (def.feature ? ' <span class="badge badge-feature">' + icon('star') + esc(i18n.t('feature')) + '</span>' : '') +
      '</span>' +
      (desc ? '<span class="race-desc">' + esc(desc) + '</span>' : '') +
      '</span>' +
      '<span class="race-meta">' +
      '<span class="race-turns"><b>' +
      total +
      '</b> ' +
      esc(i18n.t('turnsUnit')) +
      (seen ? '<small>' + esc(i18n.t('viewedOf', { n: Math.min(seen, total), total })) + '</small>' : '') +
      '</span>' +
      '<span class="race-period">' +
      esc(race.period || '—') +
      '</span>' +
      '<span class="status status-' +
      status +
      '">' +
      esc(i18n.t('status.' + status)) +
      '</span>' +
      '</span>' +
      '<span class="race-arrow">' +
      icon('arrowRight') +
      '</span>' +
      '</a></li>'
    );
  }

  /** Trả về chuỗi HTML của màn lịch mùa giải. */
  function render(lang) {
    const i18n = PW.i18n;
    const d = i18n.driver();
    const feature = PW.tracks.find((t) => t.feature) || PW.tracks[0];

    const actions =
      '<div class="actions">' +
      '<a class="btn btn-primary" href="#/' +
      lang +
      '/' +
      feature.id +
      '">' +
      esc(i18n.t('ctaFeature')) +
      icon('arrowRight') +
      '</a>' +
      (has(d.email) ? '<a class="btn" href="mailto:' + esc(d.email) + '">' + icon('mail') + 'Email</a>' : '') +
      (has(d.linkedin)
        ? '<a class="btn" href="' +
          esc(d.linkedin) +
          '"' +
          linkAttrs(d.linkedin) +
          '>' +
          icon('linkedin') +
          'LinkedIn</a>'
        : '') +
      '</div>';

    return (
      '<div class="view view-calendar container">' +
      '<section class="driver" aria-labelledby="view-title">' +
      '<div class="driver-card">' +
      '<p class="eyebrow"><span class="live-dot" aria-hidden="true"></span>' +
      esc(i18n.t('driverEyebrow')) +
      '</p>' +
      '<h1 class="driver-name" id="view-title" tabindex="-1">' +
      esc(d.name) +
      '</h1>' +
      '<p class="driver-role">' +
      esc(d.role) +
      '</p>' +
      (has(d.summary) ? '<p class="driver-summary">' + rich(d.summary) + '</p>' : '') +
      actions +
      '</div>' +
      (has(d.telemetry)
        ? '<div class="driver-telemetry"><p class="eyebrow">' +
          esc(i18n.t('telemetry')) +
          '</p>' +
          telemetry(d.telemetry) +
          '</div>'
        : '') +
      '</section>' +
      '<section class="season" aria-labelledby="season-title">' +
      '<div class="section-head"><h2 class="section-title" id="season-title">' +
      esc(i18n.t('season')) +
      '</h2><p>' +
      esc(i18n.t('seasonSub')) +
      '</p></div>' +
      '<div class="season-cols" aria-hidden="true">' +
      '<span>' +
      esc(i18n.t('colRound')) +
      '</span><span></span><span>' +
      esc(i18n.t('colRace')) +
      '</span><span>' +
      esc(i18n.t('colTurns')) +
      '</span><span>' +
      esc(i18n.t('colPeriod')) +
      '</span><span>' +
      esc(i18n.t('colStatus')) +
      '</span><span></span></div>' +
      '<ol class="season-list">' +
      PW.tracks.map((def, i) => row(def, i, lang)).join('') +
      '</ol>' +
      '</section>' +
      '</div>'
    );
  }

  PW.calendar = { render, telemetry };
})();
