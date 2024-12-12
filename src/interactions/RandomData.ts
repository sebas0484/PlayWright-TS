import { faker } from '@faker-js/faker';
import { Page } from '@playwright/test';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    birthDay: string;
    birthMonth: string;
    birthYear: any;
}

class RandomData {
  private static data: FormData | null = null;

  static async answer(page: Page): Promise<FormData> {
      if (!this.data) {
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

          this.data = { firstName, lastName, email, phoneNumber, address, birthDay, birthMonth, birthYear };
      }

      return this.data;
  }
}
  
export default RandomData;