import './App.css'
import NavBar from './components/nav-bar'
import SearchBar from './components/search-bar'
import ProductCard from './components/product-card'
import Footer from './components/footer'
function App() {
 

  return (
    <div className="App">
      <NavBar />
      <div className="search-bar-container mt-5 container p-4">
        <SearchBar />
      </div>

      <div className="row p-5 mt-4">
          <div className="col-md-4">
            <ProductCard />
          </div>
          <div className="col-md-4">
            <ProductCard />
          </div>
          <div className="col-md-4">
            <ProductCard />
          </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
