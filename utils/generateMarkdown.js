// function to generate markdown for README
function generateMarkdown(data) {
  let draftmarkdown = `# ${data.title}
  
  ## Description
  ${data.description}  `;

  //generate table of contents and append to the mark up above
  let draftTableOfContents = `
  
  ## Table of Contents
   
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)`;

  //add table of contents to markdown

  draftmarkdown += draftTableOfContents;

  //  Installation section
  if (data.installation !== "") {
    draftmarkdown += `
    
  ## Installation

  *Steps required to install project and how to get the development environment running*
    
    ${data.installation}`;
  }

  // Usage section
  if (data.usage !== "") {
    draftmarkdown += `
   
  ## Usage 
    
  *Instructions and examples for use:*
    
  ${data.usage}`;
  }

  // License section is required
  draftmarkdown += `
  
  ## License
    
  ${data.license}`;

  // Contributing section
  if (data.contributing !== "") {
    draftmarkdown += `
    
  ## Contributing
    
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
  ${data.contributing}`;
  }

  //  Tests section
  if (data.tests !== "") {
    draftmarkdown += `    
    
  ## Tests
    
  *Tests for application and how to run them:*
    
  ${data.tests}`;
  }

  // Questions / About Developer section
  let drafQuestions = `   
   
  ## Questions

  For more information, please visit https://github.com/${data.username}
  
  For any questions regarding this project, please email me at ${data.email} `;

  

  draftmarkdown += drafQuestions;

  // Return markdown
  return draftmarkdown;
}

module.exports = generateMarkdown;
