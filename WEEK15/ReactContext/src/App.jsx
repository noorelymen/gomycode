import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Login from './components/login';
import UserProfile from './components/user-profile'

function App() {
  const [username, setUsername] = useState(null)

  const [showProfile, setShowProfile] = useState(false)

  return (
    <div className="App">
      {/* <Login setUsername = {setUsername} /> old way with props */}
      {showProfile ? <UserProfile /> : <Login />}
      {/* WITH NORMAL REACT WE WOULD DO
      {showProfile ? <UserProfile setShowProfile = {setShowProfile} setUsername = {setUsername} /> : <Login setShowProfile = {setShowProfile} setUsername = {setUsername}/>}
      
      */}
    </div>
  )
}

export default App
