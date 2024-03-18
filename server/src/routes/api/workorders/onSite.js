const express = require('express')
const router = express.Router()
const workordersController = require('../../../controllers/workordersController')
const {handleExpiredToken} = require('../../handleExpiredToken')

router.get('/', handleExpiredToken, workordersController.onSite)
module.exports = router
