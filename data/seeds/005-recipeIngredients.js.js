
exports.seed = async function (knex) {
  // Inserts seed entries
  await knex('RecipeIngredients').insert([
    { recipe_id: 4, ingredient_id: 31, quantity: 1, unit_id: 9 },
    { recipe_id: 4, ingredient_id: 23, quantity: 1, unit_id: 18 },
    { recipe_id: 4, ingredient_id: 24, quantity: 2, unit_id: 20 },
    { recipe_id: 4, ingredient_id: 7, quantity: 8, unit_id: 8 },
    { recipe_id: 4, ingredient_id: 8, quantity: 8, unit_id: 8 },
    { recipe_id: 4, ingredient_id: 27, quantity: 7, unit_id: 8 },
    { recipe_id: 4, ingredient_id: 33, quantity: 1, unit_id: 4 }
  ])
}
