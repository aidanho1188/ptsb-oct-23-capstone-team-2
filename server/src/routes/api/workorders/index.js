const express = require('express')
const router = express.Router()
const workordersOpen = require('./open')
const onSite = require('./onSite')
const incomplete = require('./incomplete')
const awaitingQuote = require('./awaitingQuote')

router.use('/open', workordersOpen)
router.use('/onSite', onSite)
router.use('/incomplete', incomplete)
router.use('/awaitingQuote', awaitingQuote)


module.exports = router
