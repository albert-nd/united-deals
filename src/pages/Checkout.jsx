import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const { cart } = useContext(CartContext)

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <Link to="/cart" className="text-blue-800 hover:text-blue-700 font-bold mb-4 inline-block">
        &larr; Back to Cart
      </Link>

      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* SHIPPING FORM */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Shipping Details
          </h2>

          <input
            placeholder="Name"
            className="w-full p-3 border mb-3 rounded"
          />

          <input
            placeholder="Email"
            className="w-full p-3 border mb-3 rounded"
          />

          <input
            placeholder="Address"
            className="w-full p-3 border mb-3 rounded"
          />

          <input
            placeholder="Phone"
            className="w-full p-3 border mb-3 rounded"
          />

        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Order Summary
          </h2>

          {cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between mb-2"
            >
              <span>
                {item.title} x {item.quantity}
              </span>

              <span className='text-green-600'>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <hr className="my-4" />

          {/* SUBTOTAL */}
          <div className="flex justify-between font-bold">
            <span>Subtotal</span>
            <span className='text-green-600'>${subtotal.toFixed(2)}</span>
          </div>

          {/* TOTAL */}
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span className='text-green-600'>${subtotal.toFixed(2)}</span>
          </div>

          {/* PAYMENT BUTTON */}
          <button className="w-full bg-green-800 hover:bg-green-600 duration-300 text-white py-3 mt-6 rounded-lg">
            Pay Now
          </button>

        </div>
      </div>
    </div>
  )
}

export default Checkout