// src/questions/ConfirmationPopup.ts
import { Page } from '@playwright/test';

class ConfirmationPopup {
  static async answer(page: Page): Promise<boolean> {
    return page.locator('.table.table-dark.table-striped.table-bordered.table-hover').isVisible();
  }
}

export default ConfirmationPopup;
