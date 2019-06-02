
exports.seed = async function(knex) {
  // Inserts seed entries
  await knex('RecipeInstructions').insert([
    { recipe_id: 4, step: 'Chop onion and garlic', order: 1 },
    { recipe_id: 4, 
      step: 'Cook onion, garlic, and ground beef in a Dutch oven.', 
      order: 2 },
    { recipe_id: 4, step: 'Stirring ground beef until it crumbles and is no longer pink; drain well', order: 3 },
    { recipe_id: 4, step: 'Return beef mixture to pan. Stir in tomato sauce and water; bring to a boil.', 
      order: 4 },
    { recipe_id: 4, step: 'Cover, reduce heat, and simmer, stirring often, 30 minutes.', order: 5 },
    { recipe_id: 4, step: 'Add pasta; cover and simmer, stirring often, 11 minutes or until pasta is tender.', 
      order: 6 }
  ])
}
