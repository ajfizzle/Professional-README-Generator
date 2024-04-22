function generateLicenseBadge(license) {
  const licenseBadgeLinks = {
      "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "BSD 2-Clause": "[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD--2--Clause-blue.svg)](https://opensource.org/licenses/BSD-2-Clause)",
      "BSD 3-Clause": "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD--3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  };

  return licenseBadgeLinks[license] || "";
}

function generateMarkdown(data) {
  return `

# ${data.title} by ${data.name}

${generateLicenseBadge(data.license)}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributions}

## Test Instructions

${data.test}

## License

This project is licensed under the ${data.license} license. See the [LICENSE](LICENSE) file for details.

## Questions

For questions about the project, contact [${data.name}](https://github.com/${data.github}) at ${data.email}.
`;
}

module.exports = generateMarkdown;
