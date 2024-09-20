import React, { useEffect, useState }  from 'react';
import { getItemGateway } from '../gateways/get-item.gateway';
import { Item } from '../entities/item.entity';
import { useParams } from 'react-router-dom';
import { SearchBox } from '../components/search-box';
import '../styles/item-description.scss'

export const ItemPage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item>();

  useEffect(() => {

    const getItem = async () => {
      const itemResponse = await getItemGateway({id})
      setItem(itemResponse.item)
    }

    if (id) {
      getItem()
      
    }
  });

  return (
    <div>
      <div className='header'>
        <SearchBox />
      </div>
      <div className="content">
        <p className='p'>Categories...</p>

        <div className="item-description">
            <div className='summary'>
              <img src={item?.picture}></img> 
              <div>
                <p> {item?.condition} - {item?.sold_quantity} vendidos</p>
                <h3> {item?.title} </h3>
                <h2> $ {item?.price.amount}.{item?.price.decimals} </h2>
                <button>
                  Comprar
                </button>
              </div>
            </div>
           
            <div className='description'>
              <h3>Descripción del producto</h3>
              {item?.description}
            </div>
          </div>
        </div>
      </div>   
  );
};

