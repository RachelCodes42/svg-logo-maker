const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

function createLogo(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  let shapeObject;

  // Create the shape based on the user's choice
  switch (shape.toLowerCase()) {
    case 'circle':
      shapeObject = new Circle(50); // Assuming a fixed radius for the circle
      break;
    case 'triangle':
      shapeObject = new Triangle(100, 100); // Assuming fixed base and height for the triangle
      break;
    case 'square':
      shapeObject = new Square(100); // Assuming a fixed side length for the square
      break;
    default:
      throw new Error('Invalid shape choice.');
  }

  // Create an SVG string based on the chosen shape
  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${shapeColor}" />
    <text x="10" y="30" fill="${textColor}">${text}</text>
  </svg>`;

  return svg;
}

function generateLogoAndSave(userInput) {
  try {
    const logoSvg = createLogo(userInput);
    fs.writeFileSync('logo.svg', logoSvg);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

module.exports = { createLogo, generateLogoAndSave };
