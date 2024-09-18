import axios from 'axios';

export interface GetMLItemsResponseType {
    available_filters: {
      id: string,
      values: {
        id: string,
        name: string
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
    const response = (await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}`)).data as GetMLItemsResponseType

    return response
}