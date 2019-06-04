
exports.seed = async function(knex) {
  // Inserts seed entries
  await knex('Dishes').insert([
    { id: 1, name: 'Pasta' },
    { id: 2, name: 'Chili' },
    { id: 3, name: 'Pancit' },
    { id: 4, name: 'Ham' }
  ])
}
