import '../assets/css/Recipes.css';
import RecipeCard from "./RecipeCard";
import getRecipeId from '../utils/getRecipeId';

function Recipes({recipes, favRecipes, isFavorites, setRecipes, setFavRecipes}) {

    const indexOfFavRecipe = function(recipe) {
        return favRecipes.findIndex(r => getRecipeId(r) === getRecipeId(recipe));
    } 

    const toggleFav = function(recipe) {
        const newFavRecipes = [...favRecipes];
        const indexOfRecipe = indexOfFavRecipe(recipe);
        if (indexOfRecipe === -1) {
            newFavRecipes.push(recipe);
        } else {
            newFavRecipes.splice(indexOfRecipe, 1);
        }
        setFavRecipes(newFavRecipes);
    }

    return (<> 
        <div className="recipe-list-header">{isFavorites ? "Favorite recipes" : "Found recipes"}</div>
        <div className="recipe-list-container">
            {recipes.map((recipe, index) => <RecipeCard recipe={recipe} 
                                                        isInFav = {isFavorites || indexOfFavRecipe(recipe) !== -1} 
                                                    a    toggleFav = {toggleFav}
                                                        key={index}/> )}
        </div>
    </> );
}

export default Recipes;