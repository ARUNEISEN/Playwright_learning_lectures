import {test, expect, chromium} from '@playwright/test'

test('Demonstrating xpath locators', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(3000);
    console.log(await page.title());
    expect(await page.title()).toBe('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');    
})

test('xpath locators', async ({page}) => {
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(3000);
    console.log(await page.title());
    expect(await page.title()).toBe('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');    
})