const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('lịch mùa giải', () => {
  test('hiển thị 6 chặng, Steel GP là Feature Race', async ({ page }) => {
    await page.goto('/#/vi');
    await expect(page.locator('.race-row')).toHaveCount(6);
    await expect(page.locator('.race-row.is-feature')).toContainText('Steel GP');
    await expect(page).toHaveTitle(/Nguyễn Phúc Hưng/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'vi');
  });

  test('không có số điện thoại trên trang', async ({ page }) => {
    await page.goto('/#/vi');
    await expect(page.locator('body')).not.toContainText('823977189');
  });

  test('không có hash → tự thêm ngôn ngữ', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/#\/(vi|en)$/);
    await expect(page.locator('.race-row')).toHaveCount(6);
  });
});

test.describe('chặng & turn', () => {
  test('vào Feature Race và đi hết 8 turn bằng phím →', async ({ page }) => {
    await page.goto('/#/vi');
    await page.locator('.race-row.is-feature a').click();
    await expect(page).toHaveURL(/#\/vi\/r04\/t1$/);
    await expect(page.locator('.track .turn-marker')).toHaveCount(8);
    for (let i = 2; i <= 8; i++) {
      await page.keyboard.press('ArrowRight');
      await expect(page).toHaveURL(new RegExp(`#/vi/r04/t${i}$`));
      await expect(page.locator('.turn-chip[aria-current="step"] b')).toHaveText(`T${i}`);
    }
    // Turn cuối → sang chặng sau
    await page.keyboard.press('ArrowRight');
    await expect(page).toHaveURL(/#\/vi\/r05\/t1$/);
  });

  test('bấm chip turn và marker trên đường đua', async ({ page }) => {
    await page.goto('/#/vi/r04/t1');
    await page.locator('.turn-chip').nth(2).click();
    await expect(page).toHaveURL(/#\/vi\/r04\/t3$/);
    await expect(page.locator('#turn-title')).toHaveText(/Phân quyền/i);
    await page.locator('.turn-marker[data-index="4"]').click();
    await expect(page).toHaveURL(/#\/vi\/r04\/t5$/);
    await expect(page.locator('.turn-chip').nth(2)).toHaveClass(/is-visited/);
  });

  test('deep link tiếng Anh mở đúng turn', async ({ page }) => {
    await page.goto('/#/en/r04/t5');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('#turn-title')).toHaveText(/formula parser/i);
    await expect(page).toHaveTitle(/Steel GP/);
  });

  test('Back / Forward của trình duyệt', async ({ page }) => {
    await page.goto('/#/vi');
    await page.locator('.race-row').nth(1).locator('a').click();
    await expect(page).toHaveURL(/#\/vi\/r02\/t1$/);
    await page.keyboard.press('ArrowRight');
    await expect(page).toHaveURL(/#\/vi\/r02\/t2$/);
    await page.goBack();
    await expect(page).toHaveURL(/#\/vi\/r02\/t1$/);
    await page.goBack();
    await expect(page).toHaveURL(/#\/vi$/);
    await expect(page.locator('.race-row')).toHaveCount(6);
    await page.goForward();
    await expect(page).toHaveURL(/#\/vi\/r02\/t1$/);
  });

  test('đổi ngôn ngữ giữ nguyên chặng và turn', async ({ page }) => {
    await page.goto('/#/vi/r03/t2');
    await page.locator('#lang-switch a[data-lang="en"]').click();
    await expect(page).toHaveURL(/#\/en\/r03\/t2$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('#turn-title')).toHaveText(/Document export/i);
  });

  test('route sai → red flag', async ({ page }) => {
    await page.goto('/#/vi/r99');
    await expect(page.locator('.redflag')).toBeVisible();
    await page.goto('/#/vi/r04/t42');
    await expect(page.locator('.redflag')).toBeVisible();
    await page.locator('.redflag a').click();
    await expect(page).toHaveURL(/#\/vi$/);
  });

  test('khối dữ liệu trống được ẩn (R04 không có Kết quả / link demo)', async ({ page }) => {
    await page.goto('/#/vi/r04/t1');
    await expect(page.locator('.brief')).toBeVisible();
    await expect(page.locator('.brief .turn-links')).toHaveCount(0);
    await expect(page.locator('.brief')).not.toContainText('Kết quả');
  });
});

test.describe('đèn xuất phát', () => {
  test.use({ contextOptions: { reducedMotion: 'no-preference' } });

  // Đồng hồ giả: intro chỉ chạy ~1s nên phải tự điều khiển thời gian để test ổn định.
  test.beforeEach(async ({ page }) => {
    await page.clock.install({ time: new Date('2026-01-01T08:00:00') });
    await page.clock.pauseAt(new Date('2026-01-01T08:00:01'));
  });

  test('chạy một lần rồi tự tắt', async ({ page }) => {
    await page.goto('/#/vi');
    await expect(page.locator('#intro')).toBeVisible();
    await page.clock.runFor(2000);
    await expect(page.locator('#intro')).toBeHidden();
    await page.reload();
    await expect(page.locator('#intro')).toBeHidden();
  });

  test('nút Bỏ qua tắt ngay', async ({ page }) => {
    await page.goto('/#/vi');
    await expect(page.locator('#intro')).toBeVisible();
    // Đồng hồ giả làm đứng requestAnimationFrame → bỏ qua bước chờ "stable" của click().
    await page.locator('#intro-skip').dispatchEvent('click');
    await page.clock.runFor(400);
    await expect(page.locator('#intro')).toBeHidden();
  });

  test('không chạy khi mở bằng deep link', async ({ page }) => {
    await page.goto('/#/vi/r04/t2');
    await expect(page.locator('#intro')).toBeHidden();
  });
});

test('không chạy intro khi prefers-reduced-motion', async ({ page }) => {
  await page.goto('/#/vi');
  await expect(page.locator('#intro')).toBeHidden();
});

test.describe('accessibility (axe)', () => {
  for (const url of ['/#/vi', '/#/en/r04/t1', '/#/vi/r01/t3']) {
    test(`không có lỗi serious/critical: ${url}`, async ({ page }) => {
      await page.goto(url);
      await page.locator('#view-title').waitFor();
      const results = await new AxeBuilder({ page }).analyze();
      const bad = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(bad.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([]);
    });
  }
});

test('không cuộn ngang', async ({ page }) => {
  for (const url of ['/#/vi', '/#/vi/r01/t1', '/#/vi/r04/t1', '/#/en/r04/t8', '/#/vi/r06/t4']) {
    await page.goto(url);
    await page.locator('#view-title').waitFor();
    // So với độ rộng thiết bị: trên mobile, nội dung tràn làm innerWidth giãn theo nên không dùng innerWidth được.
    const device = page.viewportSize().width;
    const overflow = await page.evaluate(
      (w) => Math.max(document.documentElement.scrollWidth, window.innerWidth) - w,
      device
    );
    expect(overflow, url).toBeLessThanOrEqual(0);
  }
});
