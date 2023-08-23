import React, { useState } from 'react';
import {searchRecipes} from "../requests/searchRecipes"

function RecipeSearch() {
  const [ingredients, setIngredients] = useState('')
  const [recipes, setRecipes] = useState([])

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value)
  };

  useEffect(() => {
    async function fetchData() {
      let response = [];

      response = await searchRecipes(ingredients);
      setRecipes(response);

    }
  }, [ingredients]);

  return (
    <div>
      <h2>Search recipes by ingredients</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Ingredients:"
          value={ingredients}
          onChange={handleIngredientsChange}
        />
        <button onClick={searchRecipes}>Search</button>
      </div>
      <div>
        {recipes.length > 0 && (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.recipe.label}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RecipeSearch;
