"use client";
import React,{useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })
    const [buttonDisabled,setbuttonDisabled]=React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async()=>{
        try {
            const response= await axios.post("/api/users/login",user);
            console.log("Login Success",response.data);
        } catch(error:any){
            console.log("Login failed",error.message)
            router.push("/profile")
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=> {
        if(user.email.length >0 && user.password.length >0){
            setbuttonDisabled(false)
        } else {
            setbuttonDisabled(true);
        }
    },[user]);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white text-2xl">{loading?"processing":"signup"}</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input className="p-2 boreder-gray-300 rounded-lg mb-4 focus:outlone-none focus:border-gray-600" id="email" type="text" value={user.email} 
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input className="p-2 boreder-gray-300 rounded-lg mb-4 focus:outlone-none focus:border-gray-600" id="password" type="password" value={user.password} 
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="password"
            />
            <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup here</button>
            <Link href="/signup">Sign Up</Link>
        </div>
    )
}