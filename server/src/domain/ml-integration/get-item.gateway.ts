import axios from 'axios';
import { mlApiUrl } from './api';

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

export const getMercadoLibreItemGateway = async ({ id }: { id: string }): Promise<GetMLItemResponseType>  => {
    try {
        const response = await axios.get(`${mlApiUrl}/items/${id}`)

        return response.data as GetMLItemResponseType
    } catch (error) {

        throw new Error(error as string)
    }
}