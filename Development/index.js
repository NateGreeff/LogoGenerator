//Imports
const inquirer = require('inquirer')
const questions = require('./lib/modules/questions')
const writeFile = require('./lib/modules/writeFile')
const shapes = require('./lib/modules/shapes')

//Functions
function init() {
    inquirer.prompt(questions).then((response) => {
        let ShapeConstructor = shapes[response.shape];
        let svg = new ShapeConstructor(response.shapeColor, response.logoText, response.textColor).generateSVG()
        writeFile(`${response.fileName}.svg`, svg)
    })

}

//Initialize
init()