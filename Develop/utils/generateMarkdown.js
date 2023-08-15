// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const js = require("index.js")
function renderLicenseBadge(license) {
  // let questions = `${questions.license}`;
  if (license === "None") {
    return "";
  } else if (license === "GPL v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache-2.0") {
    return "[![License]: Apache-2.0 (https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}
//[![License]: Apache-2.0 (https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return `
# Title ${data.title}


Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

## Description ${data.description}





## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation ${data.installation}



## Usage ${data.usage}



    

## Credits ${data.credits}



## License ${data.license}


---






## Features ${data.features}





Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Tests ${data.tests}



`;

}

module.exports = generateMarkdown;