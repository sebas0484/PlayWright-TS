import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //Login
  await page.goto('https://tasks.evalartapp.com/automatization/');
  await page.locator('input[name="username"]').fill('949228');
  await page.getByPlaceholder('password').fill('10df2f32286b7120Mi00LTgyMjk0OQ==30e0c83e6c29f1c3');
  await page.locator('button.bg-white.border-black').click();
  //Ejecucion #1
  await page.getByLabel('144').check();
  await page.getByLabel('117').check();
  await page.getByLabel('162').check();
  await page.locator('input[name="number"]').fill('16');
  await page.locator('//input[@type="date" and @name="date"]').fill('2024-12-29');
  await page.locator('select[name="select"]').selectOption('43380');
  await page.locator('button.border-black').click();
  //Ejecucion #2
  await page.getByLabel('72').check();
  await page.getByLabel('160').check();
  await page.getByLabel('184').check();
  await page.locator('input[name="number"]').fill('15');
  await page.locator('//input[@type="date" and @name="date"]').fill('2025-02-03');
  await page.locator('select[name="select"]').selectOption('13889057049231');
  await page.locator('button.border-black').click();
  //Ejecucion #3
  await page.getByLabel('84').first().check();
  await page.getByLabel('54').check();
  await page.getByLabel('18').first().check();
  await page.locator('input[name="number"]').fill('8');
  await page.locator('//input[@type="date" and @name="date"]').fill('2024-11-01');
  await page.locator('select[name="select"]').selectOption('-4411783');
  await page.locator('button.border-black').click();
  //Ejecucion #4
  await page.getByLabel('128').check();
  await page.getByLabel('76').check();
  await page.getByLabel('60').check();
  await page.locator('input[name="number"]').fill('18');
  await page.locator('//input[@type="date" and @name="date"]').fill('2025-06-23');
  await page.locator('select[name="select"]').selectOption('55809');
  await page.locator('button.border-black').click();
  //Ejecucion #5
  await page.getByLabel('65').check();
  await page.getByLabel('60').check();
  await page.getByLabel('70').check();
  await page.getByLabel('120').check();
  await page.locator('input[name="number"]').fill('11');
  await page.locator('//input[@type="date" and @name="date"]').fill('2024-12-04');
  await page.locator('select[name="select"]').selectOption('-1459');
  await page.locator('button.border-black').click();
  //Ejecucion #6
  await page.getByLabel('108').check();
  await page.getByLabel('72').check();
  await page.getByLabel('45').check();
  await page.locator('input[name="number"]').fill('18');
  await page.locator('//input[@type="date" and @name="date"]').fill('2024-12-24');
  await page.locator('select[name="select"]').selectOption('25123');
  await page.locator('button.border-black').click();
  //Ejecucion #7
  await page.getByLabel('104').check();
  await page.getByLabel('176').check();
  await page.getByLabel('140').check();
  await page.getByLabel('12').check();
  await page.locator('input[name="number"]').fill('18');
  await page.locator('//input[@type="date" and @name="date"]').fill('2025-01-06');
  await page.locator('select[name="select"]').selectOption('-516');
  await page.locator('button.border-black').click();
  //Ejecucion #8
  await page.getByLabel('84').check();
  await page.locator('input[name="number"]').fill('8');
  await page.locator('//input[@type="date" and @name="date"]').fill('2024-12-23');
  await page.locator('select[name="select"]').selectOption('-3445');
  await page.locator('button.border-black').click();
  //Ejecucion #9
  await page.getByLabel('144').check();
  await page.getByLabel('42').check();
  await page.getByLabel('120').check();
  await page.locator('input[name="number"]').fill('10');
  await page.locator('//input[@type="date" and @name="date"]').fill('2025-03-28');
  await page.locator('select[name="select"]').selectOption('-8280938');
  await page.locator('button.border-black').click();
  //Ejecucion #10
  await page.getByLabel('74').check();
  await page.getByLabel('108').check();
  await page.getByLabel('138').check();
  await page.getByLabel('16').check();
  await page.getByLabel('14').check();
  await page.getByLabel('38').check();
  await page.getByLabel('24').check();
  await page.getByLabel('68').check();
  await page.getByLabel('22').check();
  await page.locator('input[name="number"]').fill('17');
  await page.locator('//input[@type="date" and @name="date"]').fill('2025-01-13');
  await page.locator('select[name="select"]').selectOption('556526');
  await page.locator('button.border-black').click();

  //Expected hash 
  // <General>c2fe0e21ce445033Mi00LTgyMjk0OQ==df63afbf4da3d4b1
});
