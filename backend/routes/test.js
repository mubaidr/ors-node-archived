const express = require('express')
const router = express.Router()

const Questions = require('./../db/').questions

router.get('/', (req, res, next) => {
  Questions.findAll()
    .then(qs => {
      res.send(qs)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  res.send('Good boy: ' + req.body)
})

module.exports = router
