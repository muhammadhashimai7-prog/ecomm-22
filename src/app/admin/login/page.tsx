"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function handleLogin(e:any){
e.preventDefault()

if(email === "admin@gmail.com" && password === "123456"){
localStorage.setItem("admin","true")
router.push("/admin/dashboard")
}else{
alert("Wrong Login Details")
}

}

return(

<div className="flex items-center justify-center min-h-screen bg-gray-100">

<form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">

<h1 className="text-2xl font-bold mb-6 text-center">
Admin Login
</h1>

<input
type="email"
placeholder="Email"
className="w-full border p-2 mb-4"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="w-full border p-2 mb-4"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="w-full bg-black text-white py-2">
Login
</button>

</form>

</div>

)

}