import {test, expect} from '@playwright/test'

test('Press Enter key to submit form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').fill('Test User');
  await page.keyboard.press('Tab'); 
  await page.keyboard.type('test@example.com');
  await page.keyboard.press('Tab');
  await page.keyboard.type('Some Address');
  await page.keyboard.press('Tab');
  await page.waitForTimeout(3000)
  
});

test('Type text into input field', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const input = page.locator('#userName');
  await input.click();
  await page.keyboard.type('Playwright');
  await expect(input).toHaveValue('Playwright');
});

test.only('Use Ctrl+A and Ctrl+C/V shortcuts', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const input = page.locator('#userName');
  await input.fill('Playwright Shortcut Test');

  // Select All (Ctrl+A), Copy (Ctrl+C)
  await input.click();
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+C');

  // Paste into another field
  const email = page.locator('#userEmail');
  await email.click();
  await page.keyboard.press('Control+V');

  await expect(email).toHaveValue('Playwright Shortcut Test');
});

test('Use arrow keys to navigate and edit text', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const input = page.locator('#userName');
  await input.fill('HelloWrld');
  await input.focus();

  await page.keyboard.press('ArrowLeft'); 
  await page.keyboard.press('ArrowLeft'); 
  await page.keyboard.press('ArrowLeft'); 
  await page.keyboard.type('o'); 

  await expect(input).toHaveValue('HelloWorld');
});

test('Use Backspace to delete characters', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const input = page.locator('#userName');
  await input.fill('Playwrighx');
  await input.focus();

  await page.keyboard.press('Backspace'); 
  await page.keyboard.type('t'); 

  await expect(input).toHaveValue('Playwright');
});

test('Press ArrowDown multiple times', async ({ page }) => {
  await page.goto('https://demoqa.com/auto-complete');
  const input = page.locator('#autoCompleteMultipleInput');

  await input.fill('R');
  await page.waitForTimeout(1000); // Wait for suggestions to load

  for (let i = 0; i < 2; i++) {
    await page.keyboard.press('ArrowDown');
  }

  await page.keyboard.press('Enter');
});




