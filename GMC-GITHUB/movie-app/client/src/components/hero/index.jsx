import React from 'react'
import "./style.css"
export default function Hero() {
  return (
    <div className="hero-wrapper d-flex justify-content-center align-items-center">
        <div className='overlay'></div>
        <div className="hero-content">
            <h1 className="text-white">Welcome to the movie app</h1>
        </div>
    </div>
  )
}
