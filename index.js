const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shape');
const filesystem = require('/node_modules/filesystem');





const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to (3) Characters',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Enter a shape',
    },
    {
        type: 'list',
        name: 'pixel-image',
        message: 'Choose a pixel image',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];