"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard(){

const router = useRouter()

useEffect(()=>{

const admin = localStorage.getItem("admin")

if(!admin){
router.push("/admin/login")
}

},[])

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">
Admin Dashboard
</h1>

<div className="grid grid-cols-3 gap-6">

<div className="p-6 bg-gray-100 rounded">
<h2 className="text-xl font-semibold">Products</h2>
<p>Add / Manage Products</p>
</div>

<div className="p-6 bg-gray-100 rounded">
<h2 className="text-xl font-semibold">Orders</h2>
<p>View Customer Orders</p>
</div>

<div className="p-6 bg-gray-100 rounded">
<h2 className="text-xl font-semibold">Users</h2>
<p>Manage Users</p>
</div>

</div>

</div>

)

}