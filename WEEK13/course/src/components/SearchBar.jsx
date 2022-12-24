import React from "react"
import PropTypes from "prop-types"
class SearchBar extends React.Component {

    constructor(props) {
        super()
    }
    render(){
        return <div className="form-inline my-2 my-lg-0">
                    <h1>{this.props.title}</h1>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>

    }
}

export default SearchBar

SearchBar.defaultProps = {
    title: "this is a default title"
}


SearchBar.propTypes = {
    title: PropTypes.string.isRequired, //to check the type of a prop and to define it as requried
    description: PropTypes.string.isRequired //if we don't pass this value and if it's not a string we get an error in the console
}
