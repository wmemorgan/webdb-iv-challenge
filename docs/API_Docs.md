### API Documentation

#### Endpoint
https://wme-recipebook-api.herokuapp.com/api/

#### Dishes Routes

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/dishes`         | Returns all dishes       |
| GET    | `/dishes/:id`         | Returns the **dish** with the provided `id` and include a list of the related recipes.       |
| POST    | `/dishes`         | Add the **dish** to the database and return the `id` of the new **dish**.       |
| PUT    | `/dishes/:id`         | Modify an existing dish.                   |
| DELETE | `/dishes/:id`         | Delete a dish.                            |

#### Recipes Routes

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/recipes`         | Returns all recipes       |
| GET    | `/recipes/:id`         | Returns the recipe with the provided `id`.       |
| POST    | `/recipes`         | Add a recipe to the database.      |
| PUT    | `/recipes/:id`         | Modify an existing recipe.                   |
| DELETE | `/recipes/:id`         | Delete a recipe.                            |                           |

#### Ingredients Routes

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/ingredients`         | Returns all ingredients       |
| GET    | `/ingredients/:id`         | Returns the information for a specific ingredient.       |
| POST    | `/ingredients`         | Add an ingredient to the database.       |
| PUT    | `/ingredients/:id`         | Modify an existing ingredient.                   |
| DELETE | `/ingredients/:id`         | Delete an ingredient.                            |                           |
#### Units of Measure Routes

| Method | Endpoint                        | Description                                        |
|--------|---------------------------------|----------------------------------------------------|
| GET    | `/units`         | Returns all units       |
| GET    | `/units/:id`         | Returns the information for a specific unit.       |
| POST    | `/units`         | Add a unit to the database.     |
| PUT    | `/units/:id`         | Modify an existing unit.                   |
| DELETE | `/units/:id`         | Delete a unit.                            |                           |

