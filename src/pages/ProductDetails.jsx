import { useEffect, useState, useContext } from 'react'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'

import toast from 'react-hot-toast'

const ProductDetails = () => {
  const { id } = useParams()

  const [product, setProduct] = useState(null)

  const [loading, setLoading] = useState(true)

  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${id}`
      )

      const data = await res.json()

      setProduct(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })

    toast.success('Added to cart')
  }

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <Link to="/" className="text-blue-800 hover:text-blue-700 font-bold mb-4 inline-block">
        &larr; Back to Products
      </Link>

      <div className="max-w-6xl mx-auto bg-gray-400 rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
            <img src={product.image} />

            <h2>{product.title}</h2>
        </Link>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-black mt-4">
            {product.description}
          </p>

          <p className="text-4xl font-bold text-green-800 mt-6">
            ${product.price}
          </p>

          {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-6">

            {/* Minus button */}
            <button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
                className="bg-gray-200 px-4 py-2 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            >
                -
            </button>

            {/* Quantity display */}
            <span className="text-2xl font-bold">
                {quantity}
            </span>

            {/* Plus button */}
            <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 px-4 py-2 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300"
            >
                +
            </button>
        </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-8 w-full bg-red-700 text-white py-4 rounded-xl text-lg hover:bg-red-600 duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails