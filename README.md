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

- ### Webpack dev server
  Use Webpack with a development server that provides live reloading. This should be used for development only.

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

- ### HTML Webpack plugin
- A plugin that simplifies creation of HTML files to serve your bundles.

```
npm install -D html-webpack-plugin.
```

- ### Style loader / CSS loader
  A plugins to load styles.

```
npm install -D style-loader css-loader
```

- ### Babel packages
  A plugins to compile to javascript. These packages are help to work your modern javascript code in older browser as well. With the react we need four packages(babel-loader, @babel/core, @babel/preset-env, @babel/preset-react).

```
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
```

## Create files and folders

After installing those packages. We need to make configuration files and source codes files.

- ### webpack.config.js
  This is a file which contain all the configurations regarding to the plugins with the webpack. So, create this file inside your project folder and copy the below codes to that.

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "/src/index.js", // main js
  output: {
    path: path.resolve(__dirname, "dist"), // output folder
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // base html
    }),
  ],
};
```

After that we need to create project source files. So, I’m creating folder called “src” and create below three files inside of that,

- ### index.html
  For basic thing for HTML.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project - React 18, Webpack 5</title>
</head>
<body>
    <!-- app for render components -->
    <div id="app"></div>
</body>
</html>
```

- ### App.js
  Main React component.
  import React from "react";
  function App() {
  return (
  <div className="App">
  <h1>Hello World..!</h1>
  </div>
  );
  }
  export default App;
  index.js
  Main js file.

```
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Scripts for build and development server

With the webpack they are facilitate to build script and dev scripts. Before explaning those, please replace below code snippet in to your “package.json” correct place.

```
"scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack"
}
```

- ### Run dev server
  It’s help compile your code, when you are in the development.
  npm run dev

```
Run build
```

This need to bundler your project, when you going to deploy project in the production.

```
npm run build
```

- ### Preview on browser
  Now you can start working on your project. So, simply run the “npm run dev” command and preview will be open your browser. If it is not, open below URL in the browser.

```
http://localhost:8080/
```
