// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge;
let link;
function renderLicenseBadge(license) {
 
  if (license === 'Apache'){
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  else if (license === 'BSD' ){
    badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  }
  else if (license === 'CC'){
    badge = `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`
  }
  else if (license === 'GPL'){
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    
  }
  else if (license === 'MIT'){
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    
  }
  else if (license === 'none' ){
    console.log('none listed')
    
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'Apache'){
    link = `(https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license ==='BSD' ){
    link = `(https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license ==='CC'){
    link = `(http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  else if (license === 'GPL'){
    link = `(https://www.gnu.org/licenses/gpl-3.0)`
    
  }
  else if (license === 'MIT' ){
    link = `(https://opensource.org/licenses/MIT)`
    
  }
  else if (license === 'none' ){
    console.log('none listed')
    
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license), renderLicenseLink(license);

  `## License 

  ${badge}, ${link}
 `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return renderLicenseSection(data);
  `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseBadge(license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  `
}



module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
}
  

