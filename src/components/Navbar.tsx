"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

 const [open,setOpen]=useState(false)

 return(

 <nav className="bg-black text-white px-6 py-4 flex justify-between">

 <h1 className="text-2xl font-bold text-yellow-400">
 NeoCart
 </h1>

 <button onClick={()=>setOpen(!open)} className="md:hidden">
 ☰
 </button>

 <ul className={`md:flex gap-6 ${open ? "block":"hidden"} md:block`}>

 <div className="flex gap-6">
  <Link href="/">Home</Link>
  <Link href="/shop">Shop</Link>
  <Link href="/cart">Cart</Link>
  <Link href="/checkout">Checkout</Link>
  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
</div>
 </ul>

 </nav>
 )
}