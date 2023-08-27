class Shape {
    constructor(shapeColor, logoText, textColor) {
        this.shapeColor = shapeColor;
        this.logoText = logoText;
        this.textColor = textColor;
    }

    generateSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`;
    }
}

class Circle extends Shape {
    constructor(shapeColor, logoText, textColor) {
        super(shapeColor, logoText, textColor);
    }

    generateSVG() {
        let svg = super.generateSVG();
        svg += `    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />\n`;
        svg += `    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>\n</svg>`;
        return svg;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, logoText, textColor) {
        super(shapeColor, logoText, textColor);
    }

    generateSVG() {
        let svg = super.generateSVG();
        svg += `    <polygon points="150,20 250,180 50,180" fill="${this.shapeColor}" />\n`;
        svg += `    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>\n</svg>`;
        return svg;
    }
}

class Square extends Shape {
    constructor(shapeColor, logoText, textColor) {
        super(shapeColor, logoText, textColor);
    }

    generateSVG() {
        let svg = super.generateSVG();
        svg += `    <rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}" />\n`;
        svg += `    <text x="130" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>\n</svg>`;
        return svg;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
}