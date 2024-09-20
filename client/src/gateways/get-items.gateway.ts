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
    const data = (await fetch(`http://localhost:5001/api/items?q=${query}`)
        .then(response => response.json())) as GetItemsResponseType
        //.catch(error => console.error('Error fetching data:', error))

    return data
}
