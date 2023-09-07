const fs = require('fs');

//Circle class here

class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        // Create an SVG string based on the chosen shape
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
     <circle cx="100" cy="100" r="90" anchor="middle" fill="${this.shapeColor}" />   

     <text x="100" y="100" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>
   `
    }
}

//Triangle class here

class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <polygon points="160,20 260,200,60,200" anchor="middle" fill="${this.shapeColor}" />
   
     <text x="125" y="90" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>
   `
    }

}

//Square class here

class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        // Create an SVG string based on the chosen shape
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     <rect width="100%" height="100%" fill="${this.shapeColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>
   `
    }


}

function createLogo(userInput) {
    const { text, textColor, shape, shapeColor } = userInput;

    let shapeObject;

    // Create the shape based on the user's choice
    switch (shape.toLowerCase()) {
        case 'circle':
            shapeObject = new Circle(text, textColor, shapeColor); // Assuming a fixed radius for the circle
            break;
        case 'triangle':
            shapeObject = new Triangle(text, textColor, shapeColor); // Assuming fixed base and height for the triangle
            break;
        case 'square':
            shapeObject = new Square(text, textColor, shapeColor); // Assuming a fixed side length for the square
            break;
        default:
            throw new Error('Invalid shape choice.');
    }


    console.log(shapeObject)
    let svg = shapeObject.render()
    console.log(svg)



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
