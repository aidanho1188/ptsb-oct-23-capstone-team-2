const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/authController')

authRouter.get('/login', authController.login)
authRouter.get('/logout', authController.logout)

module.exports = authRouter
