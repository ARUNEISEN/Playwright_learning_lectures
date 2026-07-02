import {test,expect} from "@playwright/test"

test("Text-box inputs", async ({page}) => {

    await page.goto("https://demoqa.com");
    await page.locator("//h5[text()='Elements']").click();
    await page.locator("[href='/text-box']").click();
    await page.getByPlaceholder("Full Name").fill("John Abraham");
    console.log("Full name entered.");
    await page.locator("#userEmail").fill("johnabr@gmail.com");
    console.log("Email ID entered.");
    await page.getByPlaceholder("Current Address").fill("123 Maple Street, Apt 4B, Austin,Texas, zipcode:78673,Country:USA, phone:57567667576");
    console.log("Current address entered.");
    await page.locator('#permanentAddress').fill("123 Maple Street, Apt 4B, Austin,Texas, zipcode:78673,Country:USA, phone:57567667576");
    console.log("Permanent address entered.");
    await page.locator("//button[text()='Submit']").click();
    console.log("Submi button clicked...")
    await expect(page.locator(".border")).toBeVisible();  
})