import React from 'react'
import img from '../../assets/home-banner.webp'

export default function Hero () {
  return (
    <div className="section hero">
        <div className="container">
            <div className="col left">

            </div>
            <div className="col right">
                <img className="hero-img" src={img} alt="" />
            </div>
        </div>
    </div>
  )
}
