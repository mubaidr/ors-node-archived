const express = require('express')
const fs = require('fs')
const path = require('path')
const Jimp = require('jimp')

const router = express.Router({ caseSensitive: true })
const defaultPictureName = 'user_default.png'
const imageExtension = 'jpg'

router.get('/', (req, res) => {
  const { account } = req
  const fileName = `${account.id}.${imageExtension}`
  const picPath = path.join(global.app_root, 'pics', fileName)
  const defaultPicPath = path.join(global.app_root, 'pics', defaultPictureName)

  fs.readFile(picPath, 'base64', (err, picture) => {
    if (err || !picture) {
      // Send default picture if not found
      // eslint-disable-next-line
      fs.readFile(defaultPicPath, 'base64', (err, picture) => {
        const file = `data:image/${imageExtension};base64,${picture}`
        res.send(file)
      })
    } else {
      const file = `data:image/${imageExtension};base64,${picture}`
      res.send(file)
    }
  })
})

router.post('/', (req, res, next) => {
  const { account } = req
  const fileName = `${account.id}.${imageExtension}`
  const picPath = path.join(global.app_root, 'pics', fileName)
  let { picture } = req.body

  picture = picture.substring(picture.indexOf(';base64,') + ';base64,'.length)

  const imgBuffer = Buffer.from(picture, 'base64')

  // Optimize & save img
  Jimp.read(imgBuffer)
    .then(image => {
      res.sendStatus(200)

      image
        .resize(256, Jimp.AUTO)
        .quality(75)
        .write(picPath)
    })
    .catch(next)
})

module.exports = router
