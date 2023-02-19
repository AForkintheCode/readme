// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
inquirer
  .prompt([
{
    type: 'input',
    message: 'What is title of your project?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Tell us a little about the project.',
    name: 'description',
    },
    {
    type: 'input',
    message: 'How do you install it?',
    name: 'install',
    },
    {
    type: 'input',
    message: 'How do you use it?',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Who contributed to the project?',
    name: 'contribution',
    }
])
.then((response) => {
    console.log(response);
    console.log(response.name, response.languages, response.preference)
    fs.writeFile('info.txt', JSON.stringify(response), (err) => 
  err ? console.error(err) : console.log('Success!'))
});


const questions = [];

// TODO: Create a function to write README file
function writeToFile(README, response) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



