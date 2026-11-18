/* Màn một chặng: header, sơ đồ đường đua, danh sách turn, panel BRAKING / APEX / EXIT, race brief. */
(function () {
  'use strict';
  const PW = (window.PW = window.PW || {});
  const { esc, rich, has, icon, pad2, fmt, visited, linkAttrs } = PW.util;

  const turnHref = (lang, raceId, i) => '#/' + lang + '/' + raceId + '/t' + (i + 1);

  function chips(list) {
    if (!has(list)) return '';
    return '<ul class="chips">' + list.map((c) => '<li>' + esc(c) + '</li>').join('') + '</ul>';
  }

  /** Link turn trước / sau, nối sang chặng kế bên khi tới đầu / cuối. */
  function neighbors(lang, raceIndex, turnIndex) {
    const t = PW.i18n.t.bind(PW.i18n);
    const tracks = PW.tracks;
    const def = tracks[raceIndex];
    const last = def.turns.length - 1;
    const garage = def.kind === 'garage';
    let prev;
    let next;
    if (turnIndex > 0) {
      prev = { href: turnHref(lang, def.id, turnIndex - 1), label: t(garage ? 'prevPart' : 'prevTurn') };
    } else if (raceIndex > 0) {
      const p = tracks[raceIndex - 1];
      prev = { href: turnHref(lang, p.id, p.turns.length - 1), label: t('prevRace') };
    } else prev = { href: '#/' + lang, label: t('back') };

    if (turnIndex < last) {
      next = { href: turnHref(lang, def.id, turnIndex + 1), label: t(garage ? 'nextPart' : 'nextTurn') };
    } else if (raceIndex < tracks.length - 1) {
      next = { href: turnHref(lang, tracks[raceIndex + 1].id, 0), label: t('nextRace') };
    } else next = { href: '#/' + lang, label: t('checkered') };
    return { prev, next };
  }

  function phase(kind, sub, body) {
    return (
      '<section class="phase phase-' +
      kind +
      '"><h3 class="phase-head"><span class="phase-tag">' +
      kind.toUpperCase() +
      '</span>' +
      esc(sub) +
      '</h3>' +
      body +
      '</section>'
    );
  }

  function panel(lang, raceIndex, turnIndex, race) {
    const t = PW.i18n.t.bind(PW.i18n);
    const turn = race.turns[turnIndex] || {};
    const labels = Object.assign({}, t('phases'), turn.labels || {});
    const total = race.turns.length;
    const nb = neighbors(lang, raceIndex, turnIndex);
    let out =
      '<p class="turn-kicker"><span>' +
      esc(t('lap')) +
      ' ' +
      pad2(turnIndex + 1) +
      ' / ' +
      pad2(total) +
      '</span><span class="sector sector-current">' +
      esc(t('current')) +
      '</span></p>' +
      '<h2 class="turn-title" id="turn-title" tabindex="-1">' +
      esc(turn.title) +
      '</h2>';

    if (has(turn.braking)) out += phase('braking', labels.braking, '<p>' + rich(turn.braking) + '</p>');
    if (has(turn.apex)) {
      out += phase('apex', labels.apex, '<ul>' + turn.apex.map((li) => '<li>' + rich(li) + '</li>').join('') + '</ul>');
    }
    if (has(turn.exit) || has(turn.chips) || has(turn.links)) {
      let body = has(turn.exit) ? '<p>' + rich(turn.exit) + '</p>' : '';
      body += chips(turn.chips);
      if (has(turn.links)) {
        body +=
          '<div class="turn-links">' +
          turn.links
            .filter((l) => has(l.href))
            .map(
              (l) =>
                '<a class="btn' +
                (l.kind === 'email' ? ' btn-primary' : '') +
                '" href="' +
                esc(l.href) +
                '"' +
                linkAttrs(l.href) +
                '>' +
                icon(l.kind === 'linkedin' ? 'linkedin' : l.kind === 'email' ? 'mail' : 'external') +
                esc(l.label) +
                '</a>'
            )
            .join('') +
          '</div>';
      }
      out += phase('exit', labels.exit, body);
    }
    if (has(turn.images)) {
      out +=
        '<div class="turn-images">' +
        turn.images
          .filter((img) => has(img.src))
          .map(
            (img) =>
              '<figure><img src="' +
              esc(img.src) +
              '" alt="' +
              esc(img.alt || '') +
              '" loading="lazy" decoding="async"' +
              (img.width ? ' width="' + Number(img.width) + '"' : '') +
              (img.height ? ' height="' + Number(img.height) + '"' : '') +
              '>' +
              (has(img.caption) ? '<figcaption>' + esc(img.caption) + '</figcaption>' : '') +
              '</figure>'
          )
          .join('') +
        '</div>';
    }
    out +=
      '<nav class="turn-nav" aria-label="' +
      esc(t('turnListLabel')) +
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
      '</a></nav>';
    return out;
  }

  function brief(race) {
    const b = race.brief;
    if (!b) return '';
    const t = PW.i18n.t.bind(PW.i18n);
    let out =
      '<section class="brief" aria-labelledby="brief-title"><h2 class="section-title" id="brief-title">' +
      esc(t('brief')) +
      '</h2>';
    out += '<div class="brief-grid">';
    if (has(b.problem)) {
      out +=
        '<div class="brief-col"><h3 class="brief-h">' +
        esc(t('problem')) +
        '</h3><ul class="brief-list">' +
        b.problem.map((p) => '<li>' + rich(p) + '</li>').join('') +
        '</ul></div>';
    }
    if (has(b.modules)) {
      out +=
        '<div class="brief-col"><h3 class="brief-h">' +
        esc(t('solution')) +
        '</h3><ol class="module-list">' +
        b.modules.map((m, i) => '<li><span class="num">' + pad2(i + 1) + '</span>' + esc(m) + '</li>').join('') +
        '</ol></div>';
    }
    out += '</div>';
    if (has(b.telemetry)) {
      out +=
        '<div class="brief-telemetry"><h3 class="brief-h">' +
        esc(t('telemetry')) +
        '</h3>' +
        PW.calendar.telemetry(b.telemetry) +
        '</div>';
    }
    if (has(b.architecture)) {
      out +=
        '<details class="arch"><summary>' +
        esc(t('architecture')) +
        icon('chevronRight', 'arch-chevron') +
        '</summary><div class="arch-diagram">' +
        b.architecture
          .map(
            (layer) =>
              (has(layer.link)
                ? '<p class="arch-link"><span aria-hidden="true">↕</span> ' + esc(layer.link) + '</p>'
                : '') +
              '<div class="arch-layer"><h4>' +
              esc(layer.name) +
              '</h4><ul>' +
              (layer.items || []).map((it) => '<li>' + rich(it) + '</li>').join('') +
              '</ul></div>'
          )
          .join('') +
        '</div></details>';
    }
    if (has(b.results)) {
      out +=
        '<div class="brief-col"><h3 class="brief-h">' +
        esc(t('results')) +
        '</h3><ul class="brief-list">' +
        b.results.map((r) => '<li>' + rich(r) + '</li>').join('') +
        '</ul></div>';
    }
    const links = (b.links || []).filter((l) => has(l.href));
    if (links.length) {
      out +=
        '<div class="turn-links">' +
        links
          .map(
            (l) =>
              '<a class="btn" href="' +
              esc(l.href) +
              '"' +
              linkAttrs(l.href) +
              '>' +
              icon('external') +
              esc(l.label) +
              '</a>'
          )
          .join('') +
        '</div>';
    }
    return out + '</section>';
  }

  /**
   * Render màn chặng vào container.
   * @returns {{update(turnIndex:number):void, destroy():void}}
   */
  /** Thanh điều hướng (về lịch, Round n / N, chặng trước / sau) + header của chặng. Dùng chung cho màn Garage. */
  function head(lang, raceIndex) {
    const t = PW.i18n.t.bind(PW.i18n);
    const def = PW.tracks[raceIndex];
    const race = PW.i18n.race(def.id);
    const totalRaces = PW.tracks.length;
    const prevRace = PW.tracks[raceIndex - 1];
    const nextRace = PW.tracks[raceIndex + 1];
    const eyebrow = ['R' + pad2(raceIndex + 1), race.short, race.label].filter(has).map(esc).join(' · ');
    return (
      '<nav class="race-nav" aria-label="' +
      esc(t('season')) +
      '">' +
      '<a class="back-link" href="#/' +
      lang +
      '">' +
      icon('arrowLeft') +
      esc(t('back')) +
      '</a>' +
      '<span class="round-count">' +
      esc(t('roundOf', { n: pad2(raceIndex + 1), total: pad2(totalRaces) })) +
      '</span>' +
      '<span class="race-nav-btns">' +
      (prevRace
        ? '<a class="icon-btn" href="#/' +
          lang +
          '/' +
          prevRace.id +
          '" aria-label="' +
          esc(t('prevRace')) +
          '">' +
          icon('chevronLeft') +
          '</a>'
        : '') +
      (nextRace
        ? '<a class="icon-btn" href="#/' +
          lang +
          '/' +
          nextRace.id +
          '" aria-label="' +
          esc(t('nextRace')) +
          '">' +
          icon('chevronRight') +
          '</a>'
        : '') +
      '</span></nav>' +
      '<header class="race-header' +
      (def.feature ? ' is-feature' : '') +
      '">' +
      '<p class="eyebrow">' +
      eyebrow +
      (def.feature ? ' <span class="badge badge-feature">' + icon('star') + esc(t('feature')) + '</span>' : '') +
      '</p>' +
      '<h1 class="race-title" id="view-title" tabindex="-1">' +
      esc(race.name) +
      '</h1>' +
      (has(race.period) ? '<p class="race-period">' + esc(race.period) + '</p>' : '') +
      (has(race.summary) ? '<p class="race-summary">' + rich(race.summary) + '</p>' : '') +
      chips(race.chips) +
      '</header>'
    );
  }

  function mount(container, lang, raceIndex, turnIndex) {
    const def = PW.tracks[raceIndex];
    if (def.kind === 'garage') return PW.garage.mount(container, lang, raceIndex, turnIndex);

    const t = PW.i18n.t.bind(PW.i18n);
    const race = PW.i18n.race(def.id);
    const totalTurns = def.turns.length;

    const turnItems = race.turns
      .map(
        (turn, i) =>
          '<li><a class="turn-chip" data-index="' +
          i +
          '" href="' +
          turnHref(lang, def.id, i) +
          '"><b>T' +
          (i + 1) +
          '</b><span>' +
          esc(turn.title) +
          '</span>' +
          icon('check', 'chk') +
          '<span class="sr-only chip-state"></span></a></li>'
      )
      .join('');

    container.innerHTML =
      '<div class="view view-race container">' +
      head(lang, raceIndex) +
      '<div class="race-grid">' +
      '<section class="track-card" aria-label="' +
      esc(t('trackLabel', { name: race.name })) +
      '">' +
      '<div class="track-wrap"></div>' +
      '<div class="lap-bar">' +
      '<a class="icon-btn lap-prev" href="#">' +
      icon('chevronLeft') +
      '</a>' +
      '<div class="lap-progress"><p class="lap-label"><span>' +
      esc(t('lap')) +
      ' <b class="lap-n">1</b>/' +
      totalTurns +
      '</span><span class="lap-title"></span></p><span class="lap-meter" aria-hidden="true"><i></i></span></div>' +
      '<a class="icon-btn lap-next" href="#">' +
      icon('chevronRight') +
      '</a></div>' +
      '<nav aria-label="' +
      esc(t('turnListLabel')) +
      '"><ol class="turn-list">' +
      turnItems +
      '</ol></nav>' +
      '<p class="kbd-hint">' +
      esc(t('keyboardHint')) +
      '</p>' +
      '</section>' +
      '<article class="turn-panel" id="turn-panel"></article>' +
      '</div>' +
      brief(race) +
      '</div>';

    const root = container.querySelector('.view-race');
    const panelEl = root.querySelector('#turn-panel');
    const chipEls = Array.prototype.slice.call(root.querySelectorAll('.turn-chip'));
    const lapN = root.querySelector('.lap-n');
    const lapTitle = root.querySelector('.lap-title');
    const lapMeter = root.querySelector('.lap-meter i');
    const lapPrev = root.querySelector('.lap-prev');
    const lapNext = root.querySelector('.lap-next');

    const trackCtrl = PW.track.renderRace(def, {
      href: (i) => turnHref(lang, def.id, i),
    });
    root.querySelector('.track-wrap').appendChild(trackCtrl.el);

    let first = true;

    function update(index) {
      visited.add(def.id, index);
      const seen = visited.get(def.id);
      const turn = race.turns[index] || {};
      panelEl.innerHTML = panel(lang, raceIndex, index, race);

      chipEls.forEach((chip, i) => {
        const isCurrent = i === index;
        const isSeen = !isCurrent && seen.has(i);
        if (isCurrent) chip.setAttribute('aria-current', 'step');
        else chip.removeAttribute('aria-current');
        chip.classList.toggle('is-visited', isSeen);
        chip.querySelector('.chip-state').textContent = isCurrent
          ? ' (' + t('current') + ')'
          : isSeen
            ? ' (' + t('visited') + ')'
            : '';
      });
      const active = chipEls[index];
      if (active && active.scrollIntoView && !first) {
        active.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
      }

      const nb = neighbors(lang, raceIndex, index);
      lapPrev.href = nb.prev.href;
      lapPrev.setAttribute('aria-label', nb.prev.label);
      lapNext.href = nb.next.href;
      lapNext.setAttribute('aria-label', nb.next.label);
      lapN.textContent = String(index + 1);
      lapTitle.textContent = turn.title || '';
      lapMeter.style.setProperty('--p', String((index + 1) / totalTurns));

      trackCtrl.setCurrent(index, !first, seen);
      first = false;
      return fmt(t('liveAnnounce'), { n: index + 1, total: totalTurns, title: turn.title || '' });
    }

    update(turnIndex);

    return {
      raceId: def.id,
      update,
      neighbors: (i) => neighbors(lang, raceIndex, i),
      destroy() {
        trackCtrl.destroy();
      },
    };
  }

  PW.race = { mount, turnHref, neighbors, head };
})();
