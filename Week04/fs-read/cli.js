const
    yargs = require('yargs'),
    app = require('./app')

const flags = yargs.usage('$0: Usage node cli.js')
    .options('h', {
        alias: 'help',
        describe: 'displays help'
    })
    .options('c', {
        alias: 'character',
        describe: 'displays character count',
        array: true
    })
    .options('w', {
        alias: 'word',
        describe: 'displays word count',
        array: true
    })
    .argv

if (flags.help)
    yargs.showHelp()
else
    app.run(flags)