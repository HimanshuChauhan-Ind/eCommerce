const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    body:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
})

const Comment = mongoose.model("Comment",commentSchema)

module.exports = Comment;