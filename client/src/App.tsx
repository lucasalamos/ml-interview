import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ItemsPage } from './pages/items.page';
import { ItemPage } from './pages/item.page'
import { HomePage } from './pages/home.page';
import { CategoryProvider } from './context/category.context';

export const App: React.FC = () => {
  return (
    <CategoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items/:id" element={<ItemPage />} />
        </Routes>
      </Router>
    </CategoryProvider>

  );
};