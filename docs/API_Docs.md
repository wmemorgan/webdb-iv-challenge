## RecipeBook App API Documentation

### Routes

#### Endpoint
https://wme-recipebook-api.herokuapp.com/api/

#### Dishes

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/dishes`         | Returns all dishes       |
| GET    | `/dishes/:id`         | Returns the **dish** with the provided `id` and include a list of the related recipes.       |
| POST    | `/dishes`         | Add the **dish** to the database and return the `id` of the new **dish**.       |
| PUT    | `/dishes/:id`         | Modify an existing dish.                   |
| DELETE | `/dishes/:id`         | Delete a dish.                            |

#### Recipes

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/recipes`         | Returns all recipes       |
| GET    | `/recipes/:id`         | Returns the recipe with the provided `id`.       |
| POST    | `/recipes`         | Add a recipe to the database.      |
| PUT    | `/recipes/:id`         | Modify an existing recipe.                   |
| DELETE | `/recipes/:id`         | Delete a recipe.                            |                           |

#### Ingredients

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/ingredients`         | Returns all ingredients       |
| GET    | `/ingredients/:id`         | Returns the information for a specific ingredient.       |
| POST    | `/ingredients`         | Add an ingredient to the database.       |
| PUT    | `/ingredients/:id`         | Modify an existing ingredient.                   |
| DELETE | `/ingredients/:id`         | Delete an ingredient.                            |                           |
#### Units of Measurement

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/units`         | Returns all units       |
| GET    | `/units/:id`         | Returns the information for a specific unit.       |
| POST    | `/units`         | Add a unit to the database.     |
| PUT    | `/units/:id`         | Modify an existing unit.                   |
| DELETE | `/units/:id`         | Delete a unit.                            |                           |

---
### Data Models

#### Resource Specific Models
| Method | Description |
|--------|-------------|
| `getDishes()` | Return a list of all dishes in the database. |
| `getDish(id)` | Return the **dish** with the provided `id` and include a list of the related recipes. |
| `addDish(dish)` | Add the **dish** to the database and return the `id` of the new **dish**. |
| `getRecipes()` | Return a list of all recipes in the database including the **dish** they belong to. |
| `getRecipe(id)` | Return the recipe with the provided `id`. The recipe should include:
  - name of the dish.
  - name of the recipe.
  - the list of ingredients with the quantity. |
| `addRecipe(recipe)` | Add a **recipe** to the database and return the `id` of the new **recipe**. |
| `getShoppingList(recipeId)` | Returns a list of all the recipe's ingredients including the quantity of each. |

#### Global Models
| Method | Description |
|--------|-------------|
| `find()` | Returns a promise that resolves to an array of all the resources contained in the database. |
| `findById()` | Takes an id as the argument and returns a promise that resolves to the resource with that id if found. |
| `insert()` | Accepts a `resource` object to add it to the database and return the new `resource`.
| `update()` | Accepts two arguments, the first is the id of the resource to update and the second is an object with the changes to apply. It returns the count of updated records. If the count is 1 it means the record was updated correctly. |
| `remove()` | Accepts an id as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted. |
