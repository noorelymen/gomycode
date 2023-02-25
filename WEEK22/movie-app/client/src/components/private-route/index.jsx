import {Navigate} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
const PrivateRoute = ({children})=>{
    const [child,setChild]= useState(null)
    if(!localStorage.getItem("token")){
        return <Navigate to="/login" />
    }else{
        const token = localStorage.getItem("token")
        // validation de token
        const options = {
            url:"http://localhost:4000/api/auth/verifytoken",
            method:"GET",
            header:{
                Accept:"application/json",
                Authorization:token
            }
        }
        axios(options).catch(err=>{
            window.location='/login'
        }).then(res=>{
            if(res.status===200){
                setChild(children)
            }
        })

        return child
    }
}

export default PrivateRoute;

//OLD WAY

// import React from "react";
// import { Navigate } from "react-router-dom";
// export default function PrivateRoute({ children }) {
//   const token = localStorage.getItem("token");
//   if (token && token === "1234") {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }
