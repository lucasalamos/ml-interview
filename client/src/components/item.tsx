import React from 'react';
import '../styles/item.scss'
import { Item} from '../entities/item.entity'
import { useNavigate } from 'react-router-dom';
import { conditionsMapper } from '../utils/conditions-mapper'


export const ItemComponent: React.FC<{item: Item}> = ({item}) => {

    const navigate = useNavigate();

    const navigateToItem = ({id} : {id: string}) => {
        navigate(`/items/${id}`)
      }

    

    return (
        <div className='item' onClick={() => navigateToItem({ id: item.id })}>
            
            <img className='image' src={item.picture}></img>
            
            <div className='info'>
                <h3>
                    $ {item.price.amount.toLocaleString().replace(/,/g, '.')}
                </h3>
                <p>
                    {item.title}
                </p>
            </div>
        
            <div className='tag'>
                {conditionsMapper[item.condition]}
            </div>
        </div>
    );
};
