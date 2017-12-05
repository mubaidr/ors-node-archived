const express = require('express')
const router = express.Router({ caseSensitive: true })
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const validator = require('validator')

//TODO: implement picture api

router.get('/', (req, res, next) => {
  res.send('Picture')
})

router.post('/api/picture', (req, res, next) => {
  res.send('Picture')
})

module.exports = router
