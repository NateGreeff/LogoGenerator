function generateShape(shape, shapeColor, logoText, textColor) {
    let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`;

    switch (shape) {
        case "Circle":
            svg += `    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />\n`;
            break;
        case "Triangle":
            svg += `    <polygon points="150,20 250,180 50,180" fill="${shapeColor}" />\n`;
            break;
        case "Square":
            svg += `    <rect x="50" y="50" width="200" height="100" fill="${shapeColor}" />\n`;
            break;
        default:
            throw new Error("Invalid shape");
    }

    svg += `    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>\n</svg>`;
    return svg
}

module.exports = generateShape