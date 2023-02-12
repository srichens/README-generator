//packages needed for this application
// fs to write captured data to a file
// inquirer to get user input with questions and return the answers
// generateMarkdown to link to the other js file and use the function of the same name that was made available by module.exports
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input, aka the questions object from the inquirer package that will be prompted with the init function below
// the validate function ensures the user provides input
// the license question uses the list type, so rather than inputting text, one answer is chosen from the list
// 'None' is included in the list of licenses, so that you can choose not to include a license
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a title');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?', 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }        
    },
    {
        type: 'input',   
        name: 'installation',
        message: 'What are the installation instructions?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter instructions');
                return false;
            }
        }        
    },
    {
        type: 'input',   
        name: 'usage',
        message: 'What is the usage information?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter usage information');
                return false;
            }
        }           
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter guidelines');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a instructions');
                return false;
            }
        }          
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'ISC', 'Zlib', 'None'],
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a value');
                return false;
            }
        }          
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a username');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }          
    }                             
    ];

// function to write README file 
function writeToFile(data) {    
    fs.writeFile('README.md', data, (err) =>
    err ? console.log(err) : console.log('Your README has been created'))
};

// function to initialize app
// prompts the questions object above with inquirer
// then runs the answers through the generateMarkdown function to add answers README text 
// then runs completed README text through the writeTo file function to create a md file with the completed README text
function init() {
    inquirer
        .prompt(questions) 
        .then(answers => {
            return generateMarkdown(answers);                     
        })
        .then(readMeText => {
            return writeToFile(readMeText);            
        })    
        .catch(err => {
            console.log(err)
        })            
};

// Function call to initialize app

init()




