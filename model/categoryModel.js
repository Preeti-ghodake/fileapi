const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    title: { 
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "category",
    timestamps: true
})

module.exports = mongoose.model("Category", CategorySchema)