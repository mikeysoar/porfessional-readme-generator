const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? ',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    // Input description
    {
      type: 'editor',
      name: 'description',
      message: '',
      validate(text) {
      if(text.split('\n').length < 3) {
        return 'Must be at least three lines.';
      }

      return true;
    },
  }, 

  // input table of contents
{
  type: 'confirm',
  name: 'tableOfContents',
  message: 'Would you like to enter a table of contents?',
  default: true
},
  // input table of contents
{
  type: 'input',
  name: 'about',
  message: 'Provide a table content:',
      when: ({ tableOfContents }) => {
        if (tableOfContents) {
        return true;
        } else {
        return false;
        }
      }
},

{
  type: 'input',
  name: 'installation',
  message: 'What are the steps required to install and run? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please explain how to install and run!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'usage',
  message: 'How to use this project? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter instuctions for use and examples!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'screenshots',
  message: 'Screenshots? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter any screenshots!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'credits',
  message: 'Who ar the collaborators? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter any collaborators!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'license',
  message: 'What licenses does your project have? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter any applicable licenses!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'badges',
  message: 'Do you have any badges? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter a Badge!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'features',
  message: 'What features does this project have? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter any features!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'contributing',
  message: 'Guidelines, how to contribute to this project, if allowed? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter all Contributors!');
      return false;
    }
  }
},

{
  type: 'input',
  name: 'tests',
  message: 'Are there tests that can be performed? ',
  validate: titleInput => {
    if (titleInput) {
      return true;
    } else {
      console.log('Please enter a test!');
      return false;
    }
  }
},

  ]);
};

promptUser()
  .then( (userInput) => {
    console.log(userInput);
    const markDownText = generateMarkdown(userInput)
  console.log(markDownText)
  fs.writeFile("Readme.md", markDownText, (err) => {
    if (err) throw err
  })
  })
 
  .catch(err => {
    console.log(err);
  });






