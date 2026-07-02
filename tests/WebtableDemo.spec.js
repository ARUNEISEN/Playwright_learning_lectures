import {test,expect} from '@playwright/test'

test('Modify exist web table values', async ({page}) => {
    await page.goto('https://demoqa.com/webtables');
    const rows = page.locator('table tbody tr');
    const rowsCount = await rows.count();
    console.log(`Total number of rows available in the table : ${rowsCount}`);
    for(let i=0; i<rowsCount; i++){
        const rowsText = await rows.nth(i).textContent();
        console.log(rowsText);
        if(rowsText.includes('Gentry')){
            await rows.locator('#edit-record-2').click();
            await page.getByPlaceholder('Salary').fill('35000');
            await page.getByRole('button',{'name':'Submit'}).click();
            await page.waitForTimeout(4000);
            break;
        }
    }    
})

test('Adding new Row to WebTable',  async ({page}) => {
    await page.goto('https://demoqa.com/webtables');
    await page.locator('#addNewRecordButton').click();
    await page.getByPlaceholder('First Name').fill('John');
    await page.locator('#lastName').fill('Henry');
    await page.locator('#userEmail').fill('jhenry@gmail.com');
    await page.getByPlaceholder('Age').fill('34');
    await page.locator('//input[@id="salary"]').fill('82000');
    await page.getByPlaceholder('Department').fill('Playwright QA Tester');
    await page.getByText('Submit').click();
    await page.waitForTimeout(5000);    
})