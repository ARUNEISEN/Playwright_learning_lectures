import {test} from '@playwright/test'

test('Demonstrating allTextContent() Command', async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/');
const linkLocator = await page.locator('//a');
const linkTexts = await linkLocator.allTextContents();
const linkCount = await linkTexts.length;
console.log(`Total number of links available in the webpage is ${linkCount}`);

for(const linkText of linkTexts){
    console.log(linkText);
}

})

test('Demonstrating allInnerTexts() Command', async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/');
const linkLocator = await page.locator('//a');
const linkTexts = await linkLocator.allInnerTexts();
const linkCount = await linkTexts.length;
console.log(`Total number of links available in the page is ${linkCount}`);
for(const linkText of linkTexts){

    console.log(linkText);
}

})

test('Demonstrating inputValue command', async ({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register')
    const beforeText = await page.getByPlaceholder('First Name').inputValue();
    console.log('The text value before enter the value : ',beforeText);
    await page.getByPlaceholder('First Name').fill('Arunkumar Sekar');
    const afterText = await page.getByPlaceholder('First Name').inputValue();    
    console.log('The text value after enter the value : ', afterText);
})