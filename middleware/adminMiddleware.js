const {StatusCodes} = require('http-status-codes')
const User = require('../model/userModel')

const adminMiddleware = async (req,res,next) => {
    try {
        let id = req.userId

        let single = await User.findById({ _id: id })

        if(single.role !== "admin")
            return res.status(StatusCodes.UNAUTHORIZED).json({msg: `Access Denied for non-admin users`})

        next() // continue passing to next controller

       // res.json({single })
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

module.exports = adminMiddleware