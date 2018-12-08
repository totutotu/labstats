const Router = require('express')
const router = Router()
const Measurement = require('./services/Measurement')

router.get('/', async (req, res) => {
  const aa = await Measurement.findAll()
  res.send(aa)
})

router.post('/', async (req, res) => {
  const { id, name, unit, upperBound, lowerBound } = req.body
  try {
    const me = await Measurement.create(id, name, unit, upperBound, lowerBound)
    res.send(201, me)
  } catch (e) {
    res.send(400, e.message)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.headers
  const me = await Measurement.remove(id)
  res.send(me)
})

router.put('/:id', async (req, res) => {
  const { id } = req.headers
  const { name, unit, upperBound, lowerBound } = req.body
  const me = await Measurement.update(id, name, unit, upperBound, lowerBound)
  res.send(me)
})

module.exports = router
