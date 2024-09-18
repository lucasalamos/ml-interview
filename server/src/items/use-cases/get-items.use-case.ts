import { GetItemsResponseType } from '../types/item.types'
import { getMercadoLibreItemsGateway } from '../../ml-integration/get-items.gateway';

export const getItemsUseCase = async ({ query }: { query: string }): Promise<GetItemsResponseType> => {
  try {
    const mercadoLibreItems = await getMercadoLibreItemsGateway({ query })

    const author = {
      name: "lucas",
      lastname: "alamos"
    }

    const categoryFilter = mercadoLibreItems.available_filters.find(({ id }) => id === "category")
    const categories = categoryFilter ? categoryFilter.values.map(({ name }) => name) : []

    const items = mercadoLibreItems.results.slice(0,4).map(({
      id, title, price, condition, shipping, currency_id, thumbnail
    }) => ({
          id,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals: price - Math.floor(price)
        },
        picture: thumbnail, 
        condition, 
        free_shipping: shipping.free_shipping, 
    }))
  
    return {
      author, categories, items
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    //res.status(500).json({ error: 'Failed to fetch data' });
    throw new Error('Error fetching data')
  }
}