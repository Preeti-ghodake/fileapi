const jwt = require('jsonwebtoken')

const createPassToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1hrs' })
}

module.exports = createPassToken