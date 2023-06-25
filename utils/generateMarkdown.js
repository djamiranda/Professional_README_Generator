// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
}
switch (license) {
    case "GNU General Public License v3.0":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";  
    case "MIT License":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache License 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    default:
        return "";
}
}
// function to add license to table of contents, if selected
function renderLicenseTable(license) {
  if (!license) {
    return "";
  } else {
    return `
 * [License](#license)
`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
}

switch (license) {
    case "GNU General Public License v3.0":
        return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT License":
        return "https://opensource.org/licenses/MIT";
    case "Apache License 2.0":
        return "https://opensource.org/licenses/Apache-2.0";
    default:
        return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
}

return `## License:
${renderLicenseBadge(license)}

${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README

// added repo link using the github user & project title
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description:
  ${data.description}

  ![screenshot.png from assets/images should be here](./assets/images/screenshot.png)
  
  ## Table of Contents:
  - [Installation](#Installation)

  - [Usage](#Usage)
  ${renderLicenseTable(data.license)}
  - [Contributing](#Contributing)
  
  - [Tests](#Tests)

  - [Questions](#Questions)

  ## Installation:
  ${data.installation}
  
  ## Usage:
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing:
  ${data.contributing}
  
  ## Tests:
  ${data.tests}
  
  ## Questions:
  
  For any additional questions:
  
  Email:
  ${data.email}
  
  GitHub:
  [https://github.com/${data.github}](https://github.com/${data.github})
  
  Repo:
  [https://github.com/${data.github}/${data.title}](https://github.com/${data.github}/${data.title})

`;
}

module.exports = generateMarkdown;
