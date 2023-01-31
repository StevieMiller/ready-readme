// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license[0]) {
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license[0]) {
    case 'MIT':
      link = `[$(license)](https://opensource.org/licenses/MIT)`;
      break;
    case 'MPL-2.0':
      link = `[$(license)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'WTFPL':
      link = `[$(license)](http://www.wtfpl.net/about/)`;
      break;
    case 'Unlicense':
      link = `[$(license)](http://unlicense.org/)`;
      break;
    case 'ISC':
      link = `[$(license)](https://opensource.org/licenses/ISC)`;
      break;
      
      default:
        link ='';
        break;
  };
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return (`This project uses ${license}`)
  }
return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  - Author: ${data.author}
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;
