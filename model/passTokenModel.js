const mongoose = require('mongoose')
const passTokenSchema = new mongoose.Schema({
        user_email: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true,
            trim: true
        }
}, {
    collection: "passtoken",
    timestamps: true
})

module.exports = mongoose.model("PassToken", passTokenSchema)