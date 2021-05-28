const mongoose = require("mongoose");
const Comment = require('./comments')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  meanRating: {
    type: Number,
  },
  desc: {
    type: String,
    required: true,
  },
  review:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
