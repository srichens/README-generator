// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
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
        name: 'description',
        message: 'What is the project description?', 
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
        name: 'installation',
        message: 'What are the installation instructions?',
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
        name: 'usage',
        message: 'What is the usage information?',
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
        name: 'contribution',
        message: 'What are the contribution guidelines?',
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
        name: 'test',
        message: 'What are the test instructions?',
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
                console.log('Please enter a value');
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
                console.log('Please enter a value');
                return false;
            }
        }          
    }                             
    ];

// TODO: Create a function to write README file
function writeToFile(data) {    
    fs.writeFile('README.md', data, (err) =>
    err ? console.log(err) : console.log('Success!'))
};


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions) 
        .then(answers => {
            return generateMarkdown(answers);            
        })
        .then(data => {
            return writeToFile(data);
        })
        .catch(err => {
            console.log(err)
        })            
};

// Function call to initialize app

init()




