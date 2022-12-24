//we have to import the components and modules we need where we need them not in the App.jsx
import PropTypes from "prop-types"

const Footer = ({title, description}) => {
    //console.log(props)
    // props = {
    //     title : "",
    //     description: "",
    // }
    //either passing props to the function name and then get the values byt typing props.title
    // const Footer = (props) => {}
    //or destructuring props in 3 ways
    //either in the function name: const Footer = ({title, description}) 
    //we can define default values for props: const Footer = ({title="default title", description="default description"}) 
    //const {title, description} = props
    //const title = props.title

    return (
        <div className="footer bg-dark p-4">
            <h3 className="text-white text-center">
                {/* {props.title}{console.log(props)} */}
                {title/* to display it */}
            </h3>
        </div>

    )
}
    
export default Footer

//we use the proptypes library to valiadte the props

Footer.propTypes = {
    title: PropTypes.string.isRequired, //to check the type of a prop and to define it as requried
    description: PropTypes.string.isRequired //if we don't pass this value and if it's not a string we get an error in the console
}

