import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import SearchBar from './components/SearchBar'
import UsersCard from './components/UsersCard'
import { users } from './data/data.js'
import HomeLayout from './components/layouts/home'

function App() {
  const [count, setCount] = useState(0)

  return (

  //   <div className="App">
  //   < Header />
  //   <div className="search-bar-container p-5 mt-5 ">
  //     < SearchBar title = "Search" description = "Search Desc" />
  //   </div>
    
  //   <div className="row p-5 mt-4">
  //     {users ? users.map(item =>{
  //       return(
  //         // in react and when we use map the parent should have a unique key for the element to be identified
  //         <div className="col-md-4" key={item.id}> 
  //           < UsersCard item={item} />
  //         </div>
  //       )
  //       }) : "No Data"} 
  //       {/* for each item in the users tab if users exist and is not emty return  */}

  //   </div>
  //   < Footer title="this is a title" description='this is a description'/>
  // </div>

  <HomeLayout>
    <div className="App">
    <div className="search-bar-container p-5 mt-5 ">
      < SearchBar title = "Search" description = "Search Desc" />
    </div>
    
    <div className="row p-5 mt-4">
      {users ? users.map(item =>{
        return(
          // in react and when we use map the parent should have a unique key for the element to be identified
          <div className="col-md-4" key={item.id}> 
            < UsersCard item={item} />
          </div>
        )
        }) : "No Data"} 

    </div>
  </div>
  </HomeLayout>

  )
}

export default App
