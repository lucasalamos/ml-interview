import axios from 'axios';

export interface GetMLItemDescriptionResponseType {
    plain_text: string, 
    text: string, 
}

export const getMercadoLibreItemDescriptionGateway = async ({ id }: { id: string }) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}/description`) 

        return response.data as GetMLItemDescriptionResponseType
    } catch (error) {
        throw new Error(error as string)
    }
}