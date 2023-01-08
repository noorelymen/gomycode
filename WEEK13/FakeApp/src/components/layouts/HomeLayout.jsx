import Header from "../Header"
import Hero from "../Hero"
import UnderHero from "../UnderHero"
import About from "../About"
import Features from "../Features"
import TeamLayout from "./TeamLayout"
import Footer from "../Footer"
import PopUp from "../modals/PopUp"
import React from "react"

const HomeLayout = () => {
    return (
        <React.Fragment>
            <Header/>
            <Hero/>
            <UnderHero/>
            <About/>
            <Features/>
            <TeamLayout/>
            <Footer/>
        </React.Fragment>
    )
}

export default HomeLayout