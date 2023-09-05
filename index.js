const fs = require('fs');
const inquirer = require('inquirer');
const svgTemplate = require('./svgTemplate'); // You can create an SVG template file separately

const { createLogo } = require('./logoGenerator'); // You'll need to implement this module

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
    const logoSvg = createLogo(userInput); // need to implement this function

    fs.writeFileSync('logo.svg', logoSvg);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

generateLogo();
