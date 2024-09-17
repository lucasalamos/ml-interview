import React, { useEffect, useState } from 'react';
import '../styles/items.scss'
import { useLocation , useNavigate } from 'react-router-dom';

interface Item {
  id: number;
  title: string;
  body: string;
}

export const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToItem = ({id} : {id: number}) => {
    navigate(`/items/${id}`)
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || '';
    if (query) {
      // fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      //   .then(response => response.json())
      //   .then(data => setResults(data))
      //   .catch(error => console.error('Error fetching data:', error));
      console.log('holaa', query)
      setItems([
        {
          id: 4,
          title: query,
          body: 'mybody'
        }
      ])
    }
  }, [location.search]);

  return (
    <div className="items-page">
      <h2>Items</h2>
      <div className="items">
        {items.map((item) => (
          <div key={item.id} className="item-item" onClick={() => navigateToItem({id: item.id})}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

