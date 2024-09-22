import axios from 'axios';

export interface GetMLCategoryResponseType {
    id: string, 
    name: string, 
    path_from_root: {
        id: string, 
        name: string, 
    }[], 
    
}

export const getMercadoLibreCategoryGateway = async ({ id }: { id: string }) => {
    const response = (await axios.get(`https://api.mercadolibre.com/categories/${id}`)).data as GetMLCategoryResponseType

    return response
}