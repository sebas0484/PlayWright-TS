import { test, expect, Page } from '@playwright/test';
import User from '../actors/User';
import FillForm from '../tasks/FillForm';
import SubmitForm from '../tasks/SubmitForm';
import FormDataQuestion from '../questions/FormData';
import ConfirmationPopup from '../questions/ConfirmationPopUp';
import RandomData from '../interactions/RandomData';

test('Formulario de automatización', async ({ page }: { page: Page }) => {
  const user = User.withPage(page);

  const randomData = await RandomData.answer(page);

  await user.perform(FillForm);
  await user.perform(SubmitForm);

  const isConfirmationVisible = await user.ask(ConfirmationPopup);
  expect(isConfirmationVisible).toBe(true);

  const formData = await user.ask(FormDataQuestion);

  expect(formData.nameField).toContain(`${randomData.firstName} ${randomData.lastName}`);
  expect(formData.emailField).toContain(randomData.email);
  expect(formData.gender).toBe('Male');
  expect(formData.mobile).toBe(randomData.phoneNumber);
  expect(formData.dob).toBe(`${randomData.birthDay} ${randomData.birthMonth},${randomData.birthYear}`);
  expect(formData.stateCity).toBe('NCR Delhi');
});

