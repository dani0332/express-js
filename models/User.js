const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: [20,`name can't be more than 20 characters`],
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxLength: [200,`password can't be more than 200 characters`],
    }
})

module.exports = mongoose.model('User', User)