const { Circle, Triangle, Square } = require("./shapes");
// render() method that returns a string for the corresponding SVG file with the given shape color
test("should give SVG line for triangle", () => {

    const triangle = new Triangle();
    triangle.setText("SVG");
    triangle.setTextColor("blue");
    triangle.setShapeColor("Green");
    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="160,20 260,200,60,200" anchor="middle" fill="Green" /><text x="160" y="130" font-size="40" text-anchor="middle" fill="blue">SVG</text></svg>`)
})

// // Verify the rendered SVG string for Circle

test("should give SVG line for circle", () => {

    const circle = new Circle();
    circle.setText("SVG");
    circle.setTextColor("blue");
    circle.setShapeColor("Green");
    expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" anchor="middle" fill="Green" /><text x="100" y="100" font-size="40" text-anchor="middle" fill="blue">SVG</text></svg>`)
})

// // Verify the rendered SVG string for Square

test("should give SVG line for square", () => {

    const square = new Square();
    square.setText("SVG");
    square.setTextColor("blue");
    square.setShapeColor("Green");
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="40" width="150" height="150" fill="Green" /><text x="150" y="125" font-size="40" text-anchor="middle" fill="blue">SVG</text></svg>`)
})