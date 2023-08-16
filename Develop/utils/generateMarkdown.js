// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(licenseBadge) {
 
  if (licenseBadge === "None") {
    return " ";
  } else if (licenseBadge === "GPL v3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (licenseBadge === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (licenseBadge === "Apache-2.0") {
    return "![License]: Apache-2.0 (https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
}

//[![License]: Apache-2.0 (https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {  

  //need to build in way to specify that if no badge is found.. we work from that

  if (licenseLink === "None") {
  return " ";
} else if (licenseLink === "GPL v3.0") {
  return "[license: GPL v3](https://opensource.org/licenses/Apache-2.0)";
} else if (licenseLink === "MIT") {
  return "[license: MIT](https://opensource.org/licenses/MIT)";
} else if (licenseLink === "Apache-2.0") {
  return "[license: Apache-2.0] (https://www.gnu.org/licenses/gpl-3.0)";
}
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license)


 
  return `
# Title ${"\n"+data.title}




## Description ${"\n"+data.description}





## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation ${"\n"+data.installation}



## Usage ${"\n"+data.usage}



    

## Credits ${"\n"+data.credits}



## License ${"\n"+licenseBadge}

## License Link ${"\n" + licenseLink}


---






## Features ${"\n"+data.features}







## Tests ${"\n"+data.tests}



`;

}

module.exports = generateMarkdown;