import {test,expect} from "@playwright/test"

test("File Handling Methods", async ({page}) => {

    // Upload single file
    await page.goto("https://demoqa.com/upload-download");
    await page.setInputFiles("#uploadFile","./FileForUpload/sample.xlsx");
    await page.waitForTimeout(3000);

    // Delete the uploaded file
    await page.setInputFiles("#uploadFile",[]);
    await page.waitForTimeout(3000);

    // Upload Multiple  file
    await page.goto("https://www.file.io/");
    await page.setInputFiles("[class='css-zpjtsm e12cce780']",['./FileForUpload/sample.xlsx','./FileForUpload/sample.png','./FileForUpload/sample.txt']);
    await page.waitForTimeout(9000);

    
})

test("Download a file", async ({page}) => {

    await page.goto("https://demoqa.com/upload-download");
    const [result] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#downloadButton')
    ]);
    
    await result.saveAs('./Downloaded/pf_file.png');
})