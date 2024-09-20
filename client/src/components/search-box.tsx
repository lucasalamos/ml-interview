import React, { useState, FormEvent } from 'react';
import '../styles/search-box.scss';
import { useNavigate } from 'react-router-dom';
import LogoMLImage  from '../assets/images/logoml.svg'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const SearchBox: React.FC<{defaultValue? : string}> = ({defaultValue}) => {
  const [query, setQuery] = useState<string>(defaultValue || '');


  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  }

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
        <img src={LogoMLImage} onClick={navigateToHome}/>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit" >
          <div className='icon'>
          <MagnifyingGlassIcon /> 

          </div>
        </button>
      </form>
    </div>
  );
};



