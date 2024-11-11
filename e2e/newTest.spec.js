const { test, expect } = require('@playwright/test');

test('open a webpage', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.locator('input[placeholder="Username"]').fill('Admin');
  await page.locator('input[placeholder="Password"]').fill('admin123');
  const loginButton = page.locator('button', { hasText: 'Login' });
  await loginButton.click();
  await page.waitForTimeout(4000); 
  await page.click("a.oxd-main-menu-item:has(span.oxd-main-menu-item--name:has-text('Admin'))");
  await page.locator("button.oxd-button.oxd-button--medium.oxd-button--secondary", { hasText: "Add" }).click();
  await page.locator('div.oxd-autocomplete-text-input.oxd-autocomplete-text-input').click();
  await page.locator('div.oxd-autocomplete-text-input.oxd-autocomplete-text-input').type('Ravi M B');
  await page.locator('div.oxd-autocomplete-option >> text="Ravi M B"').click();
  await page.locator('input.oxd-input.oxd-input--active[type="password"]').first().fill('Asdfghjk1234');
  await page.waitForTimeout(4000); 
  await page.locator('div.oxd-grid-item:has(label:has-text("Confirm Password")) input[type="password"]').fill('Asdfghjk1234');
  await page.locator('div.oxd-grid-item:has(label:has-text("User Role")) div.oxd-select-text').click();
  await page.locator('div.oxd-select-option >> text=Admin').click();
  await page.locator('div.oxd-grid-item:has(label:has-text("Status")) div.oxd-select-text').click();
  await page.locator('div.oxd-select-option >> text=Enabled').click();
  await page.locator('input.oxd-input[autocomplete="off"]').first().fill('ahmedKhaledS');
  await page.locator('button', { hasText: 'Save' }).click();
 // await page.reload();
  await page.waitForTimeout(4000); 
  await page.locator('form.oxd-form >> label:has-text("Username") >> input.oxd-input.oxd-input--focus').fill('ahmedKhaledS');
  await page.keyboard.press('Enter');
  await page.locator('span.oxd-checkbox-input').first().click();
  await page.locator('button', { hasText: 'Delete Selected' });





 
});
