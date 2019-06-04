const router = require('express').Router()

// Import data models
const { getDishes, getDish, addDish, remove, findById } = require('../data/models')

// Load middleware
const idBodyCheck = [requiredData, validateDataId]

// ==== GET ==== //
router.get('/', async (req, res) => {
  try {
    let data = await getDishes()
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', validateDataId, async (req, res) => {
  try {
    let data = await getDish(req.params.id)
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

// ==== POST ==== //
router.post('/', requiredData, async (req, res) => {
  try {
    let data = await addDish(req.body)
    console.log(`add dish: `, data)
    res.send(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// ==== PUT ==== //
router.put('/:id', idBodyCheck, async (req, res) => {
  try {
    let data = await db.update(req.data.id, req.body, 'dishes')
    res.json(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// ==== DELETE ==== //
router.delete('/:id', validateDataId, async (req, res) => {
  try {
    let data = await remove(req.data.id, 'Dishes')
    res.json(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// Custom middleware
async function validateDataId(req, res, next) {
  try {
    let data = await findById(req.params.id, 'Dishes')
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
const requiredFields = ['name']

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