const {Circle, Triangle, Square}=require("./shapes");
// render() method that returns a string for the corresponding SVG file with the given shape color
const triangle = new Triangle();
triangle.setText("SVG");
triangle.setTextColor("blue");
triangle.setShapeColor("Green");
expect(shape.render()).toEqual('<polygon points="160,20 260,200,60,200" anchor="middle" fill="${this.shapeColor}" fill="blue" />')

// Verify the rendered SVG string for Circle

const shape = new Circle("Hello, SVG!", "blue", "yellow");
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="100" cy="100" r="90" fill="blue" />');

// Verify the rendered SVG string for Square

const Square = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<rect x="75" y="40" width="150" height="150" fill="blue" />');