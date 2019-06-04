const router = require('express').Router()

// Import data models
const db = require('../data/models')

// Load middleware
const idBodyCheck = [requiredData, validateDataId]

// ==== GET ==== //
router.get('/', async (req, res) => {
  try {
    let data = await db.find('UnitsOfMeasure')
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', validateDataId, async (req, res) => {
  try {
    let data = await db.findById(req.data.id, 'UnitsOfMeasure')
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

// ==== POST ==== //
router.post('/', requiredData, async (req, res) => {
  try {
    let data = await db.insert(req.body)
    res.send(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// ==== PUT ==== //
router.put('/:id', idBodyCheck, async (req, res) => {
  try {
    let data = await db.update(req.data.id, req.body, 'UnitsOfMeasure')
    res.json(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// ==== DELETE ==== //
router.delete('/:id', validateDataId, async (req, res) => {
  try {
    let data = await remove(req.data.id, 'UnitsOfMeasure')
    res.json(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// Custom middleware
async function validateDataId(req, res, next) {
  try {
    let data = await db.findById(req.params.id, 'UnitsOfMeasure')
    if (data) {
      req.data = data
      next()
    } else {
      res.status(404).json({ message: `ID ${req.params.id} not found` })
    }
  }
  catch (err) {
    res.status(500).json(err.message)
  }
}

const inputDataChecker = (arr, target) => target.every(v => arr.includes(v))
const requiredFields = ['unit', 'abbreviation']

function requiredData(req, res, next) {
  console.log(`inputDataChecker: `, inputDataChecker(Object.keys(req.body), requiredFields))
  if (!req.body || !Object.keys(req.body).length) {
    res.status(400).json({ message: "Missing user data" })
  } else if (!inputDataChecker(Object.keys(req.body), requiredFields)) {
    res.status(400).json({ message: "Missing required field." })
  } else {
    next()
  }
}

module.exports = router