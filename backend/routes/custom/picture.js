const express = require('express')
const fs = require('fs')

const router = express.Router({ caseSensitive: true })

// TODO: implement picture api

router.get('/', (req, res) => {
  // TODO: get img address from DB, convert and send base64 image data
  // TODO: if no image then return default avatar
  res.send('Picture')
})

router.post('/', (req, res) => {
  const { picture } = req.body

  // TODO: Save base64 image data to img file and store path in DB
  res.sendStatus(200)
})

module.exports = router
