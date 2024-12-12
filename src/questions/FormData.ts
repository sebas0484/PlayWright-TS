import { expect, Page } from '@playwright/test';
import User from '../actors/User';

interface FormData {
  nameField: string;
  emailField: string;
  gender: string;
  mobile: string;
  dob: string;
  stateCity: string;
}

class FormDataQuestion {
    static async answer(page: Page): Promise<FormData> {

      const user = User.withPage(page);

      const nameField = await page.locator('tbody > tr:nth-child(1) > td:nth-child(2)').textContent() || '';
      const emailField = await page.locator('tbody > tr:nth-child(2) > td:nth-child(2)').textContent() || '';
      const gender = await page.locator('tbody > tr:nth-child(3) > td:nth-child(2)').textContent() || '';
      const mobile = await page.locator('tbody > tr:nth-child(4) > td:nth-child(2)').textContent() || '';
      const dob = await page.locator('tbody > tr:nth-child(5) > td:nth-child(2)').textContent() || '';
      const stateCity = await page.locator('tbody > tr:nth-child(10) > td:nth-child(2)').textContent() || '';
  
      return { nameField, emailField, gender, mobile, dob, stateCity };
    }
  }
export default FormDataQuestion;


