const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number
})