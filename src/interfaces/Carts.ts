export interface products {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
  thumbnail: string
}
export interface cartType {
  id: number
  products: Array<products>
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
