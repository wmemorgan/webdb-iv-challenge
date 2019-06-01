exports.seed = async function (knex) {
  // Inserts seed entries
  await knex('UnitsOfMeasure').insert([
    { unit: 'teaspoon', abbreviation: 'tsp'},
    { unit: 'tablespoon', abbreviation: 'tbsp' },
    { unit: 'fluid_ounce', abbreviation: 'fl.oz' },
    { unit: 'cup', abbreviation: 'C' },
    { unit: 'pint', abbreviation: 'pt' },
    { unit: 'quart', abbreviation: 'qt' },
    { unit: 'gallon', abbreviation: 'gal' },
    { unit: 'ounce', abbreviation: 'oz' },
    { unit: 'pound', abbreviation: 'lb' },
    { unit: 'milliliter', abbreviation: 'mL'},
    { unit: 'litres', abbreviation: 'L' },
    { unit: 'grams', abbreviation: 'g' },
    { unit: 'kilograms', abbreviation: 'kg' },
    { unit: 'Celcius', abbreviation: '°C' },
    { unit: 'Fahrenheit', abbreviation: '°F' },
  ])
}