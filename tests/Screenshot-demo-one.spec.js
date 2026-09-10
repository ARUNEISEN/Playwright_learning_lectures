import {test, expect} from "@playwright/test";
test("Practicing screenshot", async ({page}) => {
    await page.goto("https://www.facebook.com/");
    await page.screenshot({
        path:'Screenshots/facebook2.png',
        fullPage:true
    });
})

test("Practicing particular screenshot", async ({page}) => {
    
    await page.goto("https://www.facebook.com/");
    await page.locator('//input[@name="email"]').screenshot({
        path:'Screenshots/facebook3.jpg'
    })
    
})