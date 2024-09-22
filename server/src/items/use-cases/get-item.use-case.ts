import { getMercadoLibreItemGateway } from '../../ml-integration/get-item.gateway'
import { getMercadoLibreItemDescriptionGateway } from '../../ml-integration/get-item-description.gateway'
import { getMercadoLibreCategoryGateway } from '../../ml-integration/get-category.gateway'

export interface GetItemResponseType {
  author: {
    name: string,
    lastname: string
  },
  item: {
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
    sold_quantity: number
    description: string
    categories: string[] // no va en el enunciado
  }
}

export const getItemUseCase = async ({ id }: { id: string }): Promise<GetItemResponseType> => {
  try {
    const [ mercadoLibreItem, mercadoLibreItemDescription ] = await Promise.all(
      [ 
        getMercadoLibreItemGateway({ id }),
        getMercadoLibreItemDescriptionGateway({ id})
      ]
    )

    const mercadoLibreCategories = await getMercadoLibreCategoryGateway({ id: mercadoLibreItem.category_id})
    const categories = mercadoLibreCategories.path_from_root.map((category) => category.name)

    const author = {
      name: "lucas",
      lastname: "alamos"
    }

    const priceSplitted = mercadoLibreItem.price.toString().split('.')

    const item = {
      id: mercadoLibreItem.id,
      title: mercadoLibreItem.title,
      price: {
        currency: mercadoLibreItem.currency_id,
        amount: Math.floor(mercadoLibreItem.price),
        decimals: priceSplitted.length > 1 ? parseInt(priceSplitted[1]) : 0
      },
      picture: mercadoLibreItem.thumbnail, 
      condition: mercadoLibreItem.condition, 
      free_shipping: mercadoLibreItem.shipping.free_shipping, 
      sold_quantity: mercadoLibreItem.initial_quantity,
      description: mercadoLibreItemDescription.plain_text,
      categories
    }
  
    return { author, item }
  } catch (error) {
    console.error('Error fetching data:', error);
    //res.status(500).json({ error: 'Failed to fetch data' });
    throw new Error('Error fetching data')
  }
}
