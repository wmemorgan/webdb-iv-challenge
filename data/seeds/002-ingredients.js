
exports.seed = async function(knex) {
    // Inserts seed entries
    await knex('Ingredients').insert([
      { name: 'olive oil' },
      { name: 'canola oil' },
      { name: 'ketchup' },
      { name: 'mayonnaise' },
      { name: 'dijon mustard' },
      { name: 'soy sauce' },
      { name: 'tomato sauce' },
      { name: 'tomato paste' },
      { name: 'Worcestershire sauce' },
      { name: 'salt' },
      { name: 'pepper' },
      { name: 'breadcrumbs' },
      { name: 'sugar' },
      { name: 'brown sugar' },
      { name: 'butter' },
      { name: 'eggs' },
      { name: 'milk' },
      { name: 'flour' },
      { name: 'baking soda' },
      { name: 'baking powder' },
      { name: 'vanilla extract' },
      { name: 'peanut butter' },
      { name: 'onions' },
      { name: 'garlic' },
      { name: 'potatoes' },
      { name: 'rice' },
      { name: 'spaghetti noodles' },
      { name: 'egg noodles' },
      { name: 'lemons' },
      { name: 'tomatoes' }
    ])
};
