const express = require('express')
const fs = require('fs')
const path = require('path')
const Jimp = require('jimp')

const router = express.Router({ caseSensitive: true })
const defaultPictureName = 'user_default.png'
const imageExtension = 'webp'

router.get('/', (req, res, next) => {
  const db = req.app.get('db')
  const { account } = req

  db.login
    .findById(account.id)
    .then(login => {
      const fileName = login.picturePath || defaultPictureName
      const picPath = path.join(global.app_root, 'pics', fileName)

      fs.readFile(picPath, 'base64', (err, picture) => {
        if (err) next(err)

        const file = `data:image/${imageExtension};base64,${picture}`
        res.send(file)
      })
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const db = req.app.get('db')
  const { account } = req
  let { picture } = req.body
  const fileName = `${account.id}.${imageExtension}`
  const picPath = path.join(global.app_root, 'pics', fileName)

  picture = picture.substring(picture.indexOf(';base64,') + ';base64,'.length)

  const imgBuffer = Buffer.from(picture, 'base64')

  // Optimize & save img
  Jimp.read(imgBuffer)
    .then(image => {
      image
        .resize(256, Jimp.AUTO)
        .quality(75)
        .write(picPath)

      // Update img path in login
      db.login
        .update(
          {
            picturePath: fileName
          },
          {
            where: {
              id: account.id
            }
          }
        )
        .then(() => {
          res.sendStatus(200)
        })
        .catch(next)
    })
    .catch(next)
})

module.exports = router
