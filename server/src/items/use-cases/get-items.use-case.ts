import { getMercadoLibreItemsGateway } from '../../ml-integration/get-items.gateway';
import { orderBy } from 'lodash'

export interface GetItemsResponseType {
  author: {
    name: string,
    lastname: string
  },
  categories: string[],
  items: {
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
  }[]
}

export const getItemsUseCase = async ({ query }: { query: string }): Promise<GetItemsResponseType> => {
  try {
    const mercadoLibreItems = await getMercadoLibreItemsGateway({ query })

    const author = {
      name: "lucas",
      lastname: "alamos"
    }

    const categoryFilter = mercadoLibreItems.available_filters.find(({ id }) => id === "category") // o usamos filters
    const categories = categoryFilter ? orderBy(categoryFilter.values.map(({ name }) => name), 'results', 'desc') : []

    //const categoryFilter2 = mercadoLibreItems.filters.find(({ id }) => id === "category") // o usamos filters
    //const categories = // path from root

    const items = mercadoLibreItems.results.map(({
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