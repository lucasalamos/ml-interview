import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ItemsPage } from './pages/items';
import { ItemPage } from './pages/item'
import { HomePage } from './pages/home';

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


