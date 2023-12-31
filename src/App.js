import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipesHeader from './components/RecipesHeader';
import RecipesHome from './components/RecipesHome';
import RecipeDescription from './components/RecipeDescription';
import RecipesFooter from './components/RecipesFooter';
import { useState } from 'react';
import { dummyData } from "./utils/dummyData"; // delete when search is ready

import Filters from './components/Filters';
import SearchPanel from './components/SearchPanel';


function App() {
  const [recipes, setRecipes] = useState(dummyData.hits); // change to [] when search is ready
  const [favRecipes, setFavRecipes] = useState([]);
  const [filters, setFilters] = useState({
    diet: ``,
    health: ``,
    mealType: ``,
    cuisineType: ``,
    dishType: ``,
  })

  return (
    <Router>
      <RecipesHeader />
      <Filters filters={filters} setFilters={setFilters}/>
      <SearchPanel setRecipes={setRecipes} filters={filters}/>
      <Routes>
        <Route path="/" element={<RecipesHome isFavorites={false} recipes={recipes} favRecipes={favRecipes} setRecipes={setRecipes} setFavRecipes={setFavRecipes} />} />
        <Route path="/catalog" element={<RecipesHome isFavorites={false} recipes={recipes} favRecipes={favRecipes} setRecipes={setRecipes} setFavRecipes={setFavRecipes} />} />
        <Route path="/favorites" element={<RecipesHome isFavorites={true} recipes={favRecipes} favRecipes={favRecipes} setRecipes={setRecipes} setFavRecipes={setFavRecipes} />} />
        <Route path="/recipe/:id" element={<RecipeDescription recipes={recipes} favRecipes={favRecipes} />} />
      </Routes>
      <RecipesFooter />
    </Router>
  )
}

export default App;
