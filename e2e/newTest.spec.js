const { test, expect } = require('@playwright/test');

test('open a webpage', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  /* Assert the page title
  const title = await page.title();
  expect(title).toBe('Example Domain');*/
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
 //await page.locator('input.oxd-input.oxd-input--focus[autocomplete="off"]').fill('AHMEDKHALEDS')
 //await page.locator('input.oxd-input.oxd-input--focus[type="password"][autocomplete="off"]').fill('Asdfghjk1234');
 await page.locator('label:has-text("Confirm Password") >> following-sibling::input.oxd-input.oxd-input--focus[type="password"][autocomplete="off"]').fill('Asdfghjk1234');

 await page.click("input.oxd-input.oxd-input--active").fill('ahmed');
 await page.click("input.oxd-input.oxd-input--active");
 await page.locator("div.oxd-select-text-input", { hasText: "-- Select --" }).click();
 await page.locator("div.oxd-select-option:has(span:has-text('Admin'))").click();





 
});
