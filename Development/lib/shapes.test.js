const {Triangle} = require('./modules/shapes');

test('Triangle generates correct SVG string', () => {
    const shape = new Triangle("Blue", "NPG", "White");
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 250,180 50,180" fill="Blue" />
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="White">NPG</text>
</svg>`;
    expect(shape.generateSVG()).toEqual(expectedSVG);
});