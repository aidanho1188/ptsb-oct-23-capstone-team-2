const express = require('express')
const router = express.Router()
const workordersController = require('../../../controllers/workordersController')

router.post('/:workOrderId', workordersController.checkOut)
module.exports = router
