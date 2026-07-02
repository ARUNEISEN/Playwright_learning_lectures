import {test,expect} from "@playwright/test"

/*

{} --> blocks
() --> function parameters
[] --> array

async  --> It is a function which handles the asynchronous operation
await  --> It is a keyword which will wait for the promise to resolve. It can be used only in async function
page --> In built fixture -> which represents a tab of browser

*/

test("Launch the URL", async({page})=>{ //async arrow function + Enter
    await page.goto("https://playwright.dev/docs/intro");
    await page.waitForTimeout(3000); //static wait or hard wait
})

test("Playwright page methods", async ({page}) => {

    await page.goto("https://www.amazon.in");
    await page.waitForTimeout(3000);
    const pageTitle = await page.title();
    const pageURL = await page.url();    
    console.log(`Title of the web page ${pageTitle}`);  
    console.log("Title of the web page : ", pageTitle);    
    console.log("URL of the web page : ", pageURL);
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    await expect(page).toHaveURL("https://www.amazon.in");
    await page.waitForTimeout(5000);

    await page.goto("https://www.flipkart.com");
    await page.goBack();
    await page.goForward();
    await page.reload();
    await page.screenshot({path:'file.png'})
    

    
})

test("Facebook title and URL validation", async ({page}) => {
    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(5000);
    const expectedTitle = "Facebook";
    await expect(page).toHaveTitle(expectedTitle);
    await expect(page).toHaveURL("https://www.facebook.com/");
    
})


