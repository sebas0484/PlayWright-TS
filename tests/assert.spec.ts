import { test, expect } from '@playwright/test';

test('playng with assertions', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');
  await expect(page.locator('#newButtonName')).toBeVisible();
  await page.locator('#newButtonName').fill('jude');
  await page.locator('#updatingButton').click();
  await expect(page.locator('#updatingButton')).toContainText('jude');
});