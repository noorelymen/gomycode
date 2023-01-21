import HomeLayout from "../components/layouts/home"
import Hero from "../components/hero"
import About from "../components/about"
import Features from "../components/features"
import Team from "../components/team"
const HomePage =()=>{
    return <HomeLayout>
           <Hero />
           <About />
           <Features />
           <Team />
        </HomeLayout>
}

export default HomePage