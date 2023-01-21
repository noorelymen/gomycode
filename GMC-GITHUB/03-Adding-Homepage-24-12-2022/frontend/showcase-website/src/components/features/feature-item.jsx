import PropTypes from "prop-types"
const FeatureItem=({item={src:"https://via.placeholder.com/150",active:false}})=>{
    return (
        <div  className={item.active  ? "carousel-item active" :"carousel-item"}>
        <img src={item.src} className="d-block w-100" alt="..." />
      </div> 
    )
}

export default FeatureItem
FeatureItem.propTypes ={
    item:PropTypes.exact({
        id:PropTypes.number,
        src:PropTypes.string,
        active:PropTypes.bool
    })
}