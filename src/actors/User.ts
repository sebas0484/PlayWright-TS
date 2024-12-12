// src/actors/User.ts
import { Page } from '@playwright/test';

class User {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  static withPage(page: Page): User {
    return new User(page);
  }

  async perform(task: { execute: (page: Page) => Promise<void> }) {
    await task.execute(this.page);
  }

  async ask(question: { answer: (page: Page) => Promise<any> }) {
    return await question.answer(this.page);
  }
}

export default User;
