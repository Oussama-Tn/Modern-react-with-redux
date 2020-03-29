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
    ```javascript
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

```javascript
const App = () => {
  return <div> Hi there!</div>;
}

ReactDOM.render(
  <App />,
  document.querySelector("#root"); 
);
  
```


## Lesson 11

* An example of JSX transformed to JS using babel.

## Lesson 12

* JSX
  * Special dialect of JS (its not HTML!)
  * Browsers don't understand JSX code! We write JSX then run tools to turn it into normal JS
  * Very similar in form and function to HTML with couple differences

* There is a convention for writing multiline JSX
  * Add parentheses after `return` and start JSX on new line
  ```javascript
  return (
    <div>
        <label for="name">Enter name</label>
        <input id="name" type="text" />
    </div>
  );
  ```

## Lesson 13 to Lesson 18

* JSX VS HTML
  * Adding custom styling to an element uses different syntax
    * HTML
    
    `<div style="background-color:red;"></div>"`
    * JSX style is an object: replace `kebab-case` keys with `camelCase` and add quotes to values (String)
    
    `<div style={{backgroundColor:'red'}}></div>"`
  * Adding class to an element uses different syntax
    * HTML
    
    `<div class="example"></div>`
    * JSX: we use `className` instead of `class`

    `<div className ="example"></div>`
    
  * JSX can reference JS variables
    * We can print JS variables inside JSX block. 
      * Example1: `buttonText`
      ```javascript
      const buttonText = 'Click me!';
      
      return (
        <div>
            <label for="name">Enter name</label>
            <input id="name" type="text" />
            
            <button> {buttonText} </button>
        </div>
      );
      ```
      * Example2: `getButtonText()`
      ```javascript
      function getButtonText() {
        return 'Click on me!';
      }
      
      const App = () => {
          return (
            <div>
                <label for="name">Enter name</label>
                <input id="name" type="text" />
                
                <button> {getButtonText()} </button>
            </div>
          );
      };
      ```
      * PS: we can print content `{buttonText}` if its value is an `Array` or `String` but when it's an object we must get valid element inside this object 
        ```javascript
        // example: 
        buttonText = {'title': 'something'}
        // valid inside JSX
        {buttonText.title} 
        // the following will throw an error: Objects are not a valid React child...
        {buttonText}
        ```
  * Attribute name `for` will throw a warning => we must use `htmlFor'
     ```javascript
     // Wrong
     const App = () => {
         return (
           <div>
               <label for="name">Enter name</label>
               <input id="name" type="text" />
               
               <button> {getButtonText()} </button>
           </div>
         );
     };
     ```

     ```javascript
     // Right
     const App = () => {
         return (
           <div>
               <label htmlFor="name">Enter name</label>
               <input id="name" type="text" />
               
               <button> {getButtonText()} </button>
           </div>
         );
     };
     ```


## Lesson 25 

* Install faker library

    ```bash
    npm install --save faker
    ```

  * `--save` : will save the library into our project (added to `package.json` file)

* To use faker library:

    ```javascript
    // import the lib
    import faker from 'faker';
    
    // ....
    // Inside JSX
    <img src={faker.image.avatar} />
    
    ```
    * [Faker documentation](https://github.com/marak/Faker.js/)

## Lesson 28

* Component nesting
  * `import` : `import CommentDetail form './CommentDetail';`
  * `export` : `export default CommentDetail;`
  
* If we want to show a component inside another we're gonna treat it as it was a JSX tag `<CommentDetail />`

```javascript
return (
    <div>
        <CommentDetail />
    </div>
);
```

## Lesson 29

* `props` (properties)
  * System for passing data from a **parent** component to a **child** component
  * => Goal is to **customize** or **configure** a child component

* Providing `props` from parent to child
 
   ```jsx harmony
   <CommentDetail author="Oussama" />
   ```
   * `author` : name of the prop
   * `Oussama` : Value of the prop
     * We could pass a var instead of hardcoded string `   <CommentDetail author={someVar} />` 

* Consume `props` in child component
    
    ```javascript
    const CommentDetail = props => {
    
      return (
          <div>
            <span>{props.author}</span>
          </div>
      );
    
    };
    ```


## Lesson 35

* Component reuse (ApprovalCard)

    ```javascript
    const ApprovalCard = (props) => {
      return (
          <div className="ui card">
            <div className="content">
              {props.children}
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Decline</div>
              </div>
            </div>
          </div>
      )
    };
    ```
    * In following code, `CommentDetail` will be nested inside `ApprovalCard`: `{props.children}`
    ```jsx harmony
    <ApprovalCard>
      <CommentDetail
          author="Oussama"
          timeAgo="Today at 6:00AM"
          content="Nice blog post!"
          avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    ```
    * We can also use `ApprovalCard` this way:
    ```jsx harmony
    <ApprovalCard>
        Are you sure you want to do this?
    </ApprovalCard>
    ```
    
    ```jsx harmony
    <ApprovalCard>
        <div> 
            <h4>Warning!</h4>  
            Are you sure you want to do this?
        </div>
    </ApprovalCard>
    ```


## Lesson 41

* Components:
  * **Functional Components**
    * Good for simple components
  * **Class Components**
    * Good for everything else
      * Easier code organization
      * Can use `state` => Easier to handle user input
      * Understands lifecycle events => Easier to do things when the app first starts
    

## Lesson 42

* App Challenges (/2-second-project)
  * Need to get the users physical location
  * Need to determine the current month
  * Need to change text and styling based on location + month

`npx create-react-app 2-second-project`


## Lesson 46

```javascript
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
  );

  return <div>Latitude: </div>
};
```

  * Execution of our application explained in timeline
    - 1 - JS file loaded by browser
    - 2 - App component gets created
    - 3 - We call geolocation service **=> takes time to get results!!!**
    - 4 - App returns JSX, gets rendered to page HTML
    - 5 - ...
    - 6 - We get result of geolocation !
      - => So the problem is that our content is rendered then the result of geolocation come later in time !!! That's why we need **class component** in conjunction with **react's state system** !

## Lesson 47 

* Rules of Class Component
  * Must be a javascript Class (ES2015)
  * Must extend (subclass) `React.Component`
  * Must define `render` method that returns some amount of JSX
  
    ```javascript
    class App extends React.Component {
      render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );
    
        return <div>Latitude: </div>
      }
    }
    ```

## Lesson 48

* Rules of State
  * Only usable with class components `technically can be used with functional components using the 'hooks' system`
  * You will confuse props with state :(
  * `State` is JS object that contains data relevant to a component
  * Updating `state` on a component causes  the component to (almost) instantlt rerender
  * State must be initialized when a component is created
  * State can **ONLY** be updated using the function `setState`

## Lesson 49

* [Adding local state to a class](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)

```javascript
class App extends React.Component {
  constructor () {
    super(props)
  }
  
  render() {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );

    return <div>Latitude: </div>
  }
}
```

* The [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) method is a special method for creating and initializing an object created within a class.
  * A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
* The [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) keyword is used to access and call functions on an object's parent.

## Lesson 50

* IMPORTANT: 
  * We update our stat using `setState()`
  * We only use `this.state = {}` when defining initial state

* In lesson 48 we said:
  * State must be initialized when a component is created
  * State can **ONLY** be updated using the function `setState`

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition(
        position => {
          // we called setState !!! NOT this.state.lat = .... !!!
          this.setState({lat: position.coords.latitude})
        },
        err => console.log(err)
    );

  }

  render() {
    return <div>Latitude: {this.state.lat}</div>
  }
}
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
