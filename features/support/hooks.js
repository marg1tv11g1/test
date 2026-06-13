const { After, Before } = require("@cucumber/cucumber");
require("./world");

Before(async function () {
  await this.openBrowser();
});

After(async function () {
  await this.closeBrowser();
});
