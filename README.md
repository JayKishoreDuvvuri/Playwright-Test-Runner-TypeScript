### Playwright Test Runner with TypeScript

Design Page Objects and run Tests with TypeScript

### Run application 

Clone the repository   
   
```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-Test-Runner-TypeScript.git
```
 
Install dependencies

```bash
Install Node modules: npm install
Install default browsers: npx playwright install
``` 

Run test

```bash
npm run test - For all browsers including Android and IOS tests
npm run test:chrome - For tests only on chrome browser
npm run test:mobile - For running tests on android and iOS
``` 

Folder Structure

    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── basePage.ts                     # Base page testing functionality
    │   ├── landingPage.ts                  # Landing page testing functionality
    │   ├── addToCartPage.ts                # Add To Cart page testing functionality
    │   ├── productPage.ts                  # Product page testing functionality
    │
    ├── tests                               # Test suite
    │    ├── addToCart.test.ts              # Automated Test Script
    │    ├── productNames.test.ts           # Automated Test Script
    │    ├── toggleProductColour.test.ts    # Automated Test Script
    │
    │
    ├── pageobjects
    │    ├──selectors.ts                    # HTML and CSS identifier for elements to test
    │
    │
    └─── html-test-report                   # Playwright html Test report for the tests executed



### Playwright Test Report
```bash
Html-test-report : npm run html-report
```


### Github issue on "Safari browser" for Playwright version 1.16 on macOS - (Issue is resolved now with Playwright 1.17.1)
```bash
https://github.com/microsoft/playwright/issues/10108#issuecomment-962635213
https://github.com/microsoft/playwright/issues/9811 
```

### GitLab
```bash
Repo: https://gitlab.com/jaykishore96/playwright-typescript
Pipelines: https://gitlab.com/jaykishore96/playwright-typescript/-/pipelines
```

