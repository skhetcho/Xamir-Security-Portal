const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Portal = new Schema(
    {
        feedbackValue: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('portal', Portal)