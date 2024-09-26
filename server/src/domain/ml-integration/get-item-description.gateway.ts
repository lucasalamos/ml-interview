import axios from 'axios';
import { mlApiUrl } from './api';

export interface GetMLItemDescriptionResponseType {
    plain_text: string, 
    text: string, 
}

export const getMercadoLibreItemDescriptionGateway = async ({ id }: { id: string }) => {
    try {
        const response = await axios.get(`${mlApiUrl}/items/${id}/description`) 

        return response.data as GetMLItemDescriptionResponseType
    } catch (error) {
        throw new Error(error as string)
    }
}