# Automated Tests - site BuggyCarsRating 

This is a little Test automation framework that validates 14 test scenarios of the main features of the website https://buggy.justtestit.org/. 

It was written in Javascript using a NPM package called TestCafe which is an open source Node JS library for test automation . It works on all popular environments such as Windows, MacOS, and Linux in all browsers and mobile , it is easy to use,install and  doesn't require Webdrivers . For More information refer to  https://testcafe.io/

## Pre-requisites
* Node JS -    <https://nodejs.org/> 
* VS Code (optional) <https://code.visualstudio.com/download>

## Installation
1. Clone the repo from Github in a local folder
2. From VS code, CLI or terminal, navigate to the folder above
3. Run: ```npm install  ```
4. Run: ```npm i -g testcafe  ```

## Framework structure
* **Page objects** : Contains all the Page objects with the selectors and methods. 
(Login, Registration,Profile,Rating)
* **Utils**: Contains the config file with testdata and urls
* **Test** : Contains all the tests written in plan English for all the main features of the website. 
* **Reports**: Contains the Test results printed in HTML with all the scenarios.

## How to run the tests?

1. From CLI/ Terminal, make sure you are in the root of the folder
2. Run : ```npm run tests:chrome```  wait for the browser to start running your tests...
3. Once it finishes,you can see the console with the results or  go to the "Reports" Folder in the solution, and then  open the the file ***tests-site-buggycars\reports*** report generated with results and screenshots of the errors. 

or alternatively run any of the following scripts


**The project has 5 test runners pre-defined in tha package.json file so run the one of your preference**
* **tests:chrome** : Run all tests on chrome browsers running concurrently. 
* **tests:edge**: Runs all the tests one Microsoft Edge browser, once it finishes an HTML report will be generated in the folder reports
* **tests:all** : Run all the tests on Chrome, Edge, Firefox in parallel, once it finishes an HTML report will be generated
* **test:reports**: Run all the tests on Chrome on 2 windows,  once it finishes an HTML report will be generated.
* **createReport**: Run this script once test:reports has finished so you can generate a pretty HTML report with more details.


## License
Esteban Balvin - ebalvin.ruiz@gmail.com