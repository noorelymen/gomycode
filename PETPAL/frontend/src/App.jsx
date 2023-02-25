import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './pages/home/Home'
import Pets from './pages/pets/Pets'
import Pet from './pages/pet/Pet'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/pets" element={<Pets/>}></Route>
      <Route path="/pets/:id" element={<Pet/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
