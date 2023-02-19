const inquirer = require('inquirer');
const fs = require('fs');
const markdown =  require('./utils/generateMarkdown')

const generateREADME = ({ title, description, install, usage, contribution, github, linkedin }) =>
`# <${title}>

## Description
${description}

## Install
${install}

## Usage
${usage}

## Credits

## License
[https://choosealicense.com/](https://choosealicense.com/)

## Badges

## Features

## How to Contribute

## Contribution
${contribution}
`

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Tell us a little about the project.  Provide a short description explaining the what, why, and how of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who contributed to the project?',
            name: 'contribution',
        },
        {
            type: 'checkbox',
            message: 'Please choose a license type',
            choices: [
                { name: 'html', value: 'html'},
                {name: 'css', value: 'css'},
                {name: 'javascript', value: 'javascript'},
                {name: 'No license', value: 'no'},
        ],         
        }
    ])
    .then((answers) => {
        const readmeContent = generateREADME(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
