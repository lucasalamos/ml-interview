import axios from 'axios';

export interface GetMLItemResponseType {
    id: string, 
    title: string, 
    price: number, 
    condition: string, 
    shipping: {
    free_shipping: boolean
    }, 
    currency_id: string, 
    thumbnail: string
    initial_quantity: number
}

export const getMercadoLibreItemGateway = async ({ id }: { id: string }) => {
    const response = (await axios.get(`https://api.mercadolibre.com/items/${id}`)).data as GetMLItemResponseType

    return response
}