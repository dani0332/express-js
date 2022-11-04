const notFound = (req,res) =>{
    return res.status(404).send('Resource Not Found')
}

module.exports = notFound