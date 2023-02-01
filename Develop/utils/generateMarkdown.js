// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      badge = `![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'MPL-2.0':
      badge = `![license: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
      break;
    case 'WTFPL':
      badge = `![license: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`;
      break;
    case 'Unlicense':
      badge =`![license: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
      break;
    case 'ISC':
      badge = '![license: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      break;         
  };
  return badge;
}

// Function that returns a license link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      link = `[Click here to view license](https://opensource.org/licenses/MIT)`;
      break;
    case 'MPL-2.0':
      link = `[Click here to view license](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'WTFPL':
      link = `[Click here to view license](http://www.wtfpl.net/about/)`;
      break;
    case 'Unlicense':
      link = `[Click here to view license](http://unlicense.org/)`;
      break;
    case 'ISC':
      link = `[Click here to view license](https://opensource.org/licenses/ISC)`;
      break;
      
      default:
        link ='';
        break;
  };
  return link;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return (`This project uses ${license}`)
  }
return '';
};

// Function to generate markdown for README
function generateMarkdown(data) {
  console.log(data, 'data from generate markdown');
  return `# Title 
  ${data.title}

  ## Table of Contents 
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}


  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  - Author: ${data.author}
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}`;
}

// Exports data to collect input from the index.js file
module.exports = generateMarkdown;

