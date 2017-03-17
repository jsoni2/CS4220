const yargs = require('yargs')

const demo = yargs.usage('Usage: $0 -d')
    .options('difficulty', {
        alias: 'd',
        describe: 'difficulty options',
        choices: ['easy', 'hard']
    })
    .argv

if (!demo.difficulty)
    yargs.showHelp()
else
    console.log('option entered: ', demo.difficulty)