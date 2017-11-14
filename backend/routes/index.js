const express = require('express')
const router = express.Router()

// route segments
const test = require('./test')
const auth = require('./auth')

router.use('/test', test)
router.use('/', auth)

module.exports = router
