const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
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
      }
    ]);
};



// input table of contents
// installation. what are the steps to install your project
// usage
// credits list of collaberators
//  License lets others know what they can and can't do with your 
// project
// badges?
// features
// contributing
// tests go the extra miler and write tests. . The provide an example how to run them



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






