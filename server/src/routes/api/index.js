const express = require('express')
const router = express.Router()
const workordersRoutes = require('./workorders')

router.use('/workorders', workordersRoutes)

module.exports = router
