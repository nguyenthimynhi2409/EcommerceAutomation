import { Page, expect } from "@playwright/test";

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async expectVisible(locator: string) {
    await expect(this.page.locator(locator)).toBeVisible();
  }
}
