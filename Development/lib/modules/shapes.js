// Define a Shape class that will be inherited by other shape classes
class Shape {
    constructor(shapeColor, logoText, textColor) {
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;
    }

    // Generate the basic SVG code for all shapes
    generateSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`;
    }
}

// Define a Circle class that inherits from Shape
class Circle extends Shape {
    constructor(shapeColor, logoText, textColor) {
        super(shapeColor, logoText, textColor);
    }

    // Generate the SVG code for a circle
    generateSVG() {
        let svg = super.generateSVG();
        svg += `    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />\n`;
        svg += `    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>\n</svg>`;
        return svg;
    }
}

// Define a Triangle class that inherits from Shape
class Triangle extends Shape {
    constructor(shapeColor, logoText, textColor) {
        super(shapeColor, logoText, textColor);
    }

    // Generate the SVG code for a triangle
    generateSVG() {
        let svg = super.generateSVG();
        svg += `    <polygon points="150,20 250,180 50,180" fill="${this.shapeColor}" />\n`;
        svg += `    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>\n</svg>`;
        return svg;
    }
}

// Define a Square class that inherits from Shape
class Square extends Shape {
    constructor(shapeColor, logoText, textColor) {
        super(shapeColor, logoText, textColor);
    }

    // Generate the SVG code for a square
    generateSVG() {
        let svg = super.generateSVG();
        svg += `    <rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}" />\n`;
        svg += `    <text x="130" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>\n</svg>`;
        return svg;
    }
}

// Export the Circle, Triangle, and Square classes for use in other modules
module.exports = {
    Circle,
    Triangle,
    Square
}