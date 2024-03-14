const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/authController')
const {handle401} = require('./handle401')

authRouter.get('/login', handle401, authController.login)
authRouter.get('/logout', authController.logout)

module.exports = authRouter
