export interface StoreEntity {
  _id?: string
  title: string
  name: string
  type: string
  description: string
  details: Details
  price: number
  amount: number
}


type Details = {
  [key in string]: string | number | boolean
}