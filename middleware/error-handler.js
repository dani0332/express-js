const {CustomApiError} = require('../errors/custom-error')

const errorHandlerMiddleware = (err,req,res,next) =>{
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({message: err.message})
    }

    console.log('errorHandlerMiddleware')
    return res.status(500).json({message: 'Something went wrong'})
}

module.exports = errorHandlerMiddleware