//Imports
const inquirer = require('inquirer')
const questions = require('./lib/modules/questions')
const writeFile = require('./lib/modules/writeFile')

function init() {
    inquirer.prompt(questions).then((response) => {
        
    })

}

init()