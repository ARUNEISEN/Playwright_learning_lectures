/*
value => {value:'value'}
label => {label:'text}
index =>{index:0

for multi select dropdowns we can use array of values, labels and indexes
*/

import {test, expect, chromium} from "@playwright/test"

test('Dropdown handling/ Single select', async ({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(4000);
    await expect(page.locator('#nav-logo-sprites')).toBeVisible();
    // await page.selectOption("//select[@title='Search in']",{value:"search-alias=fashion"});
    await page.selectOption("//select[@title='Search in']",{label:'Amazon Fashion'});    
    // await page.selectOption("//select[@title='Search in']","search-alias=fashion");
    await page.selectOption("//select[@title='Search in']",'Beauty');    
    await page.selectOption("//select[@title='Search in']",{index:2}); 

})

test('Dropdown handling/ Multi select', async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://testautomationcentral.com/demo/dropdown.html');
    // await page.locator("//button[text()='Multi-Select']").click(); 
    // await page.getByText('Multi-Select').click(); 
    await page.getByRole('button',{name:'Multi-Select'}).click(); 
    // await page.click("//button[text()='Multi-Select']");
    await page.selectOption('[class="form-multiselect block w-full mt-1"]', ['Option 1', 'Option 2']);    
    // await page.locator('//select[@class="form-multiselect block w-full mt-1"]').nth(0).selectOption(['Option 1', 'Option 2']);
    await page.waitForTimeout(3000);
});

test('Dropdown handling Single select', async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto('https://testautomationcentral.com/demo/dropdown.html');
    await page.locator("//button[text()='Simple Dropdown']").click();    
    // await page.click("//button[text()='Simple Dropdown']");
    // locator should be unique when you ise locator method like below
    // await page.locator('(//select[@class="form-select block w-full mt-1"])[1]').selectOption('option3');    
    await page.locator('//select[@class="form-select block w-full mt-1"]').nth(0).selectOption('option3');
    // await page.selectOption('[class="form-select block w-full mt-1"]', {value:'option3'});
});