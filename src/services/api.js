const BASE_URL = 'https://fakestoreapi.com'

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`)
  return await res.json()
}

export const fetchSingleProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  return await res.json()
}

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/products/categories`)
  return await res.json()
}