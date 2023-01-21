import './App.css'
import NavBar from './components/nav-bar'
import SearchBar from './components/search-bar'
import UsersCard from './components/users-card'
import Footer from './components/footer'
import {users} from "./data"
import HomeLyout from './components/layouts/home'
function App() {
 

  return (
    <>
    <HomeLyout > 
       <div className="search-bar-container mt-5 container p-4">
         <SearchBar title="search ..." />
       </div>
 
       <div className="row p-5 mt-4">
         {users ? users.map(item=>{
           return (
             <div className="col-md-4" key={item.id}>
             <UsersCard item={item}  />
           </div>
           )
         })  : "no data"} 
       </div>
 
     
     </HomeLyout>
    </>
  )
}

export default App
