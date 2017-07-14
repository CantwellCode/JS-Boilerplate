# Web-Boilerplate

Starter kit for javascript projects

`.editorconfig` is used for ensuring common file formats (most editors require a plugin to use this)

## NPM Scripts

`npm start`
- runs the NSP security check
- opens the express web app with hot reloads
- tells lint to run on every save
- tells mocha to run tests on every save
- runs the mock api

`npm run share`
- starts the express web app
- enables localtunnel to share localhost to the network

`npm run build`
- clears out the `dist` directory
- runs tests and linting
- runs the webpack bundling process
- starts the mock api and local server using the distribution code (solely for ensuring the production build works on local machine)

## NPM Packages

### Fetch

_Used for es6 fetch style http requests_

### Express

_Used for serving the web app_

### Babel

_Used for transpiling new ES6 code features_

Configured by `.babelrc`

### Webpack

_Used for minifying and bundling production builds_

Configured by `webpack.config.dev.js` and `webpack.config.prod.js` for development and production builds

### ESLint

_Used for linting (making sure code standards are followed)_

Configured by `.eslintrc.json`

### Mock, Chai, JSDom, Nock

_Used for testing (test-driven-development (TDD) is good!)_

`.spec.js` files are used for testing

### JSON-Server, JSON-Schema-Faker, Faker

_Used for creating a mock api so you don't have to worry about the real api yet_

`mockDataSchema.js` defines the schema for the fake data that will be served by the mock api

`generateMockData.js` uses the schema to generate the `db.json` file that acts as your mock database

### NSP

_Used for making sure all of the npm packages are secure_

### Chalk

_Used for outputting color to the console_

### Localtunnel

_Used for exposing your localhost to the network_
