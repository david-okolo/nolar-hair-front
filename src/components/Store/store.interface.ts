export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
  count: number
  discount: number
}

export interface CartProduct extends Product {
  availableCount: number
}

export interface StoreCategory {
  id: number
  categoryName: string
  products: Array<Product>
}