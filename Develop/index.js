// TODO: Include packages needed for this application
const fs = require("fs");
const ulti = require("util");
const inq = require("inquirer");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
   {type: "input",
   name: "title",
   message: "What is the title of your project?"},
   {type: "input",
   name: "description",
   message: "Descriiption of project?"},
   {type: "input",
   name: "installation",
   message: "What is needed for installation?"},
   {type: "input",
   name: "usage",
   message: "instructions for use?"},
   {type: "input",
   name: "credits",
   message: "Please list credits/collaborators"},
   {type: "checkbox",
   name: "License",
   message: "Select the license for your project",
   choices: ["gpl-3.0", "MIT", "Apache-2.0"]},
   {type: "input",
   name: "Features",
   message: "Does your project have any features?"},    
  
];
console.log(questions)
// const prompt = require("prompt-sync")();

// TODO: Create a function to write README file
 async function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();


