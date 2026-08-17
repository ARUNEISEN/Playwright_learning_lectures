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
    const productDiscountedPrices = await page.locator('//div[@class="product-price"]//span[contains(text(),"Rs.") and not(@class="product-strike") and not(@class="product-discountPercentage")]').allTextContents();
    console.log(`Total number of products displayed : ${productDiscountedPrices.length}`);
    const prices = productDiscountedPrices.map(price=>Number(price.replace("Rs. ","")));
    const min_price = Math.min(...prices);
    console.log(`Minimum price of all 50 products : Rs.${min_price}`);
    const productBrand = await page.locator(`//span[normalize-space(.)='Rs. ${String(min_price)}']/ancestor::div[@class='product-productMetaInfo']/child::h3`).innerText();
    const productName = await page.locator(`//span[normalize-space(.)='Rs. ${String(min_price)}']/ancestor::div[@class='product-productMetaInfo']/child::h4[@class="product-product"]`).innerText();    
    console.log(`Product name which has minimum price : ${productBrand} ${productName}`);
});

async function getProductWithMinimumPrice(page) {
    const products = page.locator("//li[@class='product-base']");
    const productCount = await products.count();
    let minProduct = null;
    for (let i = 0; i < productCount; i++) {
        const product = products.nth(i);
        const priceText = await product
            .locator('//div[@class="product-price"]//span[contains(text(),"Rs.") and not(@class="product-strike") and not(@class="product-discountPercentage")]')
            .first()
            .innerText();
        const product_price = Number(priceText.replace('Rs. ', '').replace(',', ''));
        const product_brand = await product.locator('.product-brand').innerText();
        const product_Name = await product.locator('.product-product').innerText();
        if (minProduct === null || product_price < minProduct.product_price) {
            minProduct = {
                price: product_price,
                brand: product_brand,
                name: product_Name
            };
        }
    }

    return minProduct;
}
test('Retrieval of minimum price product info', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');
    const minProduct = await getProductWithMinimumPrice(page);
    console.log(`Minimum price: Rs.${minProduct.price}`);
    console.log(`Brand: ${minProduct.brand}`);
    console.log(`Product name: ${minProduct.name}`);
});
