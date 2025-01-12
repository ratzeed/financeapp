import React, { useState } from 'react';
import axios from 'axios';

const AddIngredient = () => {
  const [name, setName] = useState('');
  const [costPerUnit, setCostPerUnit] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/ingredients/', { name, cost_per_unit: costPerUnit });
      alert('Ingredient added successfully!');
    } catch (error) {
      console.error('Error adding ingredient:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Ingredient</h2>
      <label>
        Ingredient Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Cost Per Unit:
        <input
          type="number"
          value={costPerUnit}
          onChange={(e) => setCostPerUnit(e.target.value)}
        />
      </label>
      <button type="submit">Add Ingredient</button>
    </form>
  );
};

export default AddIngredient;
