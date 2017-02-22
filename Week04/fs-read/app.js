const fs = require('fs')

module.exports.run = (flags) => {
    if (flags.word)
        wordCount(flags.word)

    if (flags.character)
        characterCount(flags.character)
}

const characterCount = (files) => {
    // TODO
    // implement in lab
}

const wordCount = (files) => {
    const splitOn = ' '
    loopFiles(files, splitOn, (err, result) => {
        console.log(result)
    })
}

const loopFiles = (files, splitOn, callback) => {

    files.forEach((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err)
                console.log(err)

            const wordcount = data.split(splitOn).length
            callback(null, wordcount)
        })
    })
}