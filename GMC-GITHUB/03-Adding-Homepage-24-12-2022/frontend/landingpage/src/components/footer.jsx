import PropTypes from "prop-types"
const Footer =({title="hello",description="hello desc",children})=>{
   return (
      <div className="footer bg-dark p-4" >
        {children}
          <h3 className="text-white text-center">
              {title}
          </h3>
      </div>
   )
}

export default Footer

Footer.propTypes ={
    title: PropTypes.string,
    description:PropTypes.string
}