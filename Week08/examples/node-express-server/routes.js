const
    express = require('express'),
    router = express.Router()

module.exports = () => {
    router.get('/', (req, res) => {
        res.send('Hello World')
    })

    router.get('/hi', (req, res) => {
        res.json({ hi: 'world' })
    })

    return router
}