import {test,expect} from "@playwright/test"

test('Demonstrating retrieving all table headings', async ({page}) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
    const tableHeadings = page.locator("//table[@class='table table-striped mt-3']//following::th");
    await expect(await tableHeadings.count()).toBe(7);
    for(let i=0; i<await tableHeadings.count(); i++){
        const tableHeader = await tableHeadings.nth(i).innerText();
        console.log(tableHeader);
    }    
})

test('Demonstrating retrieving all table heading', async ({page}) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
    const tableHeadings = page.locator("table thead th");
    const tableHeaderCount = await tableHeadings.count();
    await expect(tableHeadings).toHaveCount(7);
    for(let i=0; i<tableHeaderCount; i++){
        const tableHeader = await tableHeadings.nth(i).innerText();
        console.log(tableHeader);
    }    
})

test('Retrieval and Validation of the table Headers', async ({page}) => {
    await test.step('Navigate to the Web Tables page', async()=>{      
        await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
        await expect(page).toHaveTitle('Selenium Practice - Web Tables');
    })
    await test.step('Validate the headers',async()=>{
        const tableHeadings = page.locator("table thead th");   
        await expect(tableHeadings).toHaveCount(7);
        const headers = await tableHeadings.allInnerTexts();
        console.log('Headers', headers);
        await expect(tableHeadings).toHaveText([
                'First Name',
                'Last Name',
                'Age',
                'Email',
                'Salary',
                'Department',
                'Action'
                ]);
    })
})

test.only('Retrieve 2nd row 3rd column data', async ({page}) => {
    await test.step('Navigate to the Web Tables page', async()=>{      
        await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
        await expect(page).toHaveTitle('Selenium Practice - Web Tables');
    })

    await test.step('Validate 2nd row 3rd email data',async()=>{
        await expect(page.locator("table tbody tr:nth-child(2) td:nth-child(4)")).toHaveText('alden@example.com',{timeout:10000});
    })
})

