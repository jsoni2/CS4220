const
    fs = require('fs'),
    path = require('path')


fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err)
        console.log(err)

    console.log(data)
})

const files = ['large.txt', 'medium.txt', 'small.txt']
const async = () => {
    files.forEach((file) => {
        const fullPath = path.resolve('fs-read', file)
        fs.readFile(fullPath, 'utf8', (err, data) => {
            if (err)
                console.log(err)

            const wordcount = data.split(' ').length
            console.log(file, wordcount)
        })
    })
}
async()

const sync = () => {
    files.forEach((file) => {
        const
            fullPath = path.resolve('fs-read', file),
            data = fs.readFileSync(fullPath, 'utf8'),
            wordcount = data.split(' ').length
            console.log(file, wordcount)
    })
}
sync()

// COMMAND LINE ARGS
// process.argv property returns an array containing the command line
// arguments passed when the Node.js process is run.
// The first element will be the Node.js executable path.
// The second element will be the path to the .js file being executed.
// The remaining elements will be any additional command line arguments.
const args = process.argv
console.log(args)

// First two arguments spliced out
args.splice(0, 2)
console.log(args)
















