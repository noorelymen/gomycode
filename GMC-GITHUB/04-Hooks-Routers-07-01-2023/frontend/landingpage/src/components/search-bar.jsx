import React from "react"
import PropTypes from "prop-types"
class SearchBar extends React.Component{
    constructor(props){
        super()   
        this.handleChangeSearch = this.handleChangeSearch.bind(this)
    }
    state ={
        search:"hello",
        title:"this is title"
    }
      handleChangeSearch(e){
        this.setState((prevState)=>{
            return  {
                search:e.target.value
            }
        })
    
        // console.log(this.state.search)
     }
     componentDidMount=()=>{
            console.log("hello component did mount")
    }
    componentDidUpdate(){
        console.log("component updated")
    }
    render(){
        return <div className="form-group">
            <h1>{this.props.title}</h1>
        <input type="text" onChange={this.handleChangeSearch} className="form-control" placeholder="search..." />
         <p>{this.state.search}</p>
         <p>{this.state.title}</p>
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