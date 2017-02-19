// BUILT IN MODULES /// ASYNC versus SYNC
const
    fs = require('fs'),
    path = require('path')


fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})

const files = ['large.txt', 'medium.txt', 'small.txt']
const async = () => {

}

const sync = () => {

}

// COMMAND LINE ARGS