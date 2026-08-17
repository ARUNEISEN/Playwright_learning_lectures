import {test, expect, chromium} from '@playwright/test'
import {math} from "@playwright/test";

test('Demonstrating xpath locators', async ({page}) => {
    await page.goto('https://www.myntra.com/boy-tshirts');
    await page.waitForTimeout(5000);
    const tshirtPrice = await page.locator('//span[@class="product-discountedPrice"]').allTextContents();
    console.log(tshirtPrice);
    const prices = tshirtPrice.map(price=>Number(price.replace("Rs. ","")))
    const min_price = Math.min(...prices);
    console.log("Minimum price of all 50 products Rs.", min_price);
});

test('Retrival of product info', async ({page}) => {
    await page.goto('https://www.myntra.com/boy-tshirts');
    await page.waitForTimeout(5000);
    // const productDiscountPrices = await page.locator("//span[@class='product-discountedPrice']").allTextContents();
    const productDiscountedPrices = await page.locator('//div[@class="product-price"]//span[contains(text(),"Rs.") and not(@class="product-strike") and not(@class="product-discountPercentage")]').allTextContents();
    // const productPrices = await page.locator('class="product-price"')
    console.log(`Total number of products displayed : ${productDiscountedPrices.length}`);
    // console.log(productDiscountedPrices);
    const prices = productDiscountedPrices.map(price=>Number(price.replace("Rs. ","")));
    const min_price = Math.min(...prices);
    console.log(`Minimum price of all 50 products : Rs.${min_price}`);
    const productBrand = await page.locator(`//span[normalize-space(.)='Rs. ${String(min_price)}']/ancestor::div[@class='product-productMetaInfo']/child::h3`).innerText();
    const productName = await page.locator(`//span[normalize-space(.)='Rs. ${String(min_price)}']/ancestor::div[@class='product-productMetaInfo']/child::h4[@class="product-product"]`).innerText();
    
    console.log(`Product name which has minimum price : ${productBrand} ${productName}`);
});

// function 


