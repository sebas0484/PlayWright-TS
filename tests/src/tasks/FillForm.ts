// src/tasks/FillForm.ts
import { Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import path from 'path';

class FillForm {
  static async execute(page: Page): Promise<void> {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
    const phoneNumber = faker.string.numeric(10);
    const address = faker.address.streetAddress();

    // Generar fecha aleatoria
    const randomDate = faker.date.past({ years: 30 });
    const birthDay = randomDate.toLocaleDateString('en-GB', { day: '2-digit' });
    const birthMonth = randomDate.toLocaleDateString('en-US', { month: 'long' });
    const birthYear = randomDate.getFullYear();

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByPlaceholder('First Name').fill(firstName);
    await page.getByPlaceholder('Last Name').fill(lastName);
    await page.getByPlaceholder('name@example.com').fill(email);
    await page.getByText('Male').click();
    await page.getByPlaceholder('Mobile Number').fill(phoneNumber);
    await page.locator('#dateOfBirthInput').fill(`${birthDay} ${birthMonth} ${birthYear}`);
    await page.getByText('Sports').click();
    await page.locator('.subjects-auto-complete__value-container').click();
    await page.locator('#subjectsInput').fill('Test');
    const imagePath = path.resolve(__dirname, 'assets/test.png');
    await page.getByLabel('Select picture').setInputFiles(imagePath);
    await page.getByPlaceholder('Current Address').fill(address);
    await page.getByText('Select State').click();
    await page.getByText('NCR').click();
    await page.getByText('Select City').click();
    await page.getByText('Delhi').click();
  }
}

export default FillForm;
