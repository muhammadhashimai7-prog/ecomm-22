"use client"

import { useCart } from "@/context/CartContext"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Checkout() {

  const { cart } = useCart()
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const router = useRouter()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  async function placeOrder() {
    if(!email || !address) {
      alert("Please fill all fields")
      return
    }

    await fetch("/api/orders",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email,
        address,
        total,
        items: JSON.stringify(cart)
      })
    })

    alert("Order Placed Successfully!")
    router.push("/")
  }

  return (
    <div className="min-h-screen p-10 bg-gray-100 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full mb-4"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <textarea
        placeholder="Address"
        className="border p-3 w-full mb-4"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
      />

      <p className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</p>

      <button
        onClick={placeOrder}
        className="bg-black text-white px-6 py-3 rounded w-full"
      >
        Place Order
      </button>

    </div>
  )
}