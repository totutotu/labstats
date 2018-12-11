const Router = require('express')
const router = Router()
const Measurement = require('./services/Measurement')
const { validationResult } = require('express-validator/check')
const { validateMeasurement } = require('./validators')

router.get('/', async (req, res) => {
  const all = await Measurement.findAll()
  res.status(200).send(all)
})

router.post('/', validateMeasurement, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array())
  }
  const { id, name, unit, upperBound, lowerBound } = req.body

  try {
    const me = await Measurement.create(id, unit, name, upperBound, lowerBound)
    res.status(201).send(me)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Measurement.remove(id)
  res.status(200).send(id)
})

router.put('/:id', validateMeasurement, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json(errors.array())
  }
  const { id } = req.params
  const { name, unit, upperBound, lowerBound } = req.body
  const identifier = req.body.id
  const me = await Measurement.update(id, unit, name, upperBound, lowerBound, identifier)
  res.status(200).send(me)
})

module.exports = router
