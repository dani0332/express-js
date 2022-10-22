const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: [20,`name can't be more than 20 characters`],
    },
    completed: Boolean
})

module.exports = mongoose.model('Task', TaskSchema)