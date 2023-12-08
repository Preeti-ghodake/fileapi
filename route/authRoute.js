const authRoute = require('express').Router()
const { signUp, login, logout, authToken, getUserInfo, generatePassLink, updatePassword } = require('../controller/authController')
const auth = require('../middleware/auth')

authRoute.post(`/signup`, signUp)

authRoute.post(`/signin`, login)

authRoute.get(`/signout`, logout)

authRoute.get(`/signin/token`, authToken) // login token

// current activelogin user
authRoute.get(`/current/user`, auth, getUserInfo)

// forgot password link
authRoute.post(`/forgot/password`, generatePassLink)

// update password
authRoute.patch(`/update/password`, updatePassword)

module.exports = authRoute