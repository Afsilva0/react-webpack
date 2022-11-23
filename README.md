# React with Webpack — Project setup steps

## Prerequisites

Here the things you need to make sure before the start,

### 1.Code editor

You need a code editor like Notepad++, Sublime Text or Visual Studio Code.

### 2.Node js

You need Node js 8.x or upper version. So, please check your current node version.
If you don’t know to check that. Please run below command on Terminal/Command Prompt in your computer. Otherwise you can download the latest version on Node js official website. Then install it to your computer.

```
node -v
```

## NPM initialize

Make a “package.json” file, which carry the data of your projects. It’s contain project details, library/plugin details and etc..

```
npm init
```

## Install the Webpack

In this project we need to install below packages.

- ### Webpack

  A free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS and images if the corresponding loaders are included.

- ### Webpack CLI

  This provides a flexible set of commands for developers to increase speed when setting up a custom Webpack project.

```
npm install -D webpack webpack-cli webpack-dev-server
```

## Install the React

For this project, we need below packages.

- ### React
  An open-source front end JavaScript library for building user interfaces based on UI components.
  We are using React 18 here and you can grab the all of concepts and features from their official website.
- ### React-Dom
  This package provides DOM-specific methods.

```
npm install -D react react-dom
```

## Other Libraries

- ### Babel packages
  A plugins to compile to javascript. These packages are help to work your modern javascript code in older browser as well. With the react we need four packages(babel-loader, @babel/core, @babel/preset-env, @babel/preset-react).

```
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
```

- ### HTML Webpack plugin
  A plugin that simplifies creation of HTML files to serve your bundles.

```
npm install -D html-webpack-plugin.
```

## Create files and folders

After installing those packages. We need to make configuration files and source codes files.

- ### webpack.config.js
Now we’re ready to ask webpack to kindly use Babel during bundling to understand any JSX files.

```
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
```

- ### index.html
For basic thing for HTML.

```
<!DOCTYPE html>
<html>

<head>
    <title>React with Webpack</title>
</head>

<body>
    <div id="app"></div>
    <script src="../dist/main.js"></script>
</body>
</html>
```

- ### App.js
Main React component.
  
```
import React from "react";
function App() {
return (
<div className="App">
<h1>Hello World..!</h1>
</div>
 );
}
```
  export default App;
  index.js
  Main js file.

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));
```

## Scripts for build

With the webpack they are facilitate to build script and dev scripts. Before explaning those, please replace below code snippet in to your “package.json” correct place.

```
"scripts": {
    "build": "webpack"
}
```

This need to bundler your project, when you going to deploy project in the production.

```
npm run build
```
