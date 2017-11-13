var express = require('express')
var router = express.Router()

// route segments
// var auth = require('./auth')
var test = require('./test')

// router.use('/', auth)
router.use('/test', test)

module.exports = router
