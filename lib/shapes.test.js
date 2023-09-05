const { createLogo } = require('..lib/shapes.js');

test('createLogo should generate a valid SVG string', () => {
  const userInput = {
    text: 'ABC',
    textColor: 'red',
    shape: 'circle',
    shapeColor: 'blue',
  };

  const svg = createLogo(userInput);

  // You can add assertions here to validate the generated SVG string
  // For example, check if it contains specific SVG elements.
  expect(svg).toContain('<svg');
  expect(svg).toContain('<text');
  expect(svg).toContain('<circle');
  expect(svg).toContain('fill="red"');
  expect(svg).toContain('fill="blue"');
});

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')

// Add more test cases as needed
