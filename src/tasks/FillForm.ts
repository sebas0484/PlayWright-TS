import { Page } from '@playwright/test';
import path from 'path';
import User from '../actors/User';
import RandomData from '../interactions/RandomData';

class FillForm {
  static async execute(page: Page): Promise<void> {
    
    const user = User.withPage(page);
    const randomData = await user.ask(RandomData);

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByPlaceholder('First Name').fill(randomData.firstName);
    await page.getByPlaceholder('Last Name').fill(randomData.lastName);
    await page.getByPlaceholder('name@example.com').fill(randomData.email);
    await page.getByText('Male', { exact: true }).click();
    await page.getByPlaceholder('Mobile Number').fill(randomData.phoneNumber);
    await page.locator('#dateOfBirthInput').fill(`${randomData.birthDay} ${randomData.birthMonth} ${randomData.birthYear}`);
    await page.getByText('Sports').click();
    await page.locator('.subjects-auto-complete__value-container').click();
    await page.locator('#subjectsInput').fill('Test');
    const imagePath = path.resolve(__dirname, '../assets/test.png');
    await page.getByLabel('Select picture').setInputFiles(imagePath);
    await page.getByPlaceholder('Current Address').fill(randomData.address);
    await page.getByText('Select State').click();
    await page.getByText('NCR', { exact: true }).click();
    await page.getByText('Select City').click();
    await page.getByText('Delhi', { exact: true }).click();
  }
}

export default FillForm;
