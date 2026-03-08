"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Product = {
  id: string
  name: string
  price: number
  image: string
}

type CartType = {
  cart: Product[]
  addToCart: (p: Product) => void
  removeFromCart: (id: string) => void
}

const CartContext = createContext<CartType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => setCart([...cart, product])
  const removeFromCart = (id: string) => setCart(cart.filter(p => p.id !== id))

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used inside CartProvider")
  return context
}