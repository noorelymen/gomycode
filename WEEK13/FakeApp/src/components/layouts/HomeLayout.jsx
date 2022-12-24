import Header from "../Header"
import Hero from "../Hero"
import UnderHero from "../UnderHero"
import About from "../About"
import Features from "../Features"
import TeamLayout from "./TeamLayout"
import Footer from "../Footer"
import React from "react"

const HomeLayout = ({children}) => {
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