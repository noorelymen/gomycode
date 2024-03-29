import React from 'react'
import img from '../../assets/logo.png'

export default function Header() {
  return (
    <div className='section header'>
        <div className="container">
            <div className="logo">
                <img src={img} alt="" />
            </div>
            <div className="menu">
                <ul className="menu-items">
                    <li className="menu-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="/movies">Movies</a>
                    </li>
                    <li className="menu-item">
                        <a href="/about">About</a>
                    </li>
                    <li className="menu-item">
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="menu-item">
                        <a className="login-button" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
