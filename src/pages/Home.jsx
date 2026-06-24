import { useEffect, useState, useContext } from 'react'

import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import ImageSlider from '../components/ImageSlider'
import { fetchProducts } from '../services/api'
import { CartContext } from '../context/CartContext'

const Home = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  const { addToCart } = useContext(CartContext)

  // Load products once
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    const fetchCategories = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        const data = await res.json()
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
    }

    loadProducts()
    fetchCategories()
  }, [])

  // Filter products when category or products change
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(
        products.filter(product => product.category === selectedCategory)
      )
    }
  }, [selectedCategory, products])

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <ImageSlider />

      {/* Category Filter Buttons — above the grid */}
      <div className="flex gap-2 flex-wrap mb-6">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg text-sm ${
            selectedCategory === 'all' ? 'bg-black text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg capitalize text-sm ${
              selectedCategory === cat ? 'bg-black text-white' : 'bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
