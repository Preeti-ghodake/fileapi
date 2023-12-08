const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    public_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    user_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "files",
    timestamps: true
})

module.exports = mongoose.model("Files", fileSchema)