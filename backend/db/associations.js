module.exports = {
  associate: (models, getModelName) => {
    Object.keys(models).forEach(modelName => {
      let model = models[modelName]

      Object.getOwnPropertyNames(model.attributes).forEach(attribute => {
        let references = model.attributes[attribute].references
        if (references) {
          var refModel = models[getModelName(references.model)]

          //TODO check association type
          model.belongsTo(refModel, {
            foreignKey: attribute,
            as: attribute.split('Id')[0] + 's'
          })
        }
      })
    })
  }
}
