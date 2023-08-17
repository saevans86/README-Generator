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
    return "![License: Apache-2.0 (https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  function renderLicenseSection(licenseSection) {
    if (licenseSection === "None") {
      return "";
    } else if (licenseSection === "GPL v3.0") {
      return `
  
  # ${data.title} ${data.oneLine} 
  Copyright (C) ${data.year} ${data.yourName}
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
      `;
    } else if (licenseSection === "MIT") {
      return `
  Copyright ${data.year} ${data.yourName}
  
  Permission is hereby granted, free of charge, to any person obtaining a 
  copy of this software and associated documentation files (the “Software”),
  to deal in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
  of the Software, and to permit persons to whom the Software is furnished to do so, 
  subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies 
  or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `;
    } else if (licenseSection === "Apache-2.0") {
      return `
  Copyright ${data.year} ${data.yourName}
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      
  http://www.apache.org/licenses/LICENSE-2.0
      
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
      `;
    }
  }

  return `
# Title ${"\n" + data.title}




## Description ${"\n" + data.description}





## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation ${"\n" + data.installation}



## Usage ${"\n" + data.usage}



    

## Credits ${"\n" + data.credits}



## License ${"\n" + licenseBadge}

## License Link ${"\n" + licenseLink}


---
# License section ${"\n" + licenseSection}






## Features ${"\n" + data.features}







## Tests ${"\n" + data.tests}



`;
}

module.exports = generateMarkdown;
