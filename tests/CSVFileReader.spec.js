import {test, expect} from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";

const fileContent = fs.readFileSync('test-data/login.csv',"utf-8");
const records = parse(fileContent,{columns:true, skip_empty_lines:true});


records.forEach(record => {
    test(`Login with valid ${record.email}`, async ({page}) => {
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        await page.locator('#input-email').fill(record.email);
        await page.locator('#input-password').fill(record.password);
        await page.locator("//input[@type='submit']").click();
        await expect(page.locator("//a[text()='Edit your account information']")).toBeVisible();
    await page.close();    
});
});