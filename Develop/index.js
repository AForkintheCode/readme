const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown.js');


//questions for readme app
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
        name: 'tests',
        message: 'Enter additional info here.',       
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',       
        default: 'AForkintheCode',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',       
      },
    
];

function writeToFile(fileName, data) {
  const readme = utils.generateMarkdown(data)
  fs.writeFile('README.md', readme, (err) =>
err ? console.log(err) : console.log('Successfully created README.md'))
}


//start program
function init() {
    inquirer
  .prompt(questions)  
  .then((data) => {        
    writeToFile('README.md', data)


  })}

  init();