const
    yargs = require('yargs'),
    quiz = require('./app')

const flags = yargs.usage('$0: usage --run')
    .options('h', {
        alias: 'help',
        describe: 'displays help'
    })
    .options('r', {
        alias: 'run',
        describe: 'run the quiz'
    })
    .argv


if (flags.help)
    yargs.showHelp()

if (flags.run)
    quiz.run()