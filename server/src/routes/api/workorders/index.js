const express = require('express')
const router = express.Router()
const workordersOpen = require('./open')
const onSite = require('./onSite')
const completed = require('./completed')

router.use('/open', workordersOpen)
router.use('/onSite', onSite)
router.use('/completed', completed)

module.exports = router
