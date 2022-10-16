const express = require('express')
const connectDB = require('./db/connect')
const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')
const app = express()

const port = 3000

app.use([authorize,logger]); // To log every request

app.use(express.json());
app.use(express.urlencoded({extended: false})); //  to parse urlencoded request payload

app.use(express.static('./public'))

app.use('/api/members',require('./routes/api/member'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const start = async ()=>{
    try{
        await connectDB();
        app.listen(port, () => {
            console.log(`Express app listening at http://localhost:${port}`)
        })
    }catch (error){
        console.log(error);
    }
}

start()
