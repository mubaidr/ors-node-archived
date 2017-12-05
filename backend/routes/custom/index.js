const express = require('express')
const router = express.Router({ caseSensitive: true })

const home = require('./home')
const account = require('./account')
const picture = require('./picture')

router.use('/api/home', home)
router.use('/api/account', account)
router.use('/api/picture', picture)

module.exports = router
