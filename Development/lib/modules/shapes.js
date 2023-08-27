function generateShape(shape, shapeColor, logoText, textColor) {
    let svg = `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">\n`;
    switch (shape) {
        case "Circle":
            svg += `    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />\n`;
            svg += `    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>\n</svg>`;
            break;
        case "Triangle":
            svg += `    <polygon points="150,20 250,180 50,180" fill="${shapeColor}" />\n`;
            svg += `    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>\n</svg>`;
            break;
        case "Square":
            svg += `    <rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />\n`;
            svg += `    <text x="150" y="170" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>\n</svg>`;
            break;
    }
    return svg
}
module.exports = generateShape