import { getMercadoLibreItemGateway } from '../../ml-integration/get-item.gateway'
import { getMercadoLibreItemDescriptionGateway } from '../../ml-integration/get-item-description.gateway'

import { GetItemResponseType } from '../types/item.types'

export const getItemUseCase = async ({ id }: { id: string }): Promise<GetItemResponseType> => {
  try {
    const [ mercadoLibreItem, mercadoLibreItemDescription ] = await Promise.all(
      [ 
        getMercadoLibreItemGateway({ id }),
        getMercadoLibreItemDescriptionGateway({ id})
      ]
    )

    const author = {
      name: "lucas",
      lastname: "alamos"
    }

    const item = {
      id: mercadoLibreItem.id,
      title: mercadoLibreItem.title,
      price: {
        currency: mercadoLibreItem.currency_id,
        amount: mercadoLibreItem.price,
        decimals: mercadoLibreItem.price - Math.floor(mercadoLibreItem.price)
      },
      picture: mercadoLibreItem.thumbnail, 
      condition: mercadoLibreItem.condition, 
      free_shipping: mercadoLibreItem.shipping.free_shipping, 
      sold_quantity: mercadoLibreItem.initial_quantity,
      description: mercadoLibreItemDescription.plain_text
    }
  
    return { author, item }
  } catch (error) {
    console.error('Error fetching data:', error);
    //res.status(500).json({ error: 'Failed to fetch data' });
    throw new Error('Error fetching data')
  }
}