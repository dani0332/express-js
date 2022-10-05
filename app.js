const express = require('express')
const logger = require('./middleware/logger')
const app = express()

const port = 3000

app.use(logger)

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('./public'))

app.use('/api/members',require('./routes/api/member'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
