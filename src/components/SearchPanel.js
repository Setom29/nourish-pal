import React, { useState, useEffect } from 'react';
import { fetchRecipes } from "../requests/searchRecipes";

function SearchPanel({setRecipes, filters}) {
  const [ingredients, setIngredients] = useState('')
  // const [recipes, setRecipes] = useState([])

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value)
  }

  const searchForRecipes = async () => {
    const currentFilters = filters
    const response = await fetchRecipes(ingredients, currentFilters)
    setRecipes(response)
  }

  useEffect(() => {
    const currentFilters = filters
    async function fetchData() {
      const response = await fetchRecipes(ingredients, currentFilters)
      setRecipes(response)
    }
    
    fetchData()
  }, [])

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
        <button onClick={searchForRecipes}>Search</button>
      </div>
    </div>
  );
}

export default SearchPanel;