import React from 'react'
import Header from '../basic/Header'

export default function PageLayout({children}) {
  return (

    <>
        <Header />
        {children}
    </>
  )
}
