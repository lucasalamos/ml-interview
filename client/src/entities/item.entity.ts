export type Item = { 
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
    sold_quantity?: number
    description?: string
    categories?: string[]
  }