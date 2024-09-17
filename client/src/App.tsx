import React from 'react';
import './styles/App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Item from './pages/Item';
import Items from './pages/Items';
import SearchBox from './pages/SearchBox';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<Item />} />
      </Routes>
    </Router>
  );
};

export default App;


