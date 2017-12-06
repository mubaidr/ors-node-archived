const express = require('express')
const router = express.Router({ caseSensitive: true })

//TODO: implement picture api

router.get('/', (req, res, next) => {
  res.send('Picture')
})

router.post('/api/picture', (req, res, next) => {
  res.send('Picture')
})

module.exports = router
