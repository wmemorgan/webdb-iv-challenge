
exports.seed = async function(knex) {
  // Inserts seed entries
  await knex('Dishes').insert([
    { name: 'Pasta' },
    { name: 'Chili' },
    { name: 'Pancit' },
    { name: 'Ham' }
  ])
}
