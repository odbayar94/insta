const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const postSchema = new mongoose.Schema({
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'users' },
    caption: { type: String, required: false },
    photoPath: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})
