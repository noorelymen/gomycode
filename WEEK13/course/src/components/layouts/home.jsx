import Header from "../Header"
import Footer from "../Footer"
import React from "react"

const HomeLayout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            {children}
            <Footer/>
        </React.Fragment>
    )
}

export default HomeLayout