# story-telling app



## engines

    node: >= 4 <= 8,
    npm": >= 3 <= 5


## Core Libraries Used
    React@15.4.2
    Redux@3.6.0
    Webpack@2.2.0

## Dependencies

- [axios](https://github.com/mzabriskie/axios): Promise based HTTP client for the browser and node.js
- [bluebird](https://github.com/petkaantonov/bluebird): Full featured Promises/A+ implementation with exceptionally good performance
- [bootstrap](https://github.com/twbs/bootstrap): The most popular front-end framework for developing responsive, mobile first projects on the web.
- [electrode-archetype-react-app](https://github.com/electrode-io/electrode): Electrode NodeJS/React Universal Application Archetype
- [electrode-auto-ssr](https://github.com/electrode-io/electrode): Detect server load and response times to detect server side rendering
- [electrode-confippet](https://github.com/electrode-io/electrode-confippet): Managing NodeJS application configuration
- [electrode-react-webapp](https://github.com/electrode-io/electrode): Hapi plugin that provides a default React web app template
- [electrode-redux-router-engine](https://github.com/electrode-io/electrode): Handle async data for React Server Side Rendering using Redux and Router
- [express](https://github.com/expressjs/express): Fast, unopinionated, minimalist web framework
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [react-dom](https://github.com/facebook/react): React package for working with the DOM.
- [react-router](https://github.com/reacttraining/react-router): A complete routing library for React
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension): Wrappers for Redux DevTools Extension.
- [redux-thunk](https://github.com/gaearon/redux-thunk): Thunk middleware for Redux.
- [sass-loader](https://github.com/webpack-contrib/sass-loader): Sass loader for webpack

## Dev Dependencies

- [electrode-archetype-react-app-dev](https://github.com/electrode-io/electrode): Electrode NodeJS/React Application Archetype (Development)

## Steps for setting up code

##### Setup
Install all the dependencies and dev-dependencies listed in package.json.

     $ npm install


##### Running Dev build
After the app's been created and npm install completed, you can start the app in dev mode:
     
     $ clap dev

### Further Explorations
To view all the development tasks available type 

    $ clap

##### To start in hot mode
    
    $ clap hot
    
##### To build your app for production deployment:

    $ clap build

##### To start your app in production mode:

    $ npm run prod

### Project Structure
Here is a basic top level view of the application's structure:

    config - This directory contains the configuration for your application.
    src/client - Contains your React application
    src/server - Contains your NodeJS server application with SSR support.
    test - Contains unit test for your application
    xclap.js - entry to Electrode's archetype tasks
