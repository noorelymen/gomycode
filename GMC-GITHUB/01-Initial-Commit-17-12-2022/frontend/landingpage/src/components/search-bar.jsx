import React from "react"
class SearchBar extends React.Component{
    
    render(){
        return <div className="form-group">
        <input type="text" className="form-control" placeholder="search..." />
        </div>
    }
}

export default SearchBar