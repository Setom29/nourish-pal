import { Link } from "react-router-dom";
export default function RecipesHeader(){
    return (
        <div className="recipes-header">
            <Link to="/favorites"><div>Favorites</div></Link>
            <Link to="/catalog"><div>Catalog</div></Link>
            <Link to="/"><img src={require('../assets/logo.jpg')}></img></Link>
        </div>
    );
}