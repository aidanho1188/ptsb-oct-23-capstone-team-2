const express = require('express')
const router = express.Router()
const workordersController = require('../../../controllers/workordersController')

router.patch('/:workOrderId', workordersController.updateWorkOrderStatus)
module.exports = router
