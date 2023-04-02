const express = require('express')
const connectDB = require('./db/connect')
const moment = require("moment");
require('dotenv').config()
const logger = require('./middleware/logger')
const authorize = require('./middleware/authenticationMiddleware')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const app = express()

const port = process.env.APP_PORT || 3000

app.use([logger]); // To log every request

app.use(express.json());
app.use(express.urlencoded({extended: false})); //  to parse urlencoded request payload

app.use(express.static('./public'))

app.use('/api/members',require('./routes/api/member'))
app.use('/api/tasks',require('./routes/api/task'))
app.use('/api/authenticate',require('./routes/api/authenticate'))

app.use(notFound)
app.use(errorHandlerMiddleware)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Express app listening at http://localhost:${port}`)
        })
    }catch (error){
        console.log("Error starting app",error);
    }
}

start()
