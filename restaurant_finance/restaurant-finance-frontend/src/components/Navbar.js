import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/ingredients">Ingredients</Link></li>
        <li><Link to="/add-recipe">Add Recipe</Link></li>
        <li><Link to="/recipe-sales-estimate">Estimate Costs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
