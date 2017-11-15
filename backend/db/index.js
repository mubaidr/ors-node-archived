const Sequelize = require('sequelize')
const config = require('config')
const fs = require('fs')
const path = require('path')

const directory = path.join(__dirname, '/models/')
var models = {}
// TODO /FIX update datetime format
// Setup sequelize
const sequelize = new Sequelize(
  config.get('options.db.name'),
  config.get('options.db.username'),
  config.get('options.db.password'),
  {
    host: config.get('options.db.host'),
    dialect: 'mssql',
    freezeTableName: true,
    operatorsAliases: false,
    timestamps: true,
    underscored: true,
    define: {
      timestamps: true,
      underscored: true,
      freezeTableName: true
    },
    typeValidation: true,
    benchmark: true
  }
)

// Import models
fs.readdirSync(directory).forEach(file => {
  models[getModelName(file)] = sequelize.import(directory + file)
})

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.'.info)
  })
  .catch(err => {
    console.error(`Unable to connect to the database:${err}`.error)
  })

// Sync DB schema
sequelize.sync({
  logging: false
})

module.exports = {
  models: models,
  sequelize: sequelize
}

/**
 * Utilities
 */

function getModelName (name) {
  const words = name
    .toLowerCase()
    .replace(/TBL|CAT/, '')
    .replace('.js', '')
    .split('_')

  let model = ''
  for (let i = 1; i < words.length; i++) {
    model += words[i][0].toUpperCase() + words[i].substring(1)
  }

  return model
}
