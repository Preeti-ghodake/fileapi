const { StatusCodes } = require('http-status-codes')
const User = require('../model/userModel')


// read all users list
const readAll = async (req,res) => {
    try{
        let users = await User.find({}) //  model.find() => to read all values in db connection
        // fulter the admin
        let fUsers = users.filter(item => item.role !== "admin")

        return res.status(StatusCodes.OK).json({ length: fUsers.length, users: fUsers})
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

// change role
const changeRole = async (req,res) => {
    try{
        let id = req.params.id

        let extUser = await User.findById({ _id: id})

            if(!extUser)
                return res.status(StatusCodes.NOT_FOUND).json({msg: `Requested user id not found`})

            await User.findByIdAndUpdate({ _id: id}, { role: req.body.role})

            res.status(StatusCodes.ACCEPTED).json({ msg: `User role updated successfully`})
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

// blocked the user
const blockUser = async (req,res) => {
    try{
        let id = req.params.id

        let extUser = await User.findById({ _id: id})

            if(!extUser)
                return res.status(StatusCodes.NOT_FOUND).json({msg: `Requested user id not found`})

                if(extUser.isBlocked === true) {
                    await User.findByIdAndUpdate({ _id: id}, { isBlocked: req.body.isBlocked})
                    return res.status(StatusCodes.ACCEPTED).json({ msg: `User unblocked successfully`})
                } else {
                    await User.findByIdAndUpdate({ _id: id}, { isBlocked: req.body.isBlocked})
                    return res.status(StatusCodes.ACCEPTED).json({ msg: `User blocked successfully`})
                }

        } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

// disable the account
const disableUser = async (req,res) => {
    try{
        let id = req.params.id

        let extUser = await User.findById({ _id: id})

            if(!extUser)
                return res.status(StatusCodes.NOT_FOUND).json({msg: `Requested user id not found`})

                if(extUser.isActive === false) {
                    await User.findByIdAndUpdate({ _id: id}, { isBlocked: req.body.isBlocked})
                    return res.status(StatusCodes.ACCEPTED).json({ msg: `User disable successfully`})
                } else {
                    await User.findByIdAndUpdate({ _id: id}, { isBlocked: req.body.isBlocked})
                    return res.status(StatusCodes.ACCEPTED).json({ msg: `User enable successfully`})
                }
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

// validate user email
const validateEmail = async (req,res) => {
    try{
        let { email } = req.body

        let extEmail = await User.findOne({ email })
            if(!extEmail)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: `Requested email id not found`})

        return res.status(StatusCodes.ACCEPTED).json({ msg: `Valid User Email id`})
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message})
    }
}

module.exports = { readAll, changeRole, blockUser,disableUser, validateEmail}
