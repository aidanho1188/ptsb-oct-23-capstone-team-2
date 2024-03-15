const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/authController')
const {handleExpiredToken} = require('./handleExpiredToken')

authRouter.get('/login', handleExpiredToken, authController.login)
// authRouter.get('/logout', handleExpiredToken, authController.logout)

module.exports = authRouter
