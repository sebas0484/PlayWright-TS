// src/tasks/SubmitForm.ts
import { Page } from '@playwright/test';

class SubmitForm {
  static async execute(page: Page): Promise<void> {
    await page.getByRole('button', { name: 'Submit' }).click();
  }
}

export default SubmitForm;
