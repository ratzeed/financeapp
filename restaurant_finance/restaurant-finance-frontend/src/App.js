import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import IngredientsPage from './pages/IngredientsPage';
import AddRecipePage from './pages/AddRecipePage';
import RecipeSalesEstimatedPage from './pages/RecipeSalesEstimatedPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/recipe-sales-estimate" element={<RecipeSalesEstimatedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
