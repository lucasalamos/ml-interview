import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ItemsPage } from './pages/items.page';
import { ItemPage } from './pages/item.page'
import { HomePage } from './pages/home.page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemPage />} />
      </Routes>
    </Router>
  );
};

export default App;


