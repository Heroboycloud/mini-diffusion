'use client'
import React,{useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

function Page() {
    const { current_user } = useAuthContext()
    const router = useRouter()
    const [user,setUser] = useState(null);
    useEffect(() => {
        if (user == null) setUser("Not Available");
    }, [user])
    return (<h1>User: {current_user}Only logged in users can view this page</h1>);
}

export default Page;
