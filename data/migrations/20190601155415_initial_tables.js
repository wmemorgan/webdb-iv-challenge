
exports.up = async function(knex) {
  await knex.schema.createTable('Dishes', tbl => {
    tbl.increments('id')
    tbl.string('name').unique().notNullable()
  })

  await knex.schema.createTable('UnitsOfMeasure', tbl => {
    tbl.increments('id')
    tbl.string('unit').unique().notNullable()
    tbl.string('abbreviation').unique()
  }) 

  await knex.schema.createTable('Ingredients', tbl => {
    tbl.increments('id')
    tbl.string('name')
    tbl.float('total_qty')
    tbl
      .integer('unit_id')
      .references('id')
      .inTable('UnitsOfMeasure')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('Ingredients')
  await knex.schema.dropTableIfExists('UnitsOfMeasure')
  await knex.schema.dropTableIfExists('Dishes')
};
