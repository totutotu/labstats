const Router = require('express')
const router = Router()
const Measurement = require('./services/Measurement')


router.get('/', async (req, res) => {
  const aa = await Measurement.findAll()
  res.send(aa)
})

router.post('/', async (req, res) => {
  const { id, name, unit, upperBound, lowerBound } = req.body
  console.log(id, name, unit, upperBound, lowerBound)
  try {
    const me = await Measurement.create(id, name, unit, upperBound, lowerBound)
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

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name, unit, upperBound, lowerBound } = req.body
  const identifier = req.body.id
  console.log(upperBound)
  const me = await Measurement.update(id, unit, name, Number(upperBound), Number(lowerBound), identifier)
  res.send(me)
})

module.exports = router
