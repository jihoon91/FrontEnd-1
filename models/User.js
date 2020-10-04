const mongoose = require('mongoose'); //Mongoose is a tool for accessing db conveniently. 

const userSchema = mongoose.Schema({ //Make a table using userSchema with mongoose tool.
    name : {                         //Mongoose invokes a table at the DB
        type: String,
        maxlength : 50
    },
    email: {
        type : String,
        trim : true,
        unique : 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp:{
        type: Number
    }
})

const User = mongooose.model('User', userSchema)

module.exports = {User} //Exports User table to module 