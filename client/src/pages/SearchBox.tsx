import React, { useState, FormEvent } from 'react';
import '../styles/search-box.scss';
import { useNavigate } from 'react-router-dom';

import LogoMLImage2  from '../assets/images/logoml.svg'



import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const SearchBox: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (query.trim()) {
        // Navigate to the results page with the query as a URL parameter
        navigate(`/items?search=${encodeURIComponent(query)}`);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <img src={LogoMLImage2} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit" >
          <MagnifyingGlassIcon /> 
        </button>
      </form>
    </div>
  );
};



