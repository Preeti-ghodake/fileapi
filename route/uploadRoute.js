const uploadRoute = require('express').Router()
const {uploadFile, removeFile} = require('../controller/uploadController')
const auth = require('../middleware/auth')

// file upload
uploadRoute.post(`/upload`, auth, uploadFile)

// file delete
uploadRoute.post(`/delete/:id`, auth, removeFile)

module.exports = uploadRoute