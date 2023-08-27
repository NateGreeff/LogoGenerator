const fs = require('fs')

//Function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

module.exports = {
    writeToFile,
}