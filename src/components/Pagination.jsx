import { useState } from 'react'
import ProductCard from './ProductCard'

const ITEMS_PER_PAGE = 8

const Pagination = ({ filteredProducts = [], addToCart }) => {
  const [page, setPage] = useState(1)

  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition-colors"
        >
          Prev
        </button>

        <span className="font-bold">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={startIndex + ITEMS_PER_PAGE >= filteredProducts.length}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
