import { Link } from "react-router-dom";
import React from "react";

import "../assets/css/recipes-header.css";
export default function RecipesHeader() {
  return (
    <div className="recipes-header">
      <Link to="/">
        <img
          src={require("../assets/img/logo.jpg")}
          className="recipes-header__logo"
        />
      </Link>
      <nav className="recipes-header__nav">
        <Link to="/favorites">Favorites</Link>
        <Link to="/catalog">Catalog</Link>
      </nav>
    </div>
  );
}
