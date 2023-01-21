import './App.css'
import Profile from "./components/prodile"
 export let a = 4
export let name="abdelkader"


function App() {
  
  const b = 13
 
  const title = <h1>Hey title</h1>
  const isLoggedIn = false
  return (
    <div className="App">
      {/* {isLoggedIn ?  <h1>Logged in</h1> : <p>not logged in</p>} */}
      <Profile />
    </div>
    
  )
}

export default App
