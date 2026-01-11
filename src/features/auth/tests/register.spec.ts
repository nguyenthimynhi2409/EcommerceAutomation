import { test, expect } from '@playwright/test';
import { AuthPage } from '../pages/AuthPage';
import { createUser } from '../data/user.factory';

test.describe('Register User', () => {
  test('TC01 - Register user successfully', async ({ page }) => {
    const authPage = new AuthPage(page);
    const user = createUser();

    // Step 1–3
    await authPage.goto('https://automationexercise.com');
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Step 4–7
    await authPage.openSignup();
    await authPage.newUserTitle().isVisible();
    await authPage.signup(user.name, user.email);

    // Step 8–12
    await expect(authPage.accountInfoTitle()).toBeVisible();
    await authPage.fillAccountInformation(user.password);
    await authPage.fillAddress();

    // Step 13–15
    await authPage.createAccountBtn().click();
    await expect(authPage.accountCreatedTitle()).toBeVisible();
    await authPage.continueBtn().click();

    // Step 16
    await expect(
      page.getByText(`Logged in as ${user.name}`)
    ).toBeVisible();

    // Step 17–18
    await authPage.deleteAccountBtn().click();
    await expect(authPage.accountDeletedTitle()).toBeVisible();
    await authPage.continueBtn().click();
  });
});
