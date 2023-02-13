// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license) {  
  if(license == 'None') {
   return ``; 
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
  }
  
}

// function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if(license == 'None') {
    return ``; 
  } else {
    return `https://opensource.org/licenses/${license}`;    
  }
}

// function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if(license == 'None') {
    return ``; 
  } else {
    return `## License
    This product is licensed under ${license}`
  }
}

// function to generate markdown for README
function generateMarkdown(answers) {
  fileName = answers.fileName;
  return `# ${answers.title}
  

  ${renderLicenseBadge(answers.license)}


## Description
${answers.description}



## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions?)

## Installation
${answers.installation}

## Usage
${answers.usage}

${renderLicenseSection(answers.license)}

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions?
Contact me at ${answers.email} or view my projects at ${answers.github}
`;
}

module.exports = generateMarkdown;
