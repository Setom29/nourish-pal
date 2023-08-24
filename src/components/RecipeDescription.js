import { useParams } from "react-router-dom";
import getRecipeId from "../utils/getRecipeId";
import "../assets/css/RecipeDescription.css";

function RecipeDescription(recipes, favRecipes) {
  const { id } = useParams();
  const recipe = () => {
    let tempRecipe = {};
    tempRecipe =
      recipes.recipes.find((recipe) => getRecipeId(recipe) === id) ||
      favRecipes.recipes.find((recipe) => getRecipeId(recipe) === id);
  };
  return (
    <div className="recipe-description">
      <img
        className="recipe-description__image"
        src={recipe.recipe.image}
        alt={recipe.recipe.label}
      />
      <div className="recipe-description__text">
        <h3>{recipe.recipe.label}</h3>
        {recipe.recipe.ingredientLines.map((line) => (
          <>
            <p>{line}</p>
          </>
        ))}
        <p> Total calories: {Math.round(recipe.recipe.calories)}</p>
      </div>
    </div>
  );
}

export default RecipeDescription;
