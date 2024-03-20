const express = require('express')
const workordersRouter = express.Router()
const workordersController = require('../../../controllers/workordersController')
const {handleExpiredToken} = require('../../handleExpiredToken')

workordersRouter.get('/', handleExpiredToken, workordersController.incomplete)
module.exports = workordersRouter
