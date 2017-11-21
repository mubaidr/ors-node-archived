const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('test')
})

router.post('/', (req, res, next) => {
  res.send('test: ' + req.body)
})

module.exports = router
