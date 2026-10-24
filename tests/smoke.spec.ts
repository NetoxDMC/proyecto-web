import { expect, test } from '@playwright/test';

test('la home carga y muestra el titular principal', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Mi sitio web/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Tu próxima web');
  await expect(page.getByRole('link', { name: 'Empezar' })).toBeVisible();
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
