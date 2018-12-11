const request = require('supertest')
const app = require('../src/index')
const mongoose = require('mongoose')

const Measurement = require('../src/models/Measurement')

require('dotenv').config()
require('../src/connection.js')

describe('Test the root path', () => {
  let m1
  beforeAll(async () => {
    m1 = await Measurement.create({ id: 'HG', unit: 'g/l', name: 'Hemoglobiini', bounds: { upper: 167, lower: 134 } })
    await Measurement.create({ id: 'LDL', unit: 'mmol/l', name: 'LDL-kolesteroli', bounds: { upper: 3, lower: 0 } })
  })

  test('It should response the GET method', (done) => {
    request(app).get('/api/')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })

  test('It should return all measurements in GET root', (done) => {
    request(app).get('/api/')
      .then((response) => {
        expect(response.body.length).toBe(2)
        done()
      })
  })

  test('It should return all measurements in GET root', (done) => {
    request(app).get('/api/')
      .then((response) => {
        expect(response.body.length).toBe(2)
        done()
      })
  })

  test('It should update values with PUT/:id', (done) => {
    const { _id } = m1
    request(app).put(`/api/${_id}`).send({ id: 'HG', unit: 'g/l', name: 'SUPERHemoglobiini', upperBound: 167, lowerBound: 134 })
      .then(async (response) => {
        expect(response.statusCode).toBe(200)
        const m2 = await Measurement.findById(_id)
        expect(m2.name).toBe('SUPERHemoglobiini')
        done()
      })
  })

  test('It should create a new one with POST /', (done) => {
    request(app).post('/api/').send({ id: 'CL', unit: 'mmol/l', name: 'Kolesteroli', upperBound: 5.0, lowerBound: 0 })
      .then(async (response) => {
        expect(response.statusCode).toBe(201)
        expect(response.body.name).toBe('Kolesteroli')
        request(app).get('/api/')
          .then((response) => {
            expect(response.body.length).toBe(3)
            done()
          })
      })
  })

  test('It should return 422 when POSTing with missing values', (done) => {
    request(app).post('/api/').send({ id: 'CL', name: 'Kolesteroli', upperBound: 5.0, lowerBound: 0 })
      .then(async (response) => {
        expect(response.statusCode).toBe(422)
        done()
      })
  })


  afterAll(async (done) => {
    await Measurement.deleteMany()
    await mongoose.connection.close()
    done()
  })
})
