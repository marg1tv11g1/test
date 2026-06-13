const { setDefaultTimeout, setWorldConstructor, World } = require("@cucumber/cucumber");
const fs = require("node:fs");
const puppeteer = require("puppeteer");

setDefaultTimeout(30000);

function getLocalChromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium"
  ].filter(Boolean);

  return candidates.find((path) => fs.existsSync(path));
}

class PortfolioWorld extends World {
  constructor(options) {
    super(options);
    this.baseUrl = process.env.PORTFOLIO_URL || "https://margitviigi.github.io/portfolio/";
    this.browser = null;
    this.page = null;
  }

  async openBrowser() {
    if (this.browser) {
      return;
    }

    const localChromePath = getLocalChromePath();

    this.browser = await puppeteer.launch({
      headless: process.env.HEADLESS !== "false",
      executablePath: localChromePath,
      defaultViewport: {
        width: 1366,
        height: 900
      },
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }

    this.browser = null;
    this.page = null;
  }
}

setWorldConstructor(PortfolioWorld);

module.exports = PortfolioWorld;
