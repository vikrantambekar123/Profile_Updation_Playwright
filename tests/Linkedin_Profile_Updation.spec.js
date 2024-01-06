import { test, expect } from '@playwright/test';


// We can Pass as Many as Users we want Currently I Have choosed to do this for 2 profiles
const credentials = [
  { 
      username: '',                   // Put Username here
      password: '',                   // Put Password here
      profileName: ''                 // Put ProfileName which is on Linkedin
  },
  { 
      username: '',                   // Put Username here
      password: '',                   // Put Password here
      profileName: ''                 // Put ProfileName which is on Linkedin
  }
];


test('Updting Linkedin Profile ', async ({ page}) => {
  for (const creds of credentials) {
  await page.goto('https://www.linkedin.com/');
  await page.getByLabel('Email or phone').click();
  await console.log("Entering Username :- ",creds.username);
  await page.getByLabel('Email or phone').fill(creds.username);
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill(creds.password);
  await page.getByLabel('Show your LinkedIn password').click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Photo of '+creds.profileName}).click();
  await page.getByRole('button', { name: 'Edit', exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Edit about' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByLabel('Dismiss', { exact: true }).click();
  await page.getByRole('button', { name: creds.profileName+' Me' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await page.waitForTimeout(1000);
  
  }
});