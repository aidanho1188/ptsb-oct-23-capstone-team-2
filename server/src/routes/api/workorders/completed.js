const express = require('express')
const router = express.Router()
const workordersController = require('../../../controllers/workordersController')
// const {handleExpiredToken} = require('../../handleExpiredToken')

router.get('/', workordersController.completed)
module.exports = router
