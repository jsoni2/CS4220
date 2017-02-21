const
    yargs = require('yargs'),
    quiz = require('./app')

const flags = yargs.usage('$0: usage --run')
    .options('r', {
        alias: 'run',
        describe: 'run the quiz'
    })
    .argv

if (flags.run)
    quiz.run()