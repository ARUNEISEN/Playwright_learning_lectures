import {test,expect} from "@playwright/test"

test('Retrival of product information', async ({page}) => {
   
    console.log("============================================================================");
    console.log('***************** PRODUCT INFORMATION *********************')    
    console.log("============================================================================");
    await page.goto('https://www.myntra.com/kids-tshirts');
    const productInfo = await page.locator('//div[@class="product-productMetaInfo"]').allTextContents();
    console.log(productInfo);
    console.log(getObject(productInfo));
    // console.log(`Total number of products dispalyed ${productInfo.length}`);    
    // console.log("============================================================================");
    // console.log('***************** MINIMUM PRICE*********************')    
    // console.log("============================================================================");
    // const productDiscountPrices = await page.locator("//span[@class='product-discountedPrice']").allTextContents();
    // console.log(productDiscountPrices);
    // const prices = productDiscountPrices.map(price=>Number(price.replace("Rs. ","")))
    // const min_price = Math.min(...prices);
    // console.log("Minimum price of all 50 products Rs.", min_price);

    
})

function getObject(produtDetails){
    const projectInformation = {};
    const info = produtDetails.map(prod=>{return prod.split(":")});
    projectInformation.productname=info[0];
    const additionalInfo = info[1].split(" ");
    projectInformation.age = additionalInfo[0];    
    projectInformation.disountedPrice = additionalInfo[0];    
    projectInformation.originalPrice = additionalInfo[0];    
    projectInformation.discountedPercentage = additionalInfo[0];
    console.log(projectInformation);

}