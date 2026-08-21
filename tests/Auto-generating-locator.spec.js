import {test, expect} from "@playwright/test";

test("Demonstrating locators", async ({page}) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.getByRole('textbox', { name: '* First Name' }).fill('Arun');
    await page.getByRole('textbox', { name: '* Last Name' }).fill('Se');
    await page.getByRole('textbox', { name: '* E-Mail' }).fill('hgffyf@gmail.com');
    await page.getByRole('textbox', { name: '* Telephone' }).fill('67567576576');
    await page.getByRole('textbox', { name: '* Password', exact: true }).fill('12345');
    await page.getByRole('textbox', { name: '* Password Confirm' }).fill('12345');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(5000);
})