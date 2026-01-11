import { Page, expect } from '@playwright/test';
import { BasePage } from '@/shared/base/BasePage';

export class AuthPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  signupLoginBtn = () => this.page.getByText('Signup / Login');
  newUserTitle = () => this.page.getByText('New User Signup!');
  signupName = () => this.page.locator('[data-qa="signup-name"]');
  signupEmail = () => this.page.locator('[data-qa="signup-email"]');
  signupBtn = () => this.page.locator('[data-qa="signup-button"]');

  accountInfoTitle = () =>
    this.page.getByText('Enter Account Information', { exact: false });

  createAccountBtn = () =>
    this.page.locator('[data-qa="create-account"]');

  accountCreatedTitle = () =>
    this.page.getByText('Account Created!', { exact: false });

  continueBtn = () => this.page.locator('[data-qa="continue-button"]');

  deleteAccountBtn = () =>
    this.page.getByText('Delete Account');

  accountDeletedTitle = () =>
    this.page.getByText('Account Deleted!', { exact: false });

  // Actions
  async openSignup() {
    await this.signupLoginBtn().click();
  }

  async signup(name: string, email: string) {
    await this.signupName().fill(name);
    await this.signupEmail().fill(email);
    await this.signupBtn().click();
  }

  async fillAccountInformation(password: string) {
    await this.page.locator('#id_gender1').check();
    await this.page.locator('[data-qa="password"]').fill(password);

    await this.page.selectOption('[data-qa="days"]', '10');
    await this.page.selectOption('[data-qa="months"]', '5');
    await this.page.selectOption('[data-qa="years"]', '1995');

    await this.page.locator('#newsletter').check();
    await this.page.locator('#optin').check();
  }

  async fillAddress() {
    await this.page.locator('[data-qa="first_name"]').fill('Automation');
    await this.page.locator('[data-qa="last_name"]').fill('Tester');
    await this.page.locator('[data-qa="company"]').fill('QA Corp');
    await this.page.locator('[data-qa="address"]').fill('123 Test Street');
    await this.page.locator('[data-qa="address2"]').fill('District 1');
    await this.page.selectOption('[data-qa="country"]', 'Canada');
    await this.page.locator('[data-qa="state"]').fill('Ontario');
    await this.page.locator('[data-qa="city"]').fill('Toronto');
    await this.page.locator('[data-qa="zipcode"]').fill('12345');
    await this.page.locator('[data-qa="mobile_number"]').fill('0123456789');
  }
}
