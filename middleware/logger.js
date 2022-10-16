const moment = require("moment");


const logger = (req,res,next) => {
    console.log(`[${moment().format('Y-MMM-DD h:m:s a')}] ${req.method} ${req.protocol}://${req.hostname}${req.originalUrl} `)
    next();
}

module.exports = logger;