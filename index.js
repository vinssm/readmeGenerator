// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'projectName',
    message: 'What is your project name? (Required)'
}, {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)'
}, {
    type: 'input',
    name: 'installation',
    message: 'How to install the project'
}, {
    type: 'input',
    name: 'usage',
    message: 'How to use the Project?' 
}, {
    type: 'checkbox',
        name: 'license',
        message: 'Please choose the License type?',
        choices: ['None', 'APACHE 2.0', 'GPL v3', 'MIT', 'ISC', 'Microsoft Public License'] 
}, {
    type: 'input',
    name: 'contribute',
    message: 'Contributors',
}, {
    type: 'input',
    name: 'tests',
    message: 'Testing instructions fot the Project?'
}, {
    type: 'input',
    name: 'username',
    message: 'Github username?',
}, {
    type: 'input',
    name: 'email',
    message: 'email address?',
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            throw err;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer => {
        const response = generateMarkdown(answer);
        console.log(answer);
        writeToFile("README.md", response);
    })
};

// Function call to initialize app
init();
