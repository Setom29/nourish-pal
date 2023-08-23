import React, { useState } from 'react';

function RecipeSearch() {
  const [ingredients, setIngredients] = useState('')
  const [recipes, setRecipes] = useState([])

  const appId = 'bd84d986'
  const appKey = 'd65097340284a57015c659a298e1eccb'

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value)
  };

  const searchRecipes = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${ingredients}&app_id=${appId}&app_key=${appKey}`)
      const data = await response.json()
      setRecipes(data.hits)
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  };

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
