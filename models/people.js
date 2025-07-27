const mongoose = require('mongoose')
const peopleScheme = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        tirm: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    avator: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})