import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EstimatedCosts = () => {
  const [recipes, setRecipes] = useState([]);
  const [salesEstimates, setSalesEstimates] = useState({});
  const [ingredientCosts, setIngredientCosts] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/recipes'); 
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchData();
  }, []);

  
  const handleSalesChange = (recipeId, estimate) => {
    setSalesEstimates((prev) => ({
      ...prev,
      [recipeId]: estimate,
    }));
  };

  
  const calculateCosts = () => {
    let total = 0;
    const costs = {};

    recipes.forEach((recipe) => {
      const estimate = salesEstimates[recipe.id] || 0;

      recipe.ingredients.forEach((ingredient) => {
        const { id, name, cost_per_unit, quantity_per_recipe } = ingredient;
        const totalQuantity = estimate * quantity_per_recipe;

        if (!costs[id]) {
          costs[id] = {
            name,
            totalQuantity: 0,
            totalCost: 0,
          };
        }

        costs[id].totalQuantity += totalQuantity;
        costs[id].totalCost += totalQuantity * cost_per_unit;
        total += totalQuantity * cost_per_unit;
      });
    });

    setIngredientCosts(costs);
    setTotalCost(total);
  };

  return (
    <div>
      <h2>Estimated Costs</h2>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.name}</h3>
            <label>
              Estimated Sales:
              <input
                type="number"
                value={salesEstimates[recipe.id] || ''}
                onChange={(e) =>
                  handleSalesChange(recipe.id, parseInt(e.target.value, 10))
                }
              />
            </label>
          </div>
        ))}
      </div>

      <button onClick={calculateCosts}>Calculate Costs</button>

      <h3>Total Estimated Cost: ${totalCost.toFixed(2)}</h3>

      <div>
        <h4>Ingredient Breakdown:</h4>
        <ul>
          {Object.entries(ingredientCosts).map(
            ([id, { name, totalQuantity, totalCost }]) => (
              <li key={id}>
                {name}: {totalQuantity.toFixed(2)} units, Total Cost: ${totalCost.toFixed(2)}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default EstimatedCosts;
