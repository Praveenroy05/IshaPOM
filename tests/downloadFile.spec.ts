import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('Download and validate PDF file', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

  await page.getByRole('button', { name: 'Generate and Download PDF File' , exact : true}).click({ timeout: 10000});

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download PDF File' }).click();
  const download = await downloadPromise;
  //download.suggestedFileName() - This will return us the downloaded file name

  const downloadsDir = path.join(__dirname, '../downloads');

  if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir);
  }
  const filePath = path.join(downloadsDir, download.suggestedFilename()); // 
  // C:\Users\prave\OneDrive - EduNexGen QA\Desktop\Playwright\PWTSPOMMay\downloads\info.pdf
  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBeTruthy();
  expect(filePath).toContain(('.pdf'));
});
