// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown.js');

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
        choices: ['Apache', 'BSD', 'CC', 'GPL', 'MIT', 'none'],
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
    const readme = utils.generateMarkdown(data)
    fs.writeFile('README.md', readme, (err) =>
  err ? console.log(err) : console.log('Successfully created index.html!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((data) => {
     const readme = utils.generateMarkdown(data)
     writeToFile('README.md', readme)

  }
  
  
  )
}

// Function call to initialize app
init();
