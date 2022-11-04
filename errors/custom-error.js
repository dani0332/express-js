class CustomApiError extends Error {
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode
    }
}


const createCustomError = (message,statusCode)  =>{
    console.log('createCustomError')
    return new CustomApiError(message,statusCode)
}

module.exports = {createCustomError,CustomApiError}