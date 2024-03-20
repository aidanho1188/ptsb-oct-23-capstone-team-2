const express = require('express')
const workordersController = require('../../../controllers/workordersController')
// const {handleExpiredToken} = require('../../handleExpiredToken')

const workordersRouter = express.Router()

workordersRouter.get('/', workordersController.awaitingQuote)
module.exports = workordersRouter
