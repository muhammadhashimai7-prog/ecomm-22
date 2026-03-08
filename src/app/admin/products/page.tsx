"use client"

import { useState } from "react"

export default function Products(){

const[name,setName]=useState("")
const[price,setPrice]=useState("")
const[image,setImage]=useState("")
const[category,setCategory]=useState("")

async function addProduct(){

await fetch("/api/products",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
price:parseFloat(price),
image,
category
})
})

alert("Product Added")

}

return(

<div className="p-10">

<h1 className="text-2xl font-bold mb-6">
Add Product
</h1>

<input
className="border p-2 w-full mb-3"
placeholder="Product Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border p-2 w-full mb-3"
placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
/>

<input
className="border p-2 w-full mb-3"
placeholder="Image URL"
onChange={(e)=>setImage(e.target.value)}
/>

<input
className="border p-2 w-full mb-3"
placeholder="Category"
onChange={(e)=>setCategory(e.target.value)}
/>

<button
onClick={addProduct}
className="bg-black text-white px-4 py-2"
>
Add Product
</button>

</div>

)

}