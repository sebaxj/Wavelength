const mongoose = require('mongoose')
const constants = require("../constants")

mongoose
    .connect(constants.MONGO_DB_URL, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db