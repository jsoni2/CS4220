const commander = require('commander')

const demo = commander.usage('-d <options>')
    .option('-d, --difficulty <options>', ['easy', 'hard'])
    .parse(process.argv)

if (!demo.difficulty)
    commander.help()
else
    console.log('option entered: ', demo.difficulty)