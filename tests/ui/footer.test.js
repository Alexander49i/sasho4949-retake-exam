const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    await page.goto('http://lsasho4949-retake-exam.onrender.com');  
    const footer = await page.$('div');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps Retake Exam');
  });
  