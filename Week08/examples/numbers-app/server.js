const
    express = require('express'),
    path = require('path'),
    app = express()

const routes = require('./api/routes')

app.use(express.static(path.join(__dirname, '/client')))
app.use(routes())

app.listen(8080, () => {
    console.log('Server Running')
})