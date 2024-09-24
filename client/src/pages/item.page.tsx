import React, { useEffect, useState }  from 'react';
import { getItemGateway } from '../gateways/get-item.gateway';
import { Item } from '../entities/item.entity';
import { useParams } from 'react-router-dom';
import { SearchBox } from '../components/search-box';
import '../styles/item.scss'
import { conditionsMapper } from '../utils/conditions-mapper';
import { useCategoryContext } from '../context/category.context';
import { Loading } from '../components/loading';

export const ItemPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { categoryContext } = useCategoryContext();

  useEffect(() => {
    setIsLoading(true)
    const getItem = async () => {
      const itemResponse = await getItemGateway({id})
      setItem(itemResponse.item)
      setIsLoading(false)
    }
    if (id) {
      getItem() 
    }
  }, [id]);

  return (
    <div>
      <div className='header'>
        <SearchBox />
      </div>
      <div className="content">
        {isLoading ? 
          <Loading />  
      : (
        <div>
          <p className='p'>{categoryContext.join(" - ")}</p>
          <div className="item">
            <div className='summary'>
              <img className='image' src={item?.picture} alt='item-image'></img> 
              <div className='details'>
                <p> {conditionsMapper[item?.condition || 'used']} - {item?.sold_quantity} vendidos</p>
                <h3> {item?.title} </h3>
                <div className='price'>
                  <h1> $ {item?.price.amount.toLocaleString().replace(/,/g, '.')}</h1>
                  <p> {item && item.price.decimals.toString().length > 1 ? item?.price.decimals : item?.price.decimals.toString()+"0"} </p>
                </div>
                <button className='button'>
                  Comprar
                </button>
              </div>
            </div>
            <div className='description'>
              <h3>Descripción del producto</h3>
              <p className='p'>
                {item?.description}
              </p>
            </div>
          </div>
        </div>
        )}
       </div>
    </div>   
  );
};