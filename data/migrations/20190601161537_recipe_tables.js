
exports.up = async function(knex) {
  await knex.schema.createTable('Recipes', tbl => {
    tbl.increments('id')
    tbl.string('name')
    tbl
      .integer('dish_id')
      .references('id')
      .inTable('Dishes')
  })

  await knex.schema.createTable('RecipeIngredients', tbl => {
    tbl.increments('id')
    tbl
      .integer('recipe_id')
      .references('id')
      .inTable('Recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable()
    tbl
      .integer('ingredient_id')
      .references('id')
      .inTable('Ingredients')
      .notNullable()
  })

  await knex.schema.createTable('RecipeInstructions', tbl => {
    tbl.increments('id')
    tbl
      .integer('recipe_id')
      .references('id')
      .inTable('Recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable()
    tbl.string('step').notNullable()
    tbl.integer('order').unique().notNullable()
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('RecipeInstructions')
  await knex.schema.dropTableIfExists('RecipeIngredients')
  await knex.schema.dropTableIfExists('Recipes')
};
