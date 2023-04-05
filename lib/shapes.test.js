const shape = require('./shape');
describe('Test the color of the shapes', () => {
    test('Test the color of the circle', () => {
        const circle = new shape.Circle();
        circle.setColor('blue');
        expect(circle.render()).toContain('blue');
    });
    test('Test the color of the square', () => {
        const square = new shape.Square();
        square.setColor('red');
        expect(square.render()).toContain('red');
    });
    test('Test the color of the triangle', () => {
        const triangle = new shape.Triangle();
        triangle.setColor('green');
        expect(triangle.render()).toContain('green');
    });
});
describe('Test the shape of the shapes', () => {
    test('Test the shape of the circle', () => {
        const circle = new shape.Circle();
        expect(circle.render()).toContain('circle');
    });
    test('Test the shape of the square', () => {
        const square = new shape.Square();
        expect(square.render()).toContain('rect');
    });
    test('Test the shape of the triangle', () => {
        const triangle = new shape.Triangle();
        expect(triangle.render()).toContain('polygon');
    });
});