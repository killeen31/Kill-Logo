const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shape');
const filesystem = require('fs');

class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to (3) Characters',
    },
    {
        type: 'input',
        name: 'fontColor',
        message: 'Enter a color',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape-color',
    },
    {
        type: 'choices',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers)
        const {text, shapeColor, shape} = answers;
        let shapeReal
        if (shape  === 'circle'){
            shapeReal = new Circle();
            //  shapeReal.setColor(shapeColor);
        } else if (shape === 'square'){
            shapeReal = new Square();
            // shapeReal.setColor(shapeColor);
        }else if (shape === 'triangle'){
            shapeReal = new Triangle();
            // shapeReal.setColor(shapeColor);
        }
        shapeReal.setColor(shapeColor)
        console.log(shapeReal)
        let userText
        if (answers.text.length>0 && answers.text.length<4) {
            userText = answers.text; 
        } else {
            console.log("Invalid user entry, please enter between 1-3 characters")
            return 
        }
        let fontColor = answers.fontColor
        // let shapeColor = answers.shapeColor

        console.log(userText, fontColor)

        let svg = new Svg()
        svg.setTextElement(userText, fontColor)
        svg.setShapeElement(shapeReal)
        let svgRender = svg.render()

        return writeToFile('logo.svg', svgRender)


        console.log('Successfully created logo.svg');
    } catch (err) {
        console.log(err); 
    }
}
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

init()

