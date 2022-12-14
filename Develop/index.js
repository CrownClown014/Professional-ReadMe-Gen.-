// TODO: Include packages needed for this application
const generateMarkdown = require ('./utils/generateMarkdown')

const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
   { 
    type: 'input',
    name: 'title',
    message: 'what is the title of you project',
 },
{
    type: 'imput',
    name: 'description',
    message: 'please provide a description of your project',
},
{
    type: 'input',
    name: 'questions',
    message: 'you can reach me at',
},
{
    type: 'list',
    name: 'license',
    message: 'please choose a license',
    choices: ['Apache license 2.0', 'MIT', 'ISC']
}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then((data) => writeFile('README.md', generateMarkdown(data)))
};

// Function call to initialize app
init();
