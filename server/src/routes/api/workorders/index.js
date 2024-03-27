const express = require('express')
const {handleExpiredToken} = require('../../handleExpiredToken')
const workordersController = require('../../../controllers/workordersController')
const workordersOpen = require('./open')
const onSite = require('./onSite')
const completed = require('./completed')
const incomplete = require('./incomplete')
const awaitingQuote = require('./awaitingQuote')
const updateStatus = require('./updateStatus')
const recents = require('./recents')
// const {handleExpiredToken} = require('../../handleExpiredToken')

const router = express.Router()

router.use('/open', handleExpiredToken, workordersOpen)
router.use('/onSite', handleExpiredToken, onSite)
router.use('/incomplete', handleExpiredToken, incomplete)
router.use('/completed', handleExpiredToken, completed)
router.use('/awaitingQuote', handleExpiredToken, awaitingQuote)
router.use('/updateStatus', handleExpiredToken, updateStatus)
router.use('/recents', recents)

// localhost:8080/api/workorders/workOrderId
router.get('/:workOrderId', handleExpiredToken, workordersController.getWorkOrder)

module.exports = router
