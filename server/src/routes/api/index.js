const express = require('express')
const {handleExpiredToken} = require('../handleExpiredToken')
const router = express.Router()
const workordersRoutes = require('./workorders')

router.use('/workorders', workordersRoutes)

module.exports = router
