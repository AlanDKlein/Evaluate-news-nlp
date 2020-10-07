# Project Overview
This objective of this project is to give students practice with webpack and other front end build tool services.  The project requires sending text to a Natural Language Processing website via an external Web API provided by that website.  The application will then parse the return and display the results on a web page.  The project requires a separate dev and production environment to be set up and used, and it requires a testing module and service workers to be deployed.

## The goal of this project is to provide practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Tools and services used for the project:
Webserver -- Node.js
Web application framework -- Express
Build Tool -- Webpack 

### Additional Weback Loaders & Plugins installed
--babel/core
--babel/preset-env
--babel-loader
--clean-webpack-plugin
--css-loader
--html-webpack-plugin
--jest
--mini-css-extract-plugin
--node-sass
--optimize-css-assets-webpack-plugin
--sass-loader
--style-loader
--terser-webpack-plugin
--webpack-dev-server
--workbox-webpack-plugin

## The Web API
For this project we are required to use the MeaningCloud website for the NPL processing.  MeaningCloud has several different APIs available.  I have chosen the Sentiment Analysis API, v2.1.

### API Key
The first step in the API process is to sign up for an API Key which is required by MeaningCloud to use when calling their API.  The key cannot be shared with the general public.  To prevent this we are storing the key in an environment variable and have used the Node.js 'dotenv' package to store it.  The 'dotenv' file is listed in the gitignore file so it will not be published to GitHub with the rest of the project files.

### Using the API
The MeaningCloud web service will analyze text that is sent in on the API and return (in this case) the overall sentiment of the statement.  The return object is then parsed and some of the values are displayed to the user, along with the entire text block that was sent on the request.  On my index.html page I have a default statement in the input area, and I have copied some text from two famous historical speeches which the user can copy/paste into the form for analysis.  In addition the input entry will accept any freeform text the user cares to enter.  Whatever text is entered will be analyzed by the Natural Language Processor of the MeaningCloud website.

## Testing
The project requires that the Node.js package 'Jest' be used to unit test the application.  Jest tests are located in the __test__ directory.

## Service Workers
The project requires that service workers are deployed in Webpack.  This will ensure that the application runs even when the server is offline.  These service workers have been deployed in this project and it has been tested and is working.

