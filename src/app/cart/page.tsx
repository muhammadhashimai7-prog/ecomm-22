"use client"

import { useCart } from "@/context/CartContext"

export default function Cart() {

  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        🛒 Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your cart is empty. Add some products!
        </p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {cart.map(item => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex">
              
              <img
                src={item.image}
                className="w-32 h-32 object-cover"
                alt={item.name}
              />

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-bold text-xl text-black">{item.name}</h2>
                  <p className="text-green-600 font-semibold mt-1">${item.price.toFixed(2)}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="col-span-1 md:col-span-2 p-6 bg-yellow-400 rounded-lg text-black text-xl font-bold text-right">
            Total: ${total.toFixed(2)}
          </div>

        </div>
      )}

    </div>
  )
}