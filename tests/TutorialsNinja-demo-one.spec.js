import{test, expect} from "@playwright/test"

test("Demonstrating locators", async ({page}) => {

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    const logoLoc = page.locator("#logo");
    await logoLoc.locator("h1 a").click();
    await page.waitForTimeout(4000);    
})