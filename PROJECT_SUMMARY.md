# Project Summary

## Selected project

The selected project is Margit Viigi's portfolio:

- Live site: https://margitviigi.github.io/portfolio/
- Repository branch: https://github.com/margitviigi/portfolio/tree/gh-pages

It is a React portfolio site that introduces Margit, lists skills and projects, and provides contact resources.

## Test environment

- Cucumber: Gherkin scenarios and test runner.
- Puppeteer: Browser automation for UI interaction.
- Language: JavaScript with Node.js.

## UI tests

1. Visitor sees the landing page and opens the projects page.
2. Visitor navigates to About Me and sees skills.
3. Visitor opens Contact and checks contact resources.

The test code is organized under `features/`:

- `features/portfolio.feature`: human-readable scenarios.
- `features/support/world.js`: browser setup and shared test context.
- `features/support/hooks.js`: browser lifecycle hooks.
- `features/step_definitions/portfolio.steps.js`: JavaScript step implementations.
