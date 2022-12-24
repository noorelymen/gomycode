import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import ProductCard from './components/ProductCard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      < Header />
      <div className="search-bar-container p-5 mt-5 ">
        < SearchBar />
      </div>
      
      <div className="row p-5 mt-4">
        {/* p-5 padding 5 mt margin top 5 */}
        {/* md medium screen */}
        <div className="col-md-4"> 
          < ProductCard />
        </div>

        <div className="col-md-4"> 
          < ProductCard />
        </div>

        <div className="col-md-4"> 
          < ProductCard />
        </div>
      </div>
      < Footer />
    </div>
  )
}

export default App
