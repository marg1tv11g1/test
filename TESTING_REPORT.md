# Testing Report

## Project and tested functionality

The tested project is Margit Viigi's portfolio at https://margitviigi.github.io/portfolio/. The site is a React portfolio that presents an introduction, project gallery, skills, contact information, GitHub link, and CV download.

The tests cover three important user flows:

- Opening the portfolio and discovering projects.
- Navigating to the About Me page and checking visible skills.
- Navigating to the Contact page and checking contact/footer resources.

## Test case 1: Visitor sees the landing page and opens the projects page

Purpose: Confirm that the home page loads correctly and the main call-to-action opens the project gallery.

Steps:

1. Open the portfolio home page.
2. Check that the browser title is `Margit Viigi - portfolio`.
3. Check that `WELCOME` is visible.
4. Check that `Explore my work as a full-stack developer to-be.` is visible.
5. Click `Discover my projects`.
6. Confirm that the route includes `/projects`.
7. Confirm that `My Projects` is visible.
8. Confirm that at least 8 project cards are shown.
9. Confirm that every project card has an image.

Expected result: The home page loads, the project discovery link works, and the projects page shows the full project list with images.

## Test case 2: Visitor navigates to About Me and sees skills

Purpose: Confirm that navigation works and the About Me page shows relevant profile and skill information.

Steps:

1. Open the portfolio home page.
2. Click the desktop navigation link `About Me`.
3. Confirm that the route includes `/about`.
4. Confirm that `About Me` is visible.
5. Confirm that `My Skills` is visible.
6. Confirm that `React`, `JavaScript`, `Cypress`, `Docker`, and `WordPress` are visible.

Expected result: The About Me route opens and shows both profile content and a skills list.

## Test case 3: Visitor opens Contact and checks contact resources

Purpose: Confirm that contact information and footer resources are available to visitors.

Steps:

1. Open the portfolio home page.
2. Click the desktop navigation link `Contact`.
3. Confirm that the route includes `/contact`.
4. Confirm that `Contact Me` is visible.
5. Confirm that `Email: margit.viigi@voco.ee` is visible.
6. Confirm that `Phone: +372 5831 6752` is visible.
7. Confirm that the footer contains the GitHub link `https://github.com/margitviigi`.
8. Confirm that the footer contains a CV download link ending in `CV_Margit_Viigi.pdf`.

Expected result: The Contact page opens and users can find email, phone, GitHub, and CV resources.

## Results

Status after implementation: ready to run with `npm test`.

Known issues found while preparing the tests:

- The page is a JavaScript app, so plain HTML fetching only returns the app shell. Puppeteer is required to inspect real rendered content.
- The contact page shows `LinkedIn: TBA`, so no LinkedIn link is tested.
- Some project cards have GitHub set to `#` in the built site, so the tests focus on visible project cards and website links rather than GitHub links for every project.

## Challenges and solutions

Challenge: The official Cucumber tutorial examples often use Java, but this project is JavaScript.

Solution: The test project uses `@cucumber/cucumber` with Node.js step definitions and Puppeteer browser automation.

Challenge: The site is deployed as a React single-page app.

Solution: Tests wait for rendered elements and validate routes through the browser after user clicks.

Challenge: Puppeteer may fail if the downloaded Chrome for Testing cache is incomplete.

Solution: Run `npm run browsers:install` to refresh the browser used by Puppeteer.
