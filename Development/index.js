//Imports
const inquirer = require('inquirer')
const questions = require('./lib/modules/questions')
const writeFile = require('./lib/modules/writeFile')
const generateShape = require('./lib/modules/shapes')

function init() {
    inquirer.prompt(questions).then((response) => {
        let svg = generateShape(response.shape, response.shapeColor, response.logoText, response.textColor);
        writeFile('logo.svg', svg)
    })

}

init();