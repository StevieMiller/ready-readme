// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title: What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description: Describe your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation: What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage: How is your application meant to be used?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contributing: How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Tests: What tests did you run?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },
  {
    type: 'input',
    name: 'author',
    message: 'Enter your full name'
  },
  {
    type: 'list',
    name: 'license',
    message: 'License: What is the license for your application?',
    choices: ['MIT', 'Mozilla', 'WTFPL', 'Unlicense', 'ISC']
  }];

// init function writes information to README.md file
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    let readmeContent = generateMarkdown(answers)
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) 
      console.log(err)
      else 
        console.log('file written');
    })
  })
}

// Function call to initialize app
init();
