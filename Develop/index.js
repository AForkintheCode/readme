// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Tell us a little about your project.  Why was this designed?  Who was this intended for?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license from the list',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to your project?',
      },
    {
        type: 'input',
        name: 'contact',
        message: '',       
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Who should we reach out to to respond?',       
      },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `
    #${title}

    ## Description
    ${description}

    ## Table of Contents

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    ${questions}

    `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
