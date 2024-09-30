"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import React,{useState} from "react";
import { useRouter } from "next/navigation";


export default function Profilepage(){
    const router = useRouter()
    const [data,setData]= React.useState("nothing")
    const logout = () => {
        try {
            axios.get('/api/users/logout')
            toast.success('Logout successfull');
            router.push('/login')
        } catch (error:any) {
            console.log(error.message)

        }
    }
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }
    return (
        <div className="flex flex-col itens-center justify-center min-h-screen py-2">
            <h1>profile</h1>
            <hr />
            <p>profile Page</p>
            <h2 className="p-3 rounded bg-green-500">{data==='nothing' ? "Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />
            <button onClick={logout} className="flex items-center justify-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out">
    <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12H3m0 0l4-4m-4 4l4 4m4-4h8a2 2 0 012 2v0a2 2 0 01-2 2h-8m0-2h8m-8 0H3"
        />
    </svg>
    Logout
</button>
<button onClick={getUserDetails} className="flex items-center justify-center px-4 py-2 bg-red-green text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out">
    <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12H3m0 0l4-4m-4 4l4 4m4-4h8a2 2 0 012 2v0a2 2 0 01-2 2h-8m0-2h8m-8 0H3"
        />
    </svg>
    getUserDetails
</button>

        </div>
    )
}