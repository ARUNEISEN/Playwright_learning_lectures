# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alert_demo_one.spec.js >> Handling Confirm alerts
- Location: tests\Alert_demo_one.spec.js:17:5

# Error details

```
ReferenceError: dialoga is not defined
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('#promtButton')
    - locator resolved to <button type="button" id="promtButton" class="btn btn-primary">Click me</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import {test,expect} from "@Playwright/test"
  2  | 
  3  | test("Hanldling Simple alerts", async ({page}) => {
  4  |     await page.goto("https://demoqa.com/alerts");
  5  |     page.on('dialog',async (dialog)=>{
  6  |         const alertType = dialog.type();
  7  |         console.log(`Alert type ${alertType}`);
  8  |         console.log(`Alert message is ${dialog.message()}`)        
  9  |         await page.waitForTimeout(3000);
  10 |         dialog.accept();
  11 |     })
  12 | 
  13 |    await page.locator('#alertButton').click();
  14 |     
  15 | })
  16 | 
  17 | test('Handling Confirm alerts', async ({page}) => {
  18 |         await page.goto("https://demoqa.com/alerts");
  19 |     page.on('dialog',async (dialog)=>{
  20 |         const alertType = dialog.type();
  21 |         console.log(`Alert type ${alertType}`);
  22 |         console.log(`Alert message is ${dialog.message()}`);
  23 |         if (dialog.type()==='alert'){
  24 |             dialog.accept()
  25 |         }      
  26 |         // await page.waitForTimeout(3000);
  27 |         else if (dialog.type()==='confirm'){
  28 |             dialog.dismiss()
  29 |         }
  30 |         else{
  31 |             dialoga.accept('Arun');
  32 |         }
  33 |         
  34 |         // await expect(page.locator('#confirmResult')).toContainText('Cancel')
  35 |         
  36 |         // await expect(page.locator('#promtButton')).toContainText('Cancel')
  37 |     })
  38 |     await page.locator('#alertButton').click();
  39 |     await page.locator('#confirmButton').click();
> 40 |     await page.locator('#promtButton').click();
     |                                        ^ Error: locator.click: Test ended.
  41 | 
  42 |     // Added by Arunkumar Sekar
  43 |     console.log("This changes are added by Arunkumar Sekar");
  44 | })
```