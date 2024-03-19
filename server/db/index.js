//make connetion to the db from the server

const mongoose = require('mongoose')

mongoose
    .connect('mongodb://mongo:27017/portalData', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db