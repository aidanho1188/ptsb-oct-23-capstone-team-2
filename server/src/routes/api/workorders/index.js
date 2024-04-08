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
const checkIn = require('./checkIn')
const checkOut = require('./checkOut')
const create = require('./create')

const router = express.Router()

router.use('/open', handleExpiredToken, workordersOpen)
router.use('/onSite', handleExpiredToken, onSite)
router.use('/incomplete', handleExpiredToken, incomplete)
router.use('/completed', handleExpiredToken, completed)
router.use('/awaitingQuote', handleExpiredToken, awaitingQuote)
router.use('/updateStatus', handleExpiredToken, updateStatus)
// localhost:8080/api/workorders/checkIn/workOrderId
router.use('/checkIn', handleExpiredToken, checkIn)
router.use('/checkOut', handleExpiredToken, checkOut)

// get recent work orders from DB
router.use('/recents', recents)
router.use('/create', create)

// localhost:8080/api/workorders/locations/locationId
router.get('/locations/:locationId', handleExpiredToken, workordersController.getLocation)

// localhost:8080/api/workorders/workOrderId
router.get('/:workOrderId', handleExpiredToken, workordersController.getWorkOrderByID)

module.exports = router
