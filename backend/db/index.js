const Sequelize = require('sequelize')
const config = require('config')
const fs = require('fs')
const path = require('path')

const associations = require('./associations')
const directory = path.join(__dirname, '/models/')

var models = {}

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
    pool: { maxConnections: 5, maxIdleTime: 30 },
    define: {
      timestamps: true,
      underscored: true,
      freezeTableName: true
    },
    typeValidation: true,
    benchmark: false,
    logging: false,
    query: { raw: true }
  }
)

// Import models
fs.readdirSync(directory).forEach(file => {
  models[getModelName(file)] = sequelize.import(directory + file)
})

// Setup model associations
associations.associate(models, getModelName)

// Test connection
sequelize
  .authenticate()
  .then(() => {
    // Sync DB schema
    sequelize
      .sync({
        logging: false
      })
      .catch(err => {
        console.log('\n' + err.message.error + '\n' + err.stack.warn + '\n')
      })
  })
  .catch(err => {
    console.log('\n' + err.message.error + '\n' + err.stack.warn + '\n')
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
    .replace(/.js/, '')
    .split(/_/)

  let model = words[1]
  for (let i = 2; i < words.length; i++) {
    let word = words[i]
    model += word[0].toUpperCase() + word.substring(1)
  }

  return model
}
