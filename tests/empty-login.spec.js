  // TODO 1: откройте главную страницу Testboard через page.goto('/').
  // TODO 2: найдите кнопку входа и откройте форму.
  // TODO 3: отправьте форму с пустыми email и паролем.
  // TODO 4: через expect проверьте текст «Email обязателен».
  // TODO 5: через expect проверьте текст «Пароль обязателен».
  // После реализации удалите throw и выполненные TODO.

import { test, expect } from '@playwright/test';

test('пустая форма показывает две ошибки', async ({ page }) => {
  // 1. Открыть главную
  await page.goto('/'); 

  // 2. Открыть попап входа
  await page.locator('[data-marker="login-button-desktop"]').click();
  
  // 3. Нажать кнопку "Войти"
  await page.locator('[data-marker="login-submit-button"]').click();

  // 4. Найти сообщения об ошибках по их маркерам
  const emailError = page.locator('[data-marker="email-error"]');
  const passError = page.locator('[data-marker="password-error"]');

  // 5. Проверить текст ошибок
  await expect(emailError).toHaveText('Email обязателен');
  await expect(passError).toHaveText('Пароль обязателен');
});