const moment = require("moment");


const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.hostname}${req.originalUrl}: ${moment().format('Y-MMM-DD h:m:s a')}`)
    next();
}

module.exports = logger;