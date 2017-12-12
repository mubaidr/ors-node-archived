const express = require('express')

const router = express.Router({ caseSensitive: true })

// TODO: implement picture api

router.get('/', (req, res) => {
  // TODO: get img address from DB, convert and send base64 image data
  res.send('Picture')
})

router.post('/', (req, res) => {
  // TODO: Save base64 image data to img file and store path in DB
  res.send('Picture')
})

module.exports = router
