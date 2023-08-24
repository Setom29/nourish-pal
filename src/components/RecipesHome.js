import Recipes from "./Recipes";

function RecipesHome({recipes, favRecipes, isFavorites, setRecipes, setFavRecipes}) {
    return ( <>
        {/* TODO if (isFavorites)
        <SearchPanel/>
        <Filters/> */}
        <Recipes isFavorites={isFavorites} recipes={recipes} favRecipes={favRecipes} setRecipes={setRecipes} setFavRecipes={setFavRecipes}/>
    </> );
}

export default RecipesHome;