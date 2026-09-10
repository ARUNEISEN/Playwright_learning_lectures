# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright-webtable-demo.spec.ts >> Demonstrating retrieving all table headings
- Location: tests\playwright-webtable-demo.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 7
Received: Promise {}
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e3]:
    - link [ref=e5] [cursor=pointer]:
      - /url: https://www.tutorialspoint.com
      - img [ref=e6]
    - heading "Selenium - Automation Practice Form" [level=1] [ref=e25]
    - link "Selenium Tutorial" [ref=e27] [cursor=pointer]:
      - /url: /selenium/index.htm
      - text: Selenium Tutorial
  - main [ref=e28]:
    - generic [ref=e30]:
      - generic [ref=e32]:
        - generic [ref=e33]:
          - heading "Elements" [level=2] [ref=e34]:
            - button "Elements" [ref=e35] [cursor=pointer]: Elements
          - generic "Elements" [ref=e36]:
            - list [ref=e38]:
              - listitem [ref=e39]:
                - link "Text Box" [ref=e40] [cursor=pointer]:
                  - /url: text-box.php
                  - text: Text Box
              - listitem [ref=e41]:
                - link "Check Box" [ref=e42] [cursor=pointer]:
                  - /url: check-box.php
                  - text: Check Box
              - listitem [ref=e43]:
                - link "Radio Button" [ref=e44] [cursor=pointer]:
                  - /url: radio-button.php
                  - text: Radio Button
              - listitem [ref=e45]:
                - link "Web Tables" [ref=e46] [cursor=pointer]:
                  - /url: webtables.php
                  - text: Web Tables
              - listitem [ref=e47]:
                - link "Buttons" [ref=e48] [cursor=pointer]:
                  - /url: buttons.php
                  - text: Buttons
              - listitem [ref=e49]:
                - link "Links" [ref=e50] [cursor=pointer]:
                  - /url: links.php
                  - text: Links
              - listitem [ref=e51]:
                - link "Broken Links - Images" [ref=e52] [cursor=pointer]:
                  - /url: broken-links.php
                  - text: Broken Links - Images
              - listitem [ref=e53]:
                - link "Upload and Download" [ref=e54] [cursor=pointer]:
                  - /url: upload-download.php
                  - text: Upload and Download
              - listitem [ref=e55]:
                - link "Dynamic Properties" [ref=e56] [cursor=pointer]:
                  - /url: dynamic-prop.php
                  - text: Dynamic Properties
        - heading "Forms" [level=2] [ref=e58]:
          - button "Forms" [ref=e59] [cursor=pointer]: Forms
        - heading "Alerts, Frames & Windows" [level=2] [ref=e61]:
          - button "Alerts, Frames & Windows" [ref=e62] [cursor=pointer]: Alerts, Frames & Windows
        - heading "Widgets" [level=2] [ref=e64]:
          - button "Widgets" [ref=e65] [cursor=pointer]:
            - img [ref=e66]
            - text: Widgets
        - heading "Interaction" [level=2] [ref=e69]:
          - button "Interaction" [ref=e70] [cursor=pointer]: Interaction
      - generic [ref=e72]:
        - heading "Web Tables" [level=1] [ref=e73]
        - generic [ref=e74]:
          - button "Add" [ref=e76] [cursor=pointer]
          - generic [ref=e78]:
            - textbox "Type to Search" [ref=e79]
            - button [ref=e80] [cursor=pointer]
        - table [ref=e82]:
          - rowgroup [ref=e83]:
            - row "First Name Last Name Age Email Salary Department Action" [ref=e84]:
              - columnheader "First Name" [ref=e85]
              - columnheader "Last Name" [ref=e86]
              - columnheader "Age" [ref=e87]
              - columnheader "Email" [ref=e88]
              - columnheader "Salary" [ref=e89]
              - columnheader "Department" [ref=e90]
              - columnheader "Action" [ref=e91]
          - rowgroup [ref=e92]:
            - row "Cierra Vega 39 cierra@example.com 10000 Insurance edit delete" [ref=e93]:
              - cell "Cierra" [ref=e94]
              - cell "Vega" [ref=e95]
              - cell "39" [ref=e96]
              - cell "cierra@example.com" [ref=e97]
              - cell "10000" [ref=e98]
              - cell "Insurance" [ref=e99]
              - cell "edit delete" [ref=e100]:
                - link "edit":
                  - /url: javascript:void(0);
                - link "delete":
                  - /url: javascript:void(0);
            - row "Alden Cantrell 45 alden@example.com 12000 Compliance edit delete" [ref=e101]:
              - cell "Alden" [ref=e102]
              - cell "Cantrell" [ref=e103]
              - cell "45" [ref=e104]
              - cell "alden@example.com" [ref=e105]
              - cell "12000" [ref=e106]
              - cell "Compliance" [ref=e107]
              - cell "edit delete" [ref=e108]:
                - link "edit":
                  - /url: javascript:void(0);
                - link "delete":
                  - /url: javascript:void(0);
            - row "Kierra Gentry 29 kierra@example.com 2000 Legal edit delete" [ref=e109]:
              - cell "Kierra" [ref=e110]
              - cell "Gentry" [ref=e111]
              - cell "29" [ref=e112]
              - cell "kierra@example.com" [ref=e113]
              - cell "2000" [ref=e114]
              - cell "Legal" [ref=e115]
              - cell "edit delete" [ref=e116]:
                - link "edit":
                  - /url: javascript:void(0);
                - link "delete":
                  - /url: javascript:void(0);
            - row "Alden Cantrell 45 alden@example.com 12000 Compliance edit delete" [ref=e117]:
              - cell "Alden" [ref=e118]
              - cell "Cantrell" [ref=e119]
              - cell "45" [ref=e120]
              - cell "alden@example.com" [ref=e121]
              - cell "12000" [ref=e122]
              - cell "Compliance" [ref=e123]
              - cell "edit delete" [ref=e124]:
                - link "edit":
                  - /url: javascript:void(0);
                - link "delete":
                  - /url: javascript:void(0);
            - row "Kierra Gentry 29 kierra@example.com 2000 Legal edit delete" [ref=e125]:
              - cell "Kierra" [ref=e126]
              - cell "Gentry" [ref=e127]
              - cell "29" [ref=e128]
              - cell "kierra@example.com" [ref=e129]
              - cell "2000" [ref=e130]
              - cell "Legal" [ref=e131]
              - cell "edit delete" [ref=e132]:
                - link "edit":
                  - /url: javascript:void(0);
                - link "delete":
                  - /url: javascript:void(0);
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | test('Demonstrating retrieving all table headings', async ({page}) => {
  4  |     await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
  5  |     const tableHeadings = page.locator("//table[@class='table table-striped mt-3']//following::th");
> 6  |     await expect(tableHeadings.count()).toBe(7);
     |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  7  |     for(let i=0; i<await tableHeadings.count(); i++){
  8  |         const tableHeader = await tableHeadings.nth(i).innerText();
  9  |         console.log(tableHeader);
  10 |     }    
  11 | })
```