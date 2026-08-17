import {test, expect} from "@playwright/test"


test.only('Login with valid credentials', async ({page}) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    await page.locator('#input-email').fill('aruenisen1052@gmail.com');
    await page.locator('#input-password').fill('12345');
    await page.locator("//input[@type='submit']").click();
    await expect(page.locator("//a[text()='Edit your account information']")).toBeVisible();
    await page.close();    
})

test('Login with Invalid credentials', async ({page}) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    await page.locator('#input-email').fill('aruenisen1052@gmail.com');
    await page.locator('#input-password').fill('123452324');
    await page.locator("//input[@type='submit']").click();
    await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toBeVisible();
    await page.close(); 
})