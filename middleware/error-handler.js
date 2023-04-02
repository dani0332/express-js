const {CustomApiError} = require('../errors')
const {StatusCodes} = require('http-status-codes');
const errorHandlerMiddleware = (err,req,res,next) =>{

    console.log('errorHandlerMiddleware',err instanceof CustomApiError);
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({message: err.message})
    }

    console.log('errorHandlerMiddleware')
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong 2'})
}

module.exports = errorHandlerMiddleware