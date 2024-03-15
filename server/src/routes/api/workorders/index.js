const express = require('express')
const router = express.Router()
const workordersOpen = require('./open')
const onSite = require('./onSite')

router.use('/open', workordersOpen)
router.use('/onSite', onSite)

module.exports = router
