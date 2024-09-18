import axios from 'axios';

export interface GetMLItemDescriptionResponseType {
    plain_text: string, 
    text: string, 
}

export const getMercadoLibreItemDescriptionGateway = async ({ id }: { id: string }) => {
    const response = (await axios.get(`https://api.mercadolibre.com/items/${id}/description`)).data as GetMLItemDescriptionResponseType

    return response
}