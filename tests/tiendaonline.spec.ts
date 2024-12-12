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
  const birthDay = randomDate.toLocaleDateString('en-GB', { day: '2-digit' });
  const birthMonth = randomDate.toLocaleDateString('en-US', { month: 'long' });
  const birthYear = randomDate.getFullYear();

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
  await page.locator('#dateOfBirthInput').fill(`${birthDay} ${birthMonth} ${birthYear}`);
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

  // Validaciones
  const confirmationPopup = await page.locator('.table.table-dark.table-striped.table-bordered.table-hover');
  await expect(confirmationPopup).toBeVisible();

  const nameField = await page.locator('tbody > tr:nth-child(1) > td:nth-child(2)').textContent();
  expect(nameField).toContain(`${firstName} ${lastName}`);

  const emailField = await page.locator('tbody > tr:nth-child(2) > td:nth-child(2)').textContent();
  expect(emailField).toContain(email);

  const gender = await page.locator('tbody > tr:nth-child(3) > td:nth-child(2)').textContent();
  expect(gender).toBe('Male');

  const mobile = await page.locator('tbody > tr:nth-child(4) > td:nth-child(2)').textContent();
  expect(mobile).toBe(phoneNumber);

  const dob = await page.locator('tbody > tr:nth-child(5) > td:nth-child(2)').textContent();
  expect(dob).toBe(`${birthDay} ${birthMonth},${birthYear}`);

  const stateCity = await page.locator('tbody > tr:nth-child(10) > td:nth-child(2)').textContent();
  expect(stateCity).toBe('NCR Delhi');

});

  //Se puede realizar la seleccion de ciudad y estado aleatorio de la siguiente manera 

  /*// Estados y ciudades disponibles
  const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
  const cities = {
    'NCR': ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Meerut'],
    'Haryana': ['Ambala', 'Panipat', 'Sonipat'],
    'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur']
  };

  // Selección aleatoria de estado y ciudad
  const randomState = states[Math.floor(Math.random() * states.length)];
  const randomCity = cities[randomState][Math.floor(Math.random() * cities[randomState].length)];
  
  validacion
  
  const stateCity = await page.locator('tbody > tr:nth-child(10) > td:nth-child(2)').textContent();
  expect(stateCity).toBe(`${randomState} ${randomCity}`);*/

  /*Pero se deberia estar actualizando constantenemente con las nuevas cidudades y estados por lo cual dejo la alternativa
  para esta prueba lo dejo de manera fija*/
  
