const express = require('express')
const Car = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
} = require('./cars-middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const result = await Car.getAll()
        res.json(result)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', checkCarId, (req, res, next) => {
    res.json(req.cars)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
        const newCar = await Car.create(req.body)
        res.status(201).json(newCar)
    } catch(err) {
        next(err)
    }
})

module.exports = router