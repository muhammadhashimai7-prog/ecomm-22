"use client"

import { useEffect, useState } from "react"

type Product = {
  id: string
  name: string
  price: number
  image: string
}

export default function Home() {

  const [products,setProducts] = useState<Product[]>([])
  const [slide,setSlide] = useState(0)

  const slides = [
    "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  ]

  useEffect(()=>{

    fetch("/api/products")
    .then(res=>res.json())
    .then(data=>setProducts(data))

  },[])

  useEffect(()=>{

    const interval = setInterval(()=>{
      setSlide((prev)=>(prev+1)%slides.length)
    },3000)

    return ()=>clearInterval(interval)

  },[])

  return (

<div className="bg-gray-50 min-h-screen">

{/* HERO SLIDER */}

<div className="relative h-[400px] overflow-hidden">

<img
src={slides[slide]}
className="w-full h-full object-cover transition-all duration-500"
/>

<div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">

<h1 className="text-5xl font-bold">
🔥 Mega Discount
</h1>

<p className="mt-3 text-lg">
Best Ecommerce Store Experience
</p>

<button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded font-bold">
Shop Now
</button>

</div>

</div>


{/* PRODUCTS */}

<div className="p-10">

<h2 className="text-3xl font-bold mb-6">
🔥 Trending Products
</h2>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

{products.map((p)=>(

<div key={p.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">

<img
src={p.image}
className="h-52 w-full object-cover"
/>

<div className="p-4">

<h3 className="font-bold text-lg">
{p.name}
</h3>

<p className="text-green-600 font-bold">
${p.price}
</p>

<p className="text-yellow-500">
⭐⭐⭐⭐⭐
</p>

<button className="mt-3 bg-black text-white px-4 py-2 rounded w-full">
Add To Cart
</button>

</div>

</div>

))}

</div>

</div>


{/* VIDEO SECTION */}

<div className="p-10 bg-white">

<h2 className="text-3xl font-bold mb-6 text-center">
Store Introduction
</h2>

<iframe
width="100%"
height="400"
src="https://www.youtube.com/embed/dQw4w9WgXcQ"
title="Store Video"
/>

</div>


{/* DISCOUNT BANNER */}

<div className="p-10 text-center bg-yellow-400">

<h2 className="text-4xl font-bold">
50% SALE 🔥
</h2>

<p className="mt-2">
Limited time offer
</p>

</div>


</div>

  )
}