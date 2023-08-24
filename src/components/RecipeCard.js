import '../assets/css/RecipeCard.css';

import { Link } from "react-router-dom";
import heartEmpty from "../assets/img/heart_empty.png";
import heartRed from "../assets/img/heart_red.png";
import getRecipeId from '../utils/getRecipeId';


function RecipeCard({recipe, isInFav, toggleFav}) {
    return (<>
        <div className="recipe-container">
            <Link to={"/recipe/" + getRecipeId(recipe)} style={{ textDecoration: 'none', cursor: "pointer"}}>
                <img className="recipe-image" src={recipe.recipe.image} alt={recipe.recipe.label} />
                <div className="recipe-text">
                    <h3>{recipe.recipe.label}</h3>
                    {recipe.recipe.ingredientLines.map(line => <>
                        <p>{line}</p>
                    </>)}
                    <p> Total calories: {Math.round(recipe.recipe.calories)}</p>
                </div>
            </Link>
            <img className="heart-icon"
                src={isInFav ? heartRed : heartEmpty}  
                onClick={() => toggleFav(recipe)}/>
        </div>
</>  );
}

export default RecipeCard;