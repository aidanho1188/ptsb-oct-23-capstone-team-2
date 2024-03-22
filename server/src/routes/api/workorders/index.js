const express = require('express')
const {handleExpiredToken} = require('../../handleExpiredToken')
const workordersController = require('../../../controllers/workordersController')
const workordersOpen = require('./open')
const onSite = require('./onSite')
const completed = require('./completed')
const incomplete = require('./incomplete')
const awaitingQuote = require('./awaitingQuote')
const updateStatus = require('./updateStatus')

const router = express.Router()

router.use('/open', workordersOpen)
router.use('/onSite', onSite)
router.use('/incomplete', incomplete)
router.use('/completed', completed)
router.use('/awaitingQuote', awaitingQuote)
router.use('/updateStatus', updateStatus)

module.exports = router
