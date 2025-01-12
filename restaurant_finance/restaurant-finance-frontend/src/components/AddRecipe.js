import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', quantity: 0 }]);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: 0 }]);
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/recipes/', {
        name: recipeName,
        ingredients,
      });
      alert('Recipe added successfully!');
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <label>
        Recipe Name:
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </label>
      <h3>Ingredients:</h3>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <label>
            Name:
            <input
              type="text"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, 'name', e.target.value)
              }
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, 'quantity', e.target.value)
              }
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default AddRecipe;
