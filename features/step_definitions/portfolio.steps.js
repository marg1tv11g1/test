const assert = require("node:assert/strict");
const { Given, Then, When } = require("@cucumber/cucumber");

async function getVisibleText(page) {
  return page.evaluate(() => document.body.innerText.replace(/\s+/g, " ").trim());
}

async function clickVisibleLinkByText(page, text, selector = "a") {
  const clicked = await page.evaluate(
    ({ selector, text }) => {
      const links = [...document.querySelectorAll(selector)];
      const link = links.find((element) => {
        const isVisible = !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
        return isVisible && element.textContent.trim() === text;
      });

      if (!link) {
        return false;
      }

      link.click();
      return true;
    },
    { selector, text }
  );

  assert.equal(clicked, true, `Could not find visible link with text "${text}".`);
}

Given("I open the portfolio home page", async function () {
  await this.page.goto(this.baseUrl, { waitUntil: "networkidle2" });
  await this.page.waitForSelector(".home-container, .welcome-text", { visible: true });
});

When("I follow the visible link {string}", async function (linkText) {
  await clickVisibleLinkByText(this.page, linkText);
});

When("I use the desktop navigation link {string}", async function (linkText) {
  await clickVisibleLinkByText(this.page, linkText, ".desktop-nav a");
});

Then("the browser title should be {string}", async function (expectedTitle) {
  const actualTitle = await this.page.title();
  assert.equal(actualTitle, expectedTitle);
});

Then("I should see the text {string}", async function (expectedText) {
  await this.page.waitForFunction(
    (text) => document.body.innerText.replace(/\s+/g, " ").includes(text),
    {},
    expectedText
  );
});

Then("the current route should include {string}", async function (route) {
  await this.page.waitForFunction((expectedRoute) => window.location.href.includes(expectedRoute), {}, route);
  assert.match(this.page.url(), new RegExp(route.replace("/", "\\/")));
});

Then("I should see at least {int} project cards", async function (minimumCount) {
  await this.page.waitForSelector(".project-card", { visible: true });
  const projectCount = await this.page.$$eval(".project-card", (cards) => cards.length);
  assert.ok(projectCount >= minimumCount, `Expected at least ${minimumCount} project cards, found ${projectCount}.`);
});

Then("every project card should have an image", async function () {
  const cardsWithoutImages = await this.page.$$eval(".project-card", (cards) =>
    cards.filter((card) => {
      const image = card.querySelector("img.project-image");
      return !image || !image.getAttribute("src") || !image.getAttribute("alt");
    }).length
  );

  assert.equal(cardsWithoutImages, 0, "Every project card should contain an image with src and alt text.");
});

Then("I should see these skills:", async function (dataTable) {
  const bodyText = await getVisibleText(this.page);
  const missingSkills = dataTable.raw().flat().filter((skill) => !bodyText.includes(skill));

  assert.deepEqual(missingSkills, [], `Missing skills: ${missingSkills.join(", ")}`);
});

Then("the footer should include a GitHub link to {string}", async function (expectedUrl) {
  const href = await this.page.$eval(".footer a[href*='github.com']", (link) => link.href);
  assert.equal(href.replace(/\/$/, ""), expectedUrl);
});

Then("the footer should include a CV download link", async function () {
  const href = await this.page.$eval(".footer a.cv-link", (link) => link.href);
  assert.match(href, /CV_Margit_Viigi\.pdf$/);
});
