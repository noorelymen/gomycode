import { useState } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from './components/pages/HomePage'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
  )
}

export default App

