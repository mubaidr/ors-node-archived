const express = require('express')

const router = express.Router({ caseSensitive: true })

// TODO: implement picture api

router.get('/', (req, res) => {
  res.send('Picture')
})

router.post('/', (req, res) => {
  res.send('Picture')
})

module.exports = router
