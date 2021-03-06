[![Netlify Status](https://api.netlify.com/api/v1/badges/7fdfd6f4-e67a-4460-b69d-98bd88e189f8/deploy-status)](https://app.netlify.com/sites/johan-mouchet/deploys) ![Twitter Follow](https://img.shields.io/twitter/follow/JohanMouchet?style=social)

# [johan-mouchet.com](https://www.johan-mouchet.com/)

Johan Mouchet's portfolio, open sourced on [GitHub](https://github.com/JohanMouchet/johan-mouchet.com).

## About This Website

This website,

- is bootstrapped with Create React App
  - including React, webpack, Babel and more
  - published as an offline-first Progressive Web App
- uses client side routing with [wouter](https://github.com/molefrog/wouter)
- maintains a design system with [Storybook](https://www.johan-mouchet.com/storybook/index.html)
- is unit and snapshot tested with Jest and Enzyme
- uses Sass and CSS post-processing
- is type-checked with Flow
- linted and formated with ESlint stylelint and Prettier,
- enforced by Husky and lint-staged
- is deployed, pre-rendered, with Netlify

## npm Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the Jest test runner in the interactive watch mode.<br>

### `npm run build:all`

Builds the app and Storybook for production to the respective folders: `build` and `storybook-static`.<br>

Individual scripts are also available as `build` and `build:storybook`.

### `flow`

Runs [Flow](https://flow.org/), _a static type checker for JavaScript_.

### `lint:js`

Runs the [ESLint](https://eslint.org/) linter, _a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs_.

### `lint:css`

Runs the [stylelint](https://stylelint.io/) linter, _a mighty, modern linter that helps you avoid errors and enforce conventions in your styles_.

### `format`

Runs ESLint and stylelint with the `--fix` option, as well as [Prettier](https://prettier.io/) with the `--write` option to automatically fix problems.

### `storybook`

Runs [Storybook](https://storybook.js.org/), _an open source tool for developing UI components in isolation_.<br>
Open [http://localhost:9009/](http://localhost:9009/) to view it in the browser.
