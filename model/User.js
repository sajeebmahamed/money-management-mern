const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: Number,
    income: Number,
    expense: Number,
    transaction: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Transactions'
        }]
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User