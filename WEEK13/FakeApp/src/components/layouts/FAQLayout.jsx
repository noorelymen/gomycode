import Header from "../Header"
import PageTtile from "../PageTitle"
import Accordion from "../Accordion"
import Footer from "../Footer"
import React from "react"

const FAQLayout = () => {
    return (
        <React.Fragment>
            <Header/>

            <PageTtile/>
             
            <Accordion/>
            <Footer/>
        </React.Fragment>
    )
}

export default FAQLayout