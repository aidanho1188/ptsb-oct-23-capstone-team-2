const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/authController')
const {handleExpiredToken} = require('./handleExpiredToken')

authRouter.post('/login', handleExpiredToken, authController.login)
// authRouter.get('/logout', handleExpiredToken, authController.logout)
authRouter.get('/getAccess', authController.getAccess)
authRouter.post('/register', handleExpiredToken, authController.register)
module.exports = authRouter
