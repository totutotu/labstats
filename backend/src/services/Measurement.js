const Measurement = require('../models/Measurement')

const findAll = async () => {
  return Measurement.find({})
}

const create = async (id, unit, name, upperBound, lowerBound) => {
  return await Measurement.create({ id, unit, name, bounds: { upper: upperBound, lower: lowerBound }})
}

const remove = async (id) => {
  return await Measurement.deleteOne({ _id: id })
}

const update = async (id, unit, name, upperBound, lowerBound) => {
  return await Measurement.updateOne({ _id: id }, { unit, name, upperBound, lowerBound })
}


module.exports = {
  findAll, create, remove, update
}
