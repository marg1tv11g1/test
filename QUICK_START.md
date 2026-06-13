# Quick Start

1. Check that Node.js and npm are installed:

```bash
node -v
npm -v
```

If either command says `command not found`, install Node.js first from https://nodejs.org/. The Node.js installer includes npm.

2. Install dependencies:

```bash
npm install
```

3. The tests use installed Google Chrome first. If Chrome is not installed or Puppeteer cannot launch Chrome, reinstall the test browser:

```bash
npm run browsers:install
```

4. Run the Cucumber tests:

```bash
npm test
```

5. Open the generated report:

```text
reports/cucumber-report.html
```

Useful command for debugging:

```bash
npm run test:headed
```
