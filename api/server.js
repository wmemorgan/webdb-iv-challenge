const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

// Import resource routes
const dishRoutes = require('../routes/dishRoutes')
const recipeRoutes = require('../routes/recipeRoutes')

// Instantiate server
const server = express()

// Load middleware
server.use(helmet())
server.use(express.json())
server.use(logger('dev'))

// Activate routes
server.use('/api/dishes', dishRoutes)
server.use('/api/recipes', recipeRoutes)
server.use('/', (req, res) => {
  res.send(`<h1>Welcome to the Recipe Book API</h1>`)
})

module.exports = server