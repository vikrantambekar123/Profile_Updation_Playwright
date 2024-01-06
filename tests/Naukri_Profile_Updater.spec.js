import { test, expect } from '@playwright/test';

const credentials = [
  { 
    username: '',                   // Put Username here
    password: '',                   // Put Password here
    profileName: ''                 // Put ProfileName which is on Linkedin
  },
  { 
    username: '',                   // Put Username here
    password: '',                   // Put Password here
    profileName: ''                 // Put ProfileName which is on Linkedin0
  }
];

test('Updating Naukri Profile', async ({ page }) => {

  for (const creds of credentials) {

  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByPlaceholder('Enter your active Email ID /').click();
  console.log("Entering Username :- ",creds.username)
  await page.getByPlaceholder('Enter your active Email ID /').fill(creds.username);
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill(creds.password);
  await page.getByText('Show', { exact: true }).click();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('link', { name: 'View profile' }).click();
  await page.locator('em').filter({ hasText: 'editOneTheme' }).click();
  await page.getByPlaceholder('Enter Your Name').click();
  await page.getByRole('button', { name: 'Save' }).click();
 
  await page.locator('#lazyKeySkills').getByText('editOneTheme').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('#lazyResumeHead').getByText('editOneTheme').click();
  await page.getByRole('button', { name: 'Save' }).click();

  await page.locator("div[class='nI-gNb-drawer__icon']").click();
  await page.locator("a[data-type='logoutLink']").click();

  await page.waitForTimeout(2000);

  }
});