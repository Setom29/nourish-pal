import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipesHeader from './components/RecipesHeader';
import RecipesHome from './components/RecipesHome';
import RecipeDescription from './components/RecipeDescription';
import RecipesFooter from './components/RecipesFooter';
import { useState } from 'react';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState([]);
  
  return (
    <Router>
      <RecipesHeader/>
      <Routes>
        <Route path="/" element={<RecipesHome isFavorites={false} recipes={recipes} setRecipes={setRecipes} setFavRecipes={setFavRecipes}/>} />
        <Route path="/catalog"  element={<RecipesHome isFavorites={false} recipes={recipes} setRecipes={setRecipes} setFavRecipes={setFavRecipes}/>} />
        <Route path="/favorites"  element={<RecipesHome isFavorites={true} recipes={favRecipes} setRecipes={setRecipes} setFavRecipes={setFavRecipes}/>} />
        <Route path="/recipe/:id"  element={<RecipeDescription recipes={recipes} favRecipes={favRecipes}/>} />
      </Routes>
      <RecipesFooter />
  </Router>
)
}

export default App;
