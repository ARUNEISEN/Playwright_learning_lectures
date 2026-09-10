import {test, chromium} from '@playwright/test';
test('Handling multiple tabs', async()=>{
	const browser =await  chromium.launch();
	const context =await browser.newContext();
	const page1 = await context.newPage();
	const page2 =await  context.newPage();
	const page3 = await context.newPage();
    await page1.goto('https://www.facebook.com/');
    await page2.goto('https://www.facebook.com/');
    await page2.goto('https://www.facebook.com/');
    
});