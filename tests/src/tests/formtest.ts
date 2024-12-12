// src/tests/formTest.ts
import { test, expect, Page } from '@playwright/test';
import User from '../actors/User';
import FillForm from '../tasks/FillForm';
import SubmitForm from '../tasks/SubmitForm';
import FormDataQuestion from '../questions/FormData';
import ConfirmationPopup from '../questions/ConfirmationPopUp';

test('Formulario de automatización', async ({ page }: { page: Page }) => {
  const user = User.withPage(page);

  await user.perform(FillForm);

  await user.perform(SubmitForm);

  const isConfirmationVisible = await user.ask(ConfirmationPopup);
  expect(isConfirmationVisible).toBe(true);

  const formData = await user.ask(FormDataQuestion);
  expect(formData.nameField).toContain('FirstName LastName');
  expect(formData.emailField).toContain('email@example.com');
  expect(formData.gender).toBe('Male');
  expect(formData.mobile).toBe('1234567890');
  expect(formData.dob).toBe('12 December, 1990');
  expect(formData.stateCity).toBe('NCR Delhi');
});
