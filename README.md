# Cucumber + Puppeteer tests for Margit Viigi portfolio

This project contains three JavaScript UI tests for the portfolio site:

https://margitviigi.github.io/portfolio/

The tests use Cucumber for readable scenarios and Puppeteer for browser automation. The implementation is JavaScript/Node.js, not Java.

## Tested functionality

- Home page content and project discovery link.
- Navigation from the home page to `About Me` and visible skill list.
- Navigation to `Contact` and availability of contact/footer resources.

## Install

```bash
npm install
```

## Run tests

```bash
npm test
```

The tests use installed Google Chrome first. If Chrome is not installed, Puppeteer uses its downloaded test browser.

If Puppeteer reports that Chrome cannot launch or a framework file is missing, refresh the browser download:

```bash
npm run browsers:install
```

Run with a visible browser:

```bash
npm run test:headed
```

The default target URL is `https://margitviigi.github.io/portfolio/`. To test another deployment:

```bash
PORTFOLIO_URL=https://example.com/portfolio/ npm test
```

After a run, the HTML report is saved to `reports/cucumber-report.html`.
