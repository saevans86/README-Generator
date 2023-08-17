// TODO: Include packages needed for this application
const fs = require("fs");
const ulti = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
// TODO: Create a function to write README file
async function writeToFile() {
  try {
    const questions = await inquirer.prompt([
      {
        type: "input",
        name: "yourName",
        message: "Please provide your name for licensing purposes.",
      },
      {
        type: "input",
        name: "year",
        message: "Please enter the current year for licensing purposes.",
      },
      {
        type: "input",
        name: "oneLine",
        message:
          "Please provide one line to give the program name and a brief idea of what it does for licensing purposes",
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message:
          "Provide a short description explaining the what, why, and how of your project. ",
      },
      {
        type: "input",
        name: "installation",
        message:
          "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      },
      {
        type: "input",
        name: "usage",
        message:
          "Provide instructions and examples for use. Include screenshots as needed.",
      },
      {
        type: "input",
        name: "credits",
        message:
          "List your collaborators, if any, with links to their GitHub profiles.",
      },
      {
        type: "list",
        name: "license",
        message: "Select the license for your project",
        choices: ["GPL v3.0", "MIT", "Apache-2.0", "None"],
      },
      {
        type: "input",
        name: "features",
        message: "Does your project have any features?",
      },
      {
        type: "input",
        name: "tests",
        message:
          "what tests have been performed? Please provide examples of how to run them.",
      },
    ]);
    const userResponse = generateMarkdown(questions);
    fs.writeFileSync("NEWREADME.md", userResponse);

    console.log("\x1b[32m", "File generated!");
    console.log("\x1b[33m", "Be sure to change the file name so github recognizes it as a README.md FILE");
  } catch (error) {
    console.error("\x1b[31m", "Error occured. WHAT DID YOU DO?!! >:[", error);
  }
}
//  TODO: Create a function to initialize app
function init() {
  writeToFile();
}
// Function call to initialize app
init();
