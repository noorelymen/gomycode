import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomeLayout from './components/layouts/HomeLayout'
import FAQLayout from './components/layouts/FAQLayout'
import ServicesLayout from './components/layouts/ServicesLayout'
import ContactLayout from './components/layouts/ContactLayout'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout/>} />
          <Route path="/faq" element={<FAQLayout/>} />
          <Route path="/services" element={<ServicesLayout/>} />
          <Route path="/contact" element={<ContactLayout/>} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
  )
}

export default App
