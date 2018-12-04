require('dotenv').config()
require('./connection.js')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 3000
const Measurement = require('./services/Measurement')

app.get('/', async (req, res) => {
  const aa = await Measurement.findAll()
  res.send(aa)
})

app.post('/', async (req, res) => {
  const { id, name, unit, upperBound, lowerBound } = req.body
  try {
    const me = await Measurement.create(id, name, unit, upperBound, lowerBound)
    res.send(201, me)
  } catch (e) {
    res.send(400, e.message)
  }
})

app.delete('/:id', async (req, res) => {
  const { id } = req.headers
  const me = await Measurement.remove(id)
  res.send(me)
})

app.put('/:id', async (req, res) => {
  const { id } = req.headers
  const { name, unit, upperBound, lowerBound } = req.body
  const me = await Measurement.update(id, name, unit, upperBound, lowerBound)
  res.send(me)
})

app.listen(port, () => console.log('App listening on port ' + port))
