import {test,expect} from "@playwright/test"

test("Frame methods", async ({page}) => {
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html#google_vignette");
    const frame3Parent  = page.frameLocator("//iframe[@id='frm3']");
    const frame3child  = frame3Parent.frameLocator("//iframe[@id='frm2']");
    await frame3child.locator('#firstName').fill("John");
    await page.waitForTimeout(5000);

    

})