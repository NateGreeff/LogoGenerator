//Inquirer questions
questions = [
    {
        name: 'fileName',
        message: 'What would you like the svg file to be named? Do not use <>:"/\\,|?*',
        validate: (value) => { 
            if (value) { return true } else { return 'Please enter a file name to continue' } }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        name: 'shapeColor',
        message: 'What color would you like the shape? Use a color keyword or a hexadecimal value.',
        validate: (value) => { 
            if (value) { return true } else { return 'Please enter a color to continue' } }
    },
    {
        name: 'logoText',
        message: 'Enter up to three characters to be in the logo?',
        validate: (value) => { 
            if (value.length <= 3) { return true } else { return 'You cannot have more than three characters' } }
    },
    {
        name: 'textColor',
        message: 'What color would you like the text in your logo? Use a color keyword or a hexadecimal value.',
        validate: (value) => { 
            if (value) { return true } else { return 'Please enter a color to continue' } }
    },
]

module.exports = questions