# Modern React with Redux [2020 Update]

* Get current node version

`node -v`


* Install the tool that will help us create new React Apps

    * `npm install -g create-react-app`
      * `npm` node package manager, just like composer for php
      * `install` the command to install new packages
      * `-g` install the package globaly so we can use the terminal to create new apps
      * `create-react-app` the package name [reade more](https://github.com/facebook/create-react-app)


* After installing `create-react-app` globaly, we can create new app via the command line:

    * We can use this command:
    `create-react-app modern-react-with-redux`

    * Or this command:
    `npx create-react-app modern-react-with-redux`
      * `npx` comes with npm 5.2+ and higher


* `npm start`
    * This command will start our app which will be available on: `http://localhost:3000`

* **Babel**: is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

## Lesson 9

* `/src/index.js`
  * Import the React and ReactDOM libraries
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    ```
      * `import`: We want to get code from other file or dependency
      * `React`, `ReactDOM`... : The variable we want to assign this import to
      * `from`: We are about to specify the name of the library or file we are importing from
      * `react`, `react-dom`... : The name of the dependency **or** path to the file we are importing
      
* `import` / `require`
  * `import` is used with ES2015 modules
  * `require` is used with CommonJS modules

## Lesson 10

* A component is: `function` or `Class`
  * produces HTML to show to the user (using JSX)
  * and handles feedback from the user (using Event Handlers)

* Example of function component:

```
const App = () => {
  return <div> Hi there!</div>;
}

ReactDOM.render(
  <App />,
  document.querySelector("#root"); 
);
  
```

# Original README.md Content 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
