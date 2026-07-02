import {test} from '@playwright/test'

test('Keyboard actions', async ({page}) => {

    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill("Iphones");    
    await page.getByPlaceholder('Search Amazon.in').fill("12");

    
    await page.getByPlaceholder('Search Amazon.in').type("Iphones",{delay:1000});    
    await page.getByPlaceholder('Search Amazon.in').type("12",{delay:1000});
    await page.getByPlaceholder('Search Amazon.in').press('Control+A');
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Search Amazon.in').press('Control+X');
    await page.waitForTimeout(3000); 
    await page.getByPlaceholder('Search Amazon.in').press('Control+V');
})

test('Mouse actions', async ({page}) => {

    // await page.goto('https://www.amazon.in/');
    // await page.locator('#nav-link-accountList-nav-line-1').hover();
    // await page.waitForTimeout(5000);

    await page.goto('https://jqueryui.com/droppable/');
    const frame = await page.frameLocator('.demo-frame');
    // await frame.locator('#draggable').dragTo(await frame.locator('#droppable'));
    // await page.waitForTimeout(4000);

    await frame.locator('#draggable').hover();
    await page.mouse.down();
    await frame.locator('#droppable');
    await page.mouse.up();
    await page.waitForTimeout(10000);


})