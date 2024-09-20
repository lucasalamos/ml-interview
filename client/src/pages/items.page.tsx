import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBox } from '../components/search-box';
import { getItemsGateway } from '../gateways/get-items.gateway';
import { Item } from '../entities/item.entity';
import { ItemComponent } from '../components/item';

export const ItemsPage: React.FC = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('search') || '';

  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsResponse = await getItemsGateway({query})
      setItems(itemsResponse.items.slice(0,4))
      setCategories(itemsResponse.categories)
    }

    if (query) {
      getItems()
    }
  });

  console.log('items', items)


  return (
    <div>
      <div className='header'>
        <SearchBox defaultValue={query}/>
      </div>

      <div className="content">
        <p className='p'>{categories}</p>


        <div className="items">
            {items.map((item) => (
                <ItemComponent item={item} key={item.id}/>
            ))}
        </div>
      </div>        
    </div>
  );
};