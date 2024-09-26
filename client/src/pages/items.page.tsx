import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBox } from '../components/search-box';
import { getItemsGateway } from '../gateways/get-items.gateway';
import { Item } from '../entities/item.entity';
import { ItemPreview } from '../components/item-preview';
import { useCategoryContext } from '../context/category.context';
import { Loading } from '../components/loading';
import { Layout } from '../components/layout';
import { Error } from '../components/error';

export const ItemsPage: React.FC = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('search') || '';
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const { setCategoryContext } = useCategoryContext(); 

  useEffect(() => {
    setIsLoading(true)
    const getItems = async () => {
      const itemsResponse = await getItemsGateway({query})
      if ('error' in itemsResponse) {
        setError(itemsResponse.error);
      } else {
        setItems(itemsResponse.items.slice(0,4))
        setCategories(itemsResponse.categories)
        setCategoryContext(itemsResponse.categories)
      }
      
      setIsLoading(false)
    }

    if (query) {
      getItems()
    }
  }, [query, setCategoryContext]);

  const header = <SearchBox defaultValue={query}/>

  if (error) {
    return (
      <Layout
        header={header}
        content={<Error />}
      />)
  }

  if (isLoading) {
    return (
      <Layout
        header={header}
        content={<Loading />}
      />)
  }

  if (!items.length) {
    return (
      <Layout
        header={header}
        content={
          <div>
            No se han encontrado items
          </div>
        }
      />)
  }

  return (
    <Layout
      header={header} 
      content={
        <div>
          <p className='p'>{categories.join(' > ')}</p>
          <div className='items'>
              {items.map((item) => (
                  <ItemPreview item={item} key={item.id}/>
              ))}
          </div>
        </div>
    }
    />
  );
};