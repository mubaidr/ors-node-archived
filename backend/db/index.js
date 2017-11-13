const Sequelize = require('sequelize')
const config = require('config')
const fs = require('fs')
const path = require('path')
var models = {}

const sequelize = new Sequelize(config.get('db.name'), config.get('db.username'), config.get('db.password'), {
  host: config.get('db.host'),
  dialect: 'mssql',
  freezeTableName: true,
  operatorsAliases: false,
  timestamps: false,
  underscored: true
})

const dir = path.join(__dirname, 'models/')
var files = fs.readdirSync(dir)
files.forEach(file => {
  var model = getModelName(file)
  models[model] = sequelize.import(model, require(dir + file))
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

//TODO uncomment this before deploy
// sequelize.sync()

function getModelName (name) {
  var words = name
    .toLowerCase()
    .replace(/TBL|CAT/, '')
    .replace('.js', '')
    .split('_')

  var model = words[1]
  for (var i = 2; i < words.length; i++) {
    model += words[i][0].toUpperCase() + words[i].substring(1)
  }

  return model
}

module.exports = models
