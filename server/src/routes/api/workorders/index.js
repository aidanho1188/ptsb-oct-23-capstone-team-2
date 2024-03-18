const express = require('express')
const router = express.Router()
const workordersOpen = require('./open')
const onSite = require('./onSite')
const awaitingQuote = require('./awaitingQuote')

router.use('/open', workordersOpen)
router.use('/onSite', onSite)
router.use('/awaitingQuote', awaitingQuote)

module.exports = router
