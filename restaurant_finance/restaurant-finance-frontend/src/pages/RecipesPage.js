import React from 'react';
import RecipesList from '../components/RecipesList'; 
import AddRecipe from '../components/AddRecipe';

const RecipesPage = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <AddRecipe />
      <RecipesList />
    </div>
  );
};

export default RecipesPage;
