import React from 'react'
import { useSelector } from "react-redux";


export default function CartPage() {
    const cart = useSelector((state) => state.CartReducer.cart);
    console.log(cart)
  return (
    <div>
        <br /><br /><br />
       <h3>{cart && cart[0].id}</h3>   
    </div>
  )
}
