// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title
  
${data.title}

## Table of Contents
${data.tableOfContents}
[Title](#Title)
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Screenshots](#Screenshots)
[Credits](#Credits)
[License](#License)
[Badges](#Badges)
[Features](#Features)
[Contributing](#Contributing)
[Tests](#Tests)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Screenshots

${data.screenshots}
![alt text](assets/images/screenshot.png)

## Credits

${data.credits}

## License

${data. license}

## Badges

${data.badges}

## Features

${data.features}

## Contibuting

${data.contributing}

## Tests

${data.tests}

`;
}

module.exports = generateMarkdown;