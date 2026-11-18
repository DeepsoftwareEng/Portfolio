# Pit Wall Portfolio

Portfolio của **Nguyễn Phúc Hưng**, trình bày như một mùa giải đua xe gồm 7 chặng. Mỗi chặng có một sơ đồ đường đua riêng, và mỗi khúc cua (turn) là một mục nội dung.

- Site viết bằng HTML/CSS/JS thuần, **không cần build**. Bấm đúp vào `index.html` là xem được.
- Trang có hai ngôn ngữ VI/EN, chọn qua URL: `#/vi/r05/t3`, `#/en/r05/t3`.
- `npm` chỉ dùng cho công cụ kiểm tra: lint, test, Lighthouse.

## Cấu trúc

```
index.html              khung trang, meta, <noscript>
assets/css/styles.css   design tokens + toàn bộ giao diện
assets/js/
  util.js               escape, storage an toàn, icon
  i18n.js               ngôn ngữ + fallback nội dung
  track.js              vẽ đường đua SVG, xe chạy theo turn
  calendar.js           màn lịch mùa giải
  race.js               màn chặng + panel turn
  intro.js              đèn xuất phát
  app.js                router hash, khởi động
data/
  tracks.js             hình dạng đường đua
  content.vi.js         nội dung tiếng Việt
  content.en.js         nội dung tiếng Anh
tests/                  test dữ liệu (node:test) + e2e (Playwright + axe)
```

## Sửa nội dung

Bạn chỉ cần sửa `data/content.vi.js` và `data/content.en.js`.

- Mỗi turn gồm các trường `title`, `braking` (bài toán), `apex` (danh sách giải pháp), `exit` (kết quả), `chips`, `links` và `images`.
- **Trường nào để trống (`''` hoặc `[]`) thì không hiện ra trang.** Ví dụ, khi có số liệu hiệu quả, bạn điền vào `races.r05.brief.results`. Khi có link demo hoặc GitHub, bạn điền vào `races.r05.brief.links`, dạng `{ label, href }`.
- Ảnh chụp màn hình để trong `assets/img/`, rồi khai báo trong turn: `images: [{ src: 'assets/img/x.webp', alt: '...', width: 1280, height: 800 }]`. Nhớ che dữ liệu thật trước khi đưa ảnh lên.
- Đặt chữ trong `` `backtick` `` thì chữ đó hiển thị dạng code.
- Ở một ngôn ngữ, trường nào bị thiếu sẽ tự lấy nội dung của ngôn ngữ còn lại.

## Vẽ lại đường đua

Mỗi đường đua được khai báo trong `data/tracks.js`. Khung vẽ có kích thước 1000 × 600.

- `points`: danh sách các góc, xếp theo chiều xe chạy. Vạch xuất phát nằm ở giữa cạnh nối điểm cuối với điểm đầu.
- `turns`: chỉ số của những góc được đánh dấu là turn. Số phần tử trong `turns` phải bằng số turn trong phần nội dung; test dữ liệu sẽ báo lỗi nếu lệch.
- `radius`: bán kính bo cua.

Vị trí của marker, kerb và xe đều được tính tự động. Bạn không cần căn toạ độ bằng tay.

## Chạy và kiểm tra

```bash
npm install
npx playwright install chromium   # chỉ cần chạy lần đầu
npm run serve                     # mở http://localhost:4173
npm run lint                      # ESLint + Prettier
npm test                          # test dữ liệu + Playwright (desktop & mobile) + axe
npm run lhci                      # Lighthouse CI (cần có Chrome)
```

## Deploy

Mỗi lần push lên `main`, workflow `.github/workflows/ci.yml` sẽ chạy lần lượt: lint, test, Lighthouse CI. Nếu tất cả đều đạt, site được deploy lên **GitHub Pages**. Lần đầu dùng, bạn vào _Settings → Pages_ của repo và chọn _Source: GitHub Actions_.
