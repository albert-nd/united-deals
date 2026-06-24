import { useState, useEffect } from 'react'

const AdminDashboard = () => {
  const [products, setProducts] = useState([])

  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: ''
  })

  // ADD PRODUCT
  const addProduct = () => {
    setProducts([
      ...products,
      { ...newProduct, id: Date.now() }
    ])
  }

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* ANALYTICS CARDS */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white p-4 rounded shadow">
          Total Products: {products.length}
        </div>

        <div className="bg-white p-4 rounded shadow">
          Revenue: $0
        </div>

        <div className="bg-white p-4 rounded shadow">
          Users: 0
        </div>

      </div>

      {/* ADD PRODUCT FORM */}
      <div className="bg-white p-4 rounded shadow mb-6">

        <h2 className="text-xl font-bold mb-4">
          Add Product
        </h2>

        <input
          placeholder="Title"
          className="border p-2 w-full mb-2"
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              title: e.target.value
            })
          }
        />

        <input
          placeholder="Price"
          className="border p-2 w-full mb-2"
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              price: e.target.value
            })
          }
        />

        <input
          placeholder="Image URL"
          className="border p-2 w-full mb-2"
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              image: e.target.value
            })
          }
        />

        <button
          onClick={addProduct}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Product
        </button>

      </div>

      {/* PRODUCT TABLE */}
      <div className="bg-white p-4 rounded shadow">

        <h2 className="text-xl font-bold mb-4">
          Products
        </h2>

        {products.map(product => (
          <div
            key={product.id}
            className="flex justify-between items-center border-b py-2"
          >

            <div>
              <p className="font-bold">
                {product.title}
              </p>

              <p>${product.price}</p>
            </div>

            <button
              onClick={() => deleteProduct(product.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default AdminDashboard