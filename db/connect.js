const mongoose = require('mongoose');
const connectionString = `mongodb+srv://root:root@express-task-manager.ffevkwj.mongodb.net/NODE-EXPRESS?retryWrites=true&w=majority`

const connectDB = (url) => {
    return mongoose.connect(connectionString);
}

module.exports = connectDB

