const jwt = require('jsonwebtoken')

// generate login token
// expressed in seconds or a string describing a time span zeit/ms. Eg: 60, "2 days", "10h", "7d"
const createAuthToken = (user) => {
    // jwt.sign(userid,secret,session time)
    return jwt.sign(user,process.env.ACCESS_SECRET, { expiresIn: '1d'}) // 1day = 24hrs (session)
}

module.exports = createAuthToken