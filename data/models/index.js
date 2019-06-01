const knex = require('knex')
const dbConfig = require('../../knexfile')

// Instantiate database instance
const db = knex(dbConfig.development)

//==== Resource-specific Database Methods ====//
function getDishes() {
  return db('Dishes')
}
// Dishes resource
async function getDish(id) {
  let recipeList = await db('Recipes').select('name').where({ dish_id: id })
  let data = await db('Dishes').where({ id }).first()
  return {
    ...data,
    relatedRecipes: recipeList.map(recipe => recipe.name)
  }
}

function addDish(dish) {
  return db('Dishes')
    .insert(dish, 'id')
    .then(ids => {
      return db('Dishes')
        .where({ id: ids[0] })
        .first()
        .then(record => record)
    })
}

// Recipes resource
function getRecipes() {
  return db('Recipes')
    .innerJoin('Dishes', 'Dishes.id', 'Recipes.dish_id')
    .select({id: 'Recipes.id', name: 'Recipes.name', dish: 'Dishes.name'})
}

function addRecipe(recipe) {
  return db('Recipes')
    .insert(recipe, 'id')
    .then(ids => {
      return db('Recipes')
        .where({ id: ids[0] })
        .first()
        .then(record => record)
    })
}

//==== Global Database Methods ====//
function find(table) {
  return db(table)
}

function findById(id, table) {
  return db(table)
    .where({ id: Number(id) })
    .first()
    .then(record => record)
}

function insert(data, table) {
  return db(table)
    .insert(data, 'id')
    .then(ids => {
      return db(table)
        .where({ id: ids[0] })
        .first()
        .then(record => record)
    })
}

function update(id, data, table) {
  return db(table)
    .where({ id })
    .update(data)
    .then(count => {
      if (count > 0) {
        return db(table)
          .where({ id })
          .first()
          .then(record => record)
      }
    })
}

function remove(id, table) {
  return db(table)
    .where({ id })
    .del()
    .then(count => {
      if (count > 0) {
        return {
          message: `${count} ${count > 1 ?
            'records' : 'record'} deleted`
        }
      }
    })
}

function innerJoin(parenTable, childTable, pk, fk, id, ...args) {
  return db.from(parenTable)
    .innerJoin(childTable, pk, fk)
    .where(pk, id)
    .select(...args)
}

module.exports = {
  db,
  getDishes,
  getDish,
  addDish,
  getRecipes,
  addRecipe,
  find,
  findById,
  insert,
  update,
  remove,
  innerJoin
}