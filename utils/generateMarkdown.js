// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {  
  if(!license) {
   return ``;
  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
   return ``;
  } else {
    return license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
   return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Description
${data.description}

## Table of Contecnts
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributors](#contributors)
[Tests](#tests)
[Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This product is licensed under ${data.license}

## Contributors
${data.contributions}

## Tests
${data.test}

## Contact
Contact me at ${data.email} or view my projects at ${data.github}
`;
}

module.exports = generateMarkdown;
