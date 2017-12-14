const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router({ caseSensitive: true })
const defaultPictureName = 'user_default.png'

// TODO: optmize this module

router.get('/', (req, res, next) => {
  const db = req.app.get('db')
  const { account } = req

  db.login
    .findById(account.id)
    .then(login => {
      const fileName = login.picturePath || defaultPictureName
      const picPath = path.join(global.app_root, 'pics', fileName)
      const extension = fileName.split('.')[1]

      fs.readFile(picPath, 'base64', (err, picture) => {
        if (err) next(err)

        const file = `data:image/${extension};base64,${picture}`
        res.send(file)
      })
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const db = req.app.get('db')
  const { account } = req
  let { picture } = req.body
  const extension = picture.substring(
    'data:image/'.length,
    picture.indexOf(';base64,')
  )
  picture = picture.substring(picture.indexOf(';base64,') + ';base64,'.length)

  const fileName = `${account.id}-${Date.now()}.${extension}`
  const picPath = path.join(global.app_root, 'pics', fileName)
  const oldPicPath = path.join(global.app_root, 'pics', account.picturePath)

  fs.writeFile(picPath, picture, 'base64', err => {
    if (err) next(err)

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
        if (oldPicPath.indexOf(defaultPictureName) === -1) {
          // eslint-disable-next-line
          fs.unlink(oldPicPath, err => {
            if (err) next(err)

            res.sendStatus(200)
          })
        } else {
          res.sendStatus(200)
        }
      })
      .catch(next)
  })
})

module.exports = router
