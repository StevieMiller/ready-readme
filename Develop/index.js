// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
  },
  {
    type: 'input',
    name: 'tableofcontents',
    message: 'What is your table of contents?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How is your application installed?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is your application meant to be used?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What is the license for your application?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests did you run?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Questions? GitHub and email',
  }];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
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
