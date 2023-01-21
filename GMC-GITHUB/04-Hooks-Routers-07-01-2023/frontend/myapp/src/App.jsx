import './App.css'
import Counter from './components/counter'
import Profile from "./components/prodile"
import UseEffectTuto from './components/useEffect-tuto'
import UseRefTuto from './components/useRef-tuto'
 export let a = 4
export let name="abdelkader"


function App() {
  
  // const b = 13
 
  // const title = <h1>Hey title</h1>
  // const isLoggedIn = false
  return (
    <div className="App">
      {/* {isLoggedIn ?  <h1>Logged in</h1> : <p>not logged in</p>} */}
      {/* <Profile /> */}
      {/* <Counter /> */}
      {/* <UseRefTuto /> */}
      <UseEffectTuto />
    </div>
    
  )
}

export default App
