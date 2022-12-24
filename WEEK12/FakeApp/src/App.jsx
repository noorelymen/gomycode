import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import UnderHero from './components/UnderHero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      < Header />
      < Hero />
      < UnderHero />
      < About />
      < Features />
      < Team />
      < Footer />
    </div>
  )
}

export default App
