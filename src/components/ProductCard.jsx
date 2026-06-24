import { Link } from 'react-router-dom'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-xl p-3 md:p-4 shadow hover:bg-gray-50 duration-300 relative">
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded-lg text-xs">
        -40%
      </div>

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-36 w-full object-contain p-2 hover:scale-105 transition-transform duration-300"
        />
        <h2 className="font-semibold mt-3 text-sm line-clamp-2">
          {product.title}
        </h2>
      </Link>

      <div className="flex justify-between items-center mt-3">
        <p className="font-bold text-green-800 text-base">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-600 transition-colors duration-300"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default ProductCard
