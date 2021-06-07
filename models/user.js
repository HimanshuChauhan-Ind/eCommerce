const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Product = require('./product')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    phn:{
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        }
    },
    role:{
        type: String,
        required: true
    },
    cart:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product" 
        }
    ]
})

userSchema.plugin(passportLocalMongoose)


const User = mongoose.model('User', userSchema)

module.exports = User