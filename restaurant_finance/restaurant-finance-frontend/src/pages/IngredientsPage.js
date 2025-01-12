import React from 'react';
import IngredientsList from '../components/IngredientsList';
import AddIngredient from '../components/AddIngredient';

const IngredientsPage = () => {
  return (
    <div>
      <h1>Ingredients</h1>
      <AddIngredient />
      <IngredientsList />
    </div>
  );
};

export default IngredientsPage;
