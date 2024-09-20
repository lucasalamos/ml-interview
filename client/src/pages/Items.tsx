import React, { useEffect, useState } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import { SearchBox } from '../components/search-box';
import { Items } from '../components/items';
import { getItemsGateway } from '../gateways/get-items.gateway';

export interface Item { // esto no va aca
  id: string, 
  title: string, 
  price: {
      currency: string,
      amount: number,
      decimals: number
  }, 
  condition: string, 
  free_shipping: boolean
  picture: string
}

export const ItemsPage: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  const params = new URLSearchParams(location.search);
  const query = params.get('search') || '';

  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const navigateToItem = ({id} : {id: number}) => {
    navigate(`/items/${id}`)
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || '';

    const getItems = async () => {
      const itemsResponse = await getItemsGateway({query})
      setItems(itemsResponse.items.slice(0,4))
      setCategories(itemsResponse.categories)
    }

    if (query) {
      getItems()
      
    }
  }, [location.search]);

  console.log('items', items)


  return (
    <div>
      <div className='header'>
        <SearchBox defaultValue={query}/>
      </div>

      <div className="content">
        <p className='p'>Category1, Category2</p>


        <div className="items">
            {items.map((item) => (
                <div key={item.id} className="item">
                    <img src={item.picture}>
                    </img>
                    {item.title}
                </div>
            ))}
        </div>
      </div>        
    </div>
  );
};