const fs = require('fs');
const inquirer = require('inquirer');
const { createLogo, generateLogoAndSave } = require('./lib/shapes.js');

const promptUser = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);

  return userInput;
};

const generateLogo = async () => {
  try {
    const userInput = await promptUser();
    generateLogoAndSave(userInput);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

generateLogo();
