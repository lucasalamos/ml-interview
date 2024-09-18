


  
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
  }
}