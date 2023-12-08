const userRoute = require('express').Router()
const { readAll, changeRole, blockUser, disableUser,validateEmail } = require('../controller/usercontroller')
const auth = require('../middleware/auth')
const adminMiddleware = require('../middleware/adminMiddleware') // role validation

// admin access

// to read all non-admin users
userRoute.get(`/all`, auth, adminMiddleware, readAll)

// to change role of non-admin users
userRoute.patch(`/change/role/:id`,auth, adminMiddleware,changeRole)

// to block the user
userRoute.patch(`/block/:id`,auth, adminMiddleware, blockUser)

// disable user
userRoute.patch(`/disable/:id`,auth, adminMiddleware, disableUser)

//validate user email
userRoute.get(`/validate/email`, validateEmail)

module.exports = userRoute