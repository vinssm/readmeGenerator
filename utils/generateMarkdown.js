// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != "None"){
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != ""){
    return '\n* [License] (#license)\n';
  }return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "None"){
    return;
  }
}

// console.log(exports, require, module, __dirname, __filename)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  https://github.com/${data.username}/${data.projectName}

  # Description
  ${data.description}

  # Table of Contents 
  * [installation](#installation)
  * [usage](#usage)
  * [License](#license)
  * [contribute](#contributors)
  * [tests](#tests)
  * [username](#username)
  * [email](#email)
  
  # Installation Instructions
  The following necessary dependencies must be installed to run the application properly: ${data.installation}

  # Usage Information
  In order to use this app, ${data.usage}

  # Contributing
  ​Contributors: ${data.contribute}

  # Tests
  The following is needed to run the test: ${data.tests}

  # License
  This project is licensed under the ${data.license} license.
  Licensed under the [MIT license] (license)


  # Questions
  If you have any questions about the repo, open an issue or contact ${data.username} directly at : ${data.email}.
`;
}

module.exports = generateMarkdown;
