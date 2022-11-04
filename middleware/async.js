const asyncWrapper = (fn) => {
    console.log('asyncWrapper callback')
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
            console.log('asyncWrapper try await')
        } catch (error) {
            next(error)
        }
    }
}


module.exports = asyncWrapper