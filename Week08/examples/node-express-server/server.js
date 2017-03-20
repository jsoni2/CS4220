const
    express = require('express'),
    app = express()

const routes = require('./routes')
app.use(routes())

app.listen(8080, () => {
    console.log('Server is running')
})