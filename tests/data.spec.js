// Kiểm tra dữ liệu: tracks.js ↔ content.vi.js / content.en.js khớp nhau, không lộ thông tin riêng tư.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..');
const DATA_FILES = ['data/tracks.js', 'data/content.vi.js', 'data/content.en.js'];
const LANGS = ['vi', 'en'];

function load() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  DATA_FILES.forEach((f) => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sandbox, { filename: f }));
  return sandbox.window.PW;
}

const PW = load();

test('có 6 chặng, id không trùng, đúng một Feature Race', () => {
  assert.equal(PW.tracks.length, 6);
  assert.equal(new Set(PW.tracks.map((t) => t.id)).size, 6);
  assert.equal(PW.tracks.filter((t) => t.feature).length, 1);
});

test('turn của mỗi đường đua trỏ tới góc hợp lệ, tăng dần', () => {
  PW.tracks.forEach((t) => {
    assert.ok(t.points.length >= 3, t.id + ' cần ít nhất 3 góc');
    t.turns.forEach((c, i) => {
      assert.ok(Number.isInteger(c) && c >= 0 && c < t.points.length, t.id + ' turn ' + (i + 1) + ' sai chỉ số góc');
      if (i > 0) assert.ok(c > t.turns[i - 1], t.id + ' turns phải tăng dần');
    });
    t.points.forEach(([x, y]) => assert.ok(x >= 0 && x <= 1000 && y >= 0 && y <= 600, t.id + ' điểm ngoài khung'));
  });
});

LANGS.forEach((lang) => {
  test(`[${lang}] mỗi chặng có đủ nội dung và số turn khớp tracks.js`, () => {
    const content = PW.content[lang];
    assert.ok(content, 'thiếu content ' + lang);
    PW.tracks.forEach((t) => {
      const race = content.races[t.id];
      assert.ok(race, `${lang}: thiếu ${t.id}`);
      assert.ok(race.name, `${lang}: ${t.id} thiếu name`);
      assert.equal(race.turns.length, t.turns.length, `${lang}: ${t.id} số turn lệch tracks.js`);
      race.turns.forEach((turn, i) => assert.ok(turn.title, `${lang}: ${t.id} turn ${i + 1} thiếu title`));
    });
  });

  test(`[${lang}] có đủ chuỗi UI giống ngôn ngữ còn lại`, () => {
    const keys = (o, p = '') =>
      Object.entries(o).flatMap(([k, v]) => (v && typeof v === 'object' ? keys(v, p + k + '.') : [p + k]));
    const mine = new Set(keys(PW.content[lang].ui));
    const other = keys(PW.content[lang === 'vi' ? 'en' : 'vi'].ui);
    other.forEach((k) => assert.ok(mine.has(k), `${lang}: thiếu ui.${k}`));
  });
});

test('không còn placeholder [điền] và không có số điện thoại', () => {
  const all = DATA_FILES.concat(['index.html'])
    .map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8'))
    .join('\n');
  assert.ok(!/\[điền/i.test(all), 'còn placeholder [điền]');
  assert.ok(!/823\s*977\s*189/.test(all), 'lộ số điện thoại');
  assert.ok(!/\(\+84\)/.test(all), 'lộ số điện thoại');
});
