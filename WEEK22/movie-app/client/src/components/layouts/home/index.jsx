import React from 'react'
import NavBar from '../../nav-bar'

export default function HomeLayout({children}) {
  return (
    <>
        <NavBar />
        {children}
    </>
  )
}
