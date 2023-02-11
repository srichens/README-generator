// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectname',
        message: 'What is your project name?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?', 
    },
    {
        type: 'input',   
        name: 'processes',
        message: 'What were your processes?', 
    },
    {
        type: 'input',
        name: 'challenges',
        message: 'What challenges did you have?',
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



