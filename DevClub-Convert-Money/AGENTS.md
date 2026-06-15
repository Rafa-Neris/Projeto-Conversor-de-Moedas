# AI Agent Guide for DevClub-Convert-Money

## Project overview
- Simple static currency converter web app built with HTML, CSS, and vanilla JavaScript.
- Files:
  - `indexMoney.html` — main page and UI structure
  - `style.css` — visual styling
  - `script moedas.js` — conversion logic and DOM behavior
- UI text is in Portuguese and the page is designed to run by opening `indexMoney.html` in a browser.

## Key conventions
- Keep the existing file names and root-level static assets intact.
- The app uses DOM queries and direct event listeners rather than frameworks or build tooling.
- The JavaScript file name includes a space (`script moedas.js`); avoid renaming it unless absolutely necessary.
- Currency formatting should use `Intl.NumberFormat` for Brazilian Real, US Dollar, and Euro when appropriate.

## What to look for
- Fix current JavaScript bugs in `script moedas.js`:
  - invalid identifier usage like `currency-select`
  - wrong query for converted output
  - no actual currency selection handling
- Preserve the Portuguese labels and currency options shown in the UI.
- Keep the app static; do not introduce Node-based build tooling or dependencies for this project.

## How to work with this project
- Open `indexMoney.html` directly in the browser to test UI and conversion behavior.
- If adding features, stay consistent with the existing HTML/CSS structure and use plain JavaScript.
- Prefer minimal, incremental changes: fix logic, improve formatting, and keep the visual design as-is unless a correction is required.

## Notes for future customization
- No existing `README.md`, build scripts, or test framework files currently present.
- This repository is a small learning/demo project, so focus on clarity and correctness rather than complex architecture.
