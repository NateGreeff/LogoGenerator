//Inquirer questions
questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        name: 'shapeColor',
        message: 'What color would you like the shape? Use a color keyword or a hexadecimal value.'
    },
    {
        name: 'logoText',
        message: 'What three letters would you like in your logo?',
    },
    {
        name: 'textColor',
        message: 'What color would you like the text in your logo? Use a color keyword or a hexadecimal value.',
    },
]

module.exports = questions