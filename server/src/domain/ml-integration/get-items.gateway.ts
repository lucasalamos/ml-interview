import axios from 'axios';

export interface GetMLItemsResponseType {
    filters: {
      id: string,
      name: string,
      values: {
        id: string,
        name: string
        path_from_root: {
          id: string,
          name: string
        }[]
      }[]
    }[],
    results: {
      id: string, 
      title: string, 
      price: number, 
      condition: string, 
      shipping: {
        free_shipping: boolean
      }, 
      currency_id: string, 
      thumbnail: string
    }[]
  }

export const getMercadoLibreItemsGateway = async ({ query }: { query: string }) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}`)
    
    return response.data as GetMLItemsResponseType
  } catch (error) {

    throw new Error(error as string)
  }
}
