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
  
  export const getItemGateway = async ({id} : {id?: string}) => { //sacar el ?
    const data = (await fetch(`http://localhost:5001/api/items/${id}`)
        .then(response => response.json())) as GetItemResponseType
        //.catch(error => console.error('Error fetching data:', error))

    return data
}
