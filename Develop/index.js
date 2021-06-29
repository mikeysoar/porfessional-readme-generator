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
  type: 'editor',
  name: 'tableOfContents',
  message: 'Enter a table of contents!',
  // choices: ['apple', 'blueberry', 'orange' ]
},

{
  type: 'input',
  name: 'installation',
  message: 'What are the steps required to install and run? ',
  validate: installInput => {
    if (installInput) {
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
  validate: usageInput => {
    if (usageInput) {
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
  validate: screenshotInput => {
    if (screenshotInput) {
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
  validate: creditsInput => {
    if (creditsInput) {
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
  validate: licenseInput => {
    if (licenseInput) {
      return true;
    } else {
      console.log('Please enter any applicable licenses!');
      return false;
    }
  }
},

{
  type: 'editor',
  name: 'badges',
  message: 'Do you have any badges? ',
  validate: badgeInput => {
    if (badgeInput) {
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
  validate: featureInput => {
    if (featureInput) {
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
  validate: contributingInput => {
    if (contributingInput) {
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
  validate: testInput => {
    if (testInput) {
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






