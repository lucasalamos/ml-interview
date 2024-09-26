import { apiUrl } from "./api"
import { ErrorResponse } from "./error"

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
  }
}
  
export const getItemGateway = async ({id} : {id?: string}) => { 
    const data = (await fetch(`${apiUrl}/items/${id}`)
    .then(response => response.json())) as GetItemResponseType | ErrorResponse
   
    return data
}
