interface User {
  userId: string
  username: string
  email: string
  avatar: string
  password: string
  birthdate: Date
  registeredAt: Date
}

interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

interface Dimensions {
  width: number
  height: number
  depth: number
}

interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

interface ProductData {
  products: Product[]
}

interface ProductCategory {
  slug: string
  name: string
  url: string
}

interface base64 {
  base64: string
  metadata: {
    width: number
    height: number
  }
}

interface Users {
  code: string
  message: string
  data: Data
  token: string
}

interface Data {
  user_id: number
  ou_code: string
  role_id: number
  role_name: string
  dept_id: number
  dept_code: string
  user_name: string
  name_th: string
  name_eng: string
  email: string
}
