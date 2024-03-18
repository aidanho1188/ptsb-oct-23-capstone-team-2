const express = require('express')
const router = express.Router()
const workordersOpen = require('./open')
const onSite = require('./onSite')
const incomplete = require('./incomplete')

router.use('/open', workordersOpen)
router.use('/onSite', onSite)
router.use('/incomplete', incomplete)

module.exports = router
