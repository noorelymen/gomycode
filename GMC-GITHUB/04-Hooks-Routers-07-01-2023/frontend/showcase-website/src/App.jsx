import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import HomePage from './pages'
import NotFoundPage from "./pages/404"
import MemberDetails from "./pages/member-details"
import ServicesPage from "./pages/services"
function App() {

  return (
     <Router>
         <Routes>
            <Route path="" element={<HomePage /> } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team/:id" element={<MemberDetails />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
     </Router>
  )
}

export default App
