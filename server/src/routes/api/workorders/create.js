const express = require('express')
const router = express.Router()
const workordersController = require('../../../controllers/workordersController')

router.post('/', workordersController.create)

module.exports = router
