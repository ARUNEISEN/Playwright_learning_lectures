import {test,locator, expect} from '@playwright/test'

test('Demonstrating assertions in Playwright', async ({page}) => {
    await page.goto('https://demoqa.com/text-box');
    console.log('Title of the page', await page.title());
    console.log('URL of the page', await page.url());
    await expect(page).toHaveTitle('demosite');
    await expect(page).toHaveURL('https://demoqa.com/text-box');

    const nameTextbox = page.getByPlaceholder('Full Name');
    await expect(nameTextbox).toBeVisible();
    await expect(nameTextbox).toBeEnabled();
    await expect(nameTextbox).toBeEditable();
    await expect(nameTextbox).not.toBeHidden();
    await expect(nameTextbox).not.toBeDisabled();

    await nameTextbox.fill('Arunkumar');
    await expect(nameTextbox).toHaveValue('Arunkumar');

    await expect(page.locator('#currentAddress-label')).toHaveText('Current Address');

    await expect(page.locator('#currentAddress')).toBeEmpty();

    await expect(page.locator('#permanentAddress')).toBeEmpty();

    const submitBtn = page.locator('#submit');
    await expect(submitBtn).toBeEnabled();

    await page.waitForTimeout(4000);
    
})