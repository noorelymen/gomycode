import React from "react"
import PropTypes from "prop-types"
class SearchBar extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return <div className="form-group">
            <h1>{this.props.title}</h1>
        <input type="text" className="form-control" placeholder="search..." />
        </div>
    }
}

export default SearchBar

SearchBar.defaultProps={
    title:"this is search title"
}


SearchBar.propTypes ={
  title:PropTypes.string
}