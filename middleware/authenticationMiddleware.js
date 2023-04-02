const jwt = require('jsonwebtoken')
const {UnAuthenticatedError} = require('../errors')

const authenticationMiddleware = (req, res, next) => {
    const {user} = req.query;
    const authHeader = req.headers.authorization
    console.log('authenticationMiddleware');
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnAuthenticatedError('No token provided')
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const {id,name} = decoded
        console.log('decoded',decoded)
        req.user = {id, name}
        next();
    }catch (error){

        console.log(error);
        throw new UnAuthenticatedError('Not Authorize to access this URL')
    }
}

module.exports = authenticationMiddleware