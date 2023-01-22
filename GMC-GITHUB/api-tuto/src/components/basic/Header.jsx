import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='section header'>
        <div className="container">
            <div className="logo">
                <h1>SHOP</h1>
            </div>
            <div className="menu">
                <ul className="menu-items">
                    <li className="menu-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="/movies">Products</a>
                    </li>
                    <li className="menu-item">
                        <a href="/about">About</a>
                    </li>
                    <li className="menu-item">
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="menu-item">
                        <Link className="login-button" to="/cart">Cart(<span className="cart-count">0</span>)</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
