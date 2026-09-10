import {test,expect} from "@playwright/test";

test("practicing the trace viewer", async ({page}) => {

    await page.goto("https://www.facebook.com/");
    await page.waitForTimeout(2000);
    
})