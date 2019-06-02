const router = require('express').Router()

// Import data models
const { getRecipes, addRecipe, remove, findById } = require('../data/models')

// Load middleware
const idBodyCheck = [requiredData, validateDataId]

// ==== GET ==== //
router.get('/', async (req, res) => {
  try {
    let data = await getRecipes()
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', validateDataId, async (req, res) => {
  try {
    let data = await findById(req.data.id, 'Recipes')
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

// ==== POST ==== //
router.post('/', requiredData, async (req, res) => {
  try {
    let data = await addRecipe(req.body)
    console.log(`add recipe: `, data)
    res.send(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// ==== PUT ==== //
router.put('/:id', idBodyCheck, async (req, res) => {
  try {
    let data = await db.update(req.data.id, req.body, 'Recipes')
    res.json(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// ==== DELETE ==== //
router.delete('/:id', validateDataId, async (req, res) => {
  try {
    let data = await remove(req.data.id, 'Recipes')
    res.json(data)
  }
  catch (err) {
    res.status(500).json(err.message)
  }
})

// Custom middleware
async function validateDataId(req, res, next) {
  try {
    let data = await findById(req.params.id, 'Recipes')
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
const requiredFields = ['name', 'dish_id']

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