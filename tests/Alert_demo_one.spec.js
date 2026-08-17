import {test,expect} from "@Playwright/test"

test("Hanldling Simple alerts", async ({page}) => {
    await page.goto("https://demoqa.com/alerts");
    page.on('dialog',async (dialog)=>{
        const alertType = dialog.type();
        console.log(`Alert type ${alertType}`);
        console.log(`Alert message is ${dialog.message()}`)        
        await page.waitForTimeout(3000);
        dialog.accept();
    })

   await page.locator('#alertButton').click();
    
})

test('Handling Confirm alerts', async ({page}) => {
        await page.goto("https://demoqa.com/alerts");
    page.on('dialog',async (dialog)=>{
        const alertType = dialog.type();
        console.log(`Alert type ${alertType}`);
        console.log(`Alert message is ${dialog.message()}`);
        if (dialog.type()==='alert'){
            dialog.accept()
        }      
        // await page.waitForTimeout(3000);
        else if (dialog.type()==='confirm'){
            dialog.dismiss()
        }
        else{
            dialoga.accept('Arun');
        }
        
        // await expect(page.locator('#confirmResult')).toContainText('Cancel')
        
        // await expect(page.locator('#promtButton')).toContainText('Cancel')
    })
    await page.locator('#alertButton').click();
    await page.locator('#confirmButton').click();
    await page.locator('#promtButton').click();
})