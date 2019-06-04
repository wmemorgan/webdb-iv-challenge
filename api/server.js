const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

// Import resource routes
const dishRoutes = require('../routes/dishRoutes')
const recipeRoutes = require('../routes/recipeRoutes')
const ingredientRoutes = require('../routes/ingredientRoutes')
const unitRoutes = require('../routes/unitRoutes')

// Instantiate server
const server = express()

// Load middleware
server.use(helmet())
server.use(express.json())
server.use(logger('dev'))

// Activate routes
server.use('/api/dishes', dishRoutes)
server.use('/api/recipes', recipeRoutes)
server.use('/api/ingredients', ingredientRoutes)
server.use('/api/units', unitRoutes)
server.use('/', (req, res) => {
  res.send(`<h1>Welcome to the Recipe Book API</h1>
  <p><i>It's a cook book!</i></p>
  `)
})

module.exports = server