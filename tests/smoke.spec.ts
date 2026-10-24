import { expect, test } from '@playwright/test';

test('la home carga y muestra la propuesta principal', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Nébula Café/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Brunch lento');
  await expect(page.getByRole('link', { name: 'Ver el menú' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Reservar mesa' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cosas ricas, sin prisa.' })).toBeVisible();
});

test('la home no genera errores en consola', async ({ page }) => {
  const errors: string[] = [];

  page.on('console', (message) => {
    if (message.type() === 'error') {
      errors.push(message.text());
    }
  });

  await page.goto('/');
  await page.waitForLoadState('networkidle');

  expect(errors).toEqual([]);
});

test('la home no tiene scroll horizontal en anchos clave', async ({ page }) => {
  for (const width of [360, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow, `scroll horizontal a ${width}px`).toBe(false);
  }
});
