const express = require('express')
const logger = require('./middleware/logger')
const app = express()

const port = 3000

app.use(logger)

app.use(express.static('./public'))
app.get('/api/members', (req, res) => res.json({code: 200}))
app.get('/api/members/:id', (req, res) => {
    res.send()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
