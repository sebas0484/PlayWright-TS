import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import path from 'path';

test('reto', async ({ page }) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
  const phoneNumber = faker.string.numeric(10);
  const address = faker.address.streetAddress();

  // Generar fecha aleatoria
  const randomDate = faker.date.past({ years: 30 });
  const formattedDate = randomDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });


  // Automatización con datos aleatorios
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill(phoneNumber);
  await page.locator('#dateOfBirthInput').click();
  await page.locator('#dateOfBirthInput').fill(formattedDate);
  await page.getByText('Sports').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Test');
  const imagePath = path.resolve(__dirname, 'assets/test.png');
  await page.getByLabel('Select picture').setInputFiles(imagePath);
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill(address);
  await page.getByText('Select State').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.getByText('Select City').click();
  await page.getByText('Delhi', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#close-fixedban').click();
  });
