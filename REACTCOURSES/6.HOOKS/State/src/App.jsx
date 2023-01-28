import { useState } from 'react'
import './App.css'
import State from './state'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>React State</h1>
      <State />
    </div>
  )
}

export default App
