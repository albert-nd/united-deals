import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="p-6 min-h-screen">
      <Link to="/" className="text-blue-800 hover:text-blue-700 font-bold mb-4 inline-block">
        &larr; Back to Products
      </Link>

      <h1 className="text-3xl font-bold mb-6">
        Cart
      </h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}

          <div className="mt-6 text-xl text-green-500 font-bold">
            Total: ${total.toFixed(2)}
          </div>

          <Link to="/checkout">
            <button className="mt-4 bg-green-800 hover:bg-green-600 duration-300 text-white px-6 py-3 rounded">
              Checkout
            </button>
          </Link>
        </>
      )}

    </div>
  )
}

export default Cart