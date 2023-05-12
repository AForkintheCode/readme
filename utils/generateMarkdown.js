
function renderLicenseBadge(license) {
     
  if (license === 'Apache'){
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  else if (license === 'BSD' ){
    badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  }
  else if (license === 'CC'){
    badge = `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`
  }
  else if (license === 'GPL'){
    badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    
  }
  else if (license === 'MIT'){
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    
  }
  else if (license === 'none' ){
    badge = ''
    console.log('none listed')
    
  }  
  return badge;
}

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
    link = ''
    console.log('none listed')    
  }
  return link;
}


function generateMarkdown(data){
  let license = data.license;
  let link = ''; 
  let badge = '';


  function renderLicenseBadge(license) {
     
  if (license === 'Apache'){
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  else if (license === 'BSD' ){
    badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  }
  else if (license === 'CC'){
    badge = `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`
  }
  else if (license === 'GPL'){
    badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    
  }
  else if (license === 'MIT'){
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    
  }
  else if (license === 'none' ){
    badge = ''
    console.log('none listed')
    
  }  
  return badge;
}


renderLicenseBadge(license);
renderLicenseLink(license);

  let section =  
  `## License 
   
  ${badge}, ${link}
  `;

   


let genreadme = 
 `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  [Installation](#installation)\  
  [Usage](#usage)\  
  [Licenses](#licenses)\  
  [Contributing](#contributing)\  
  [Tests](#tests)\  
  [Questions](#questions)\  
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
 
  ${section}
   
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  [${data.github}](http://www.github.com/${data.github})
  Please contact me @ ${data.email} if you have any further questions.`;

return genreadme;

}




module.exports = {
  generateMarkdown,
}
