// TODO: Include packages needed for this application
const fs = require("fs");
const ulti = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const renderLicenseBadge = require("./utils/generateMarkdown")
// const renderLicenseLink = require("./utils/generateMarkdown")
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// const questions = [
//    {type: "input",
//    name: "title",
//    message: "What is the title of your project?"},
//    {type: "input",
//    name: "description",
//    message: "Descriiption of project?"},
//    {type: "input",
//    name: "installation",
//    message: "What is needed for installation?"},
//    {type: "input",
//    name: "usage",
//    message: "instructions for use?"},
//    {type: "input",
//    name: "credits",
//    message: "Please list credits/collaborators"},
//    {type: "checkbox",
//    name: "License",
//    message: "Select the license for your project",
//    choices: ["gpl-3.0", "MIT", "Apache-2.0"]},
//    {type: "input",
//    name: "Features",
//    message: "Does your project have any features?"},    
  
// ];



// TODO: Create a function to write README file
//  async function writeToFile(fileName, data) {
// }


async function writeToFile() {
   try {
     const questions = await inquirer.prompt([
       {type: "input",
    name: "title",
    message: "What is the title of your project?"},
    {type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project. "},
    {type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."},
    {type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. Include screenshots as needed."},
    {type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles."},
    {type: "checkbox",
    name: "license",
    message: "Select the license for your project",
    choices: ["GPL v3.0", "MIT", " Apache-2.0 ", "None",]},
    {type: "input",
    name: "features",
    message: "Does your project have any features?"}, 
    {type: "input",
    name: "tests",
    message: "what tests have been performed? Please provide examples of how to run them."},    
        ]);
 
       const userResponse = generateMarkdown(questions);
      //  const licenseBadge = renderLicenseBadge(questions.license)

          //   let readmeContent = `# ${questions.title}\n${questions.description}\n${questions.installation}
   //   \n${questions.usage}\n${questions.credits}\n${questions.License}\n${questions.usage}\n${questions.Features}`;
 
     fs.writeFileSync('NEWREADME.md', userResponse);
     
    
     
 
     console.log('You did it Bestie!');
   } catch (error) {
     console.error('Error generating NEWREADME:', error);
     
   }
 }
 
//  TODO: Create a function to initialize app
function init() {
   writeToFile() 
   
}
    


// Function call to initialize app
init();
 

