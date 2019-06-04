
exports.seed = async function (knex) {
  // Inserts seed entries
  await knex('Recipes').insert([
    { name: 'Chili Verde', dish_id: 2 },
    { name: 'Pancit Canton', dish_id: 3 },
    { name: 'Orange Glazed Ham', dish_id: 4 },
    { name: 'Cafe Morgan Spaghetti Classic', dish_id: 1 }
  ])
}
