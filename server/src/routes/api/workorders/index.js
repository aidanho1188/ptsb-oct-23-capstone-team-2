const express = require('express')
const router = express.Router()
const workordersOpen = require('./open')

router.use('/open', workordersOpen)

module.exports = router
