// Function to render the license badge based on the license type
function renderLicenseBadge(license) {
    if (license !== 'no license') {
      return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return '';
    }
  }
  
  // Function to render the license link
  function renderLicenseLink(license) {
    if (license !== 'no license') {
      return `
  ## License
  
  The application is covered under the following license:
  
  ${renderLicenseBadge(license)}
  `;
    } else {
      return '';
    }
  }
  
  // Function to render the license section of README
  function renderLicenseSection(license) {
    if (license !== 'no license') {
      return `* [License](#license)`;
    } else {
      return '';
    }
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Suggestions](#suggestions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Test Instructions
  ${data.test}
  
  ## License
  ${(data.license)}
  
  ## Suggestions
  ${(data.suggestions)}
  
  For questions about the project, contact [${data.name}](https://github.com/${data.github}) at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;
  