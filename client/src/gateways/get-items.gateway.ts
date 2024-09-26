import { apiUrl } from "./api"
import { ErrorResponse } from "./error"

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
  
export const getItemsGateway = async ({query} : {query: string}) => {
  const data = (await fetch(`${apiUrl}/items?q=${query}`)
      .then(response => response.json())) as GetItemsResponseType |  ErrorResponse

  return data
}
