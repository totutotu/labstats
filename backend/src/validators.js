const { check } = require('express-validator/check')

const validateMeasurement = [
  check('unit').isString(),
  check('name').isString(),
  check('upperBound').isNumeric(),
  check('lowerBound').isNumeric()
]

module.exports = { validateMeasurement }