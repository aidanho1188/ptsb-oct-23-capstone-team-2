const express = require('express')
const router = express.Router()
const workordersController = require('../../../controllers/workordersController')

router.get('/', workordersController.getRecentsWorkorders)
module.exports = router
