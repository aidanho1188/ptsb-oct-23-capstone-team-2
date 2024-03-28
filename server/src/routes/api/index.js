const express = require('express')
const {handleExpiredToken} = require('../handleExpiredToken')
const router = express.Router()
const workordersRoutes = require('./workorders')
const userIdRoutes = require('./userId')

router.use('/workorders', workordersRoutes)
router.use('/userId', handleExpiredToken, userIdRoutes)
module.exports = router
