const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">

      <div className="flex gap-4 items-center">

        <img
          src={item.image}
          className="h-16 w-16 object-contain"
        />

        <div>
          <h2 className="font-bold">{item.title}</h2>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>
        </div>

      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>

    </div>
  )
}

export default CartItem