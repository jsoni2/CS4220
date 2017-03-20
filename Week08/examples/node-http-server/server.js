const http = require('http')

const app = http.createServer((req, res) => {
    if ( req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain'})
        res.end('Hello World')
    }

    if ( req.url === '/hi') {
        res.writeHead(200, { 'Content-Type': 'text/plain'})
        res.end('Hi World')
    }
})

app.listen(8080, 'localhost')