// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectname',
        message: 'What is the title of your project?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?', 
    },
    {
        type: 'input',   
        name: 'installation',
        message: 'What are the installation instructions?', 
    },
    {
        type: 'input',   
        name: 'usage',
        message: 'What is the usage information?', 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }                             
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {    
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'))
};

writeToFile();

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            //return generateMarkdown(answers)
            console.log(answers)
        })
      
       
};

// Function call to initialize app

init();



