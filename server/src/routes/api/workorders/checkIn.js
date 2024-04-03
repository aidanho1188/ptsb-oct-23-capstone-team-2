const express = require('express')
const router = express.Router()
const workordersController = require('../../../controllers/workordersController')

router.post('/:workOrderId', workordersController.checkIn)
module.exports = router
