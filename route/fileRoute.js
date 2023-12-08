const fileRoute = require('express').Router()
const { getAll, getSingle, createFile, updateFile, deleteFile } = require('../controller/fileController')
const auth = require('../middleware/auth')

fileRoute.get(`/all`, auth, getAll)
fileRoute.get(`/single/:id`, auth, getSingle)

fileRoute.post(`/add`, auth, createFile)

fileRoute.patch(`/update/:id`, auth, updateFile)

fileRoute.delete(`/delete/:id`, auth, deleteFile)

module.exports = fileRoute