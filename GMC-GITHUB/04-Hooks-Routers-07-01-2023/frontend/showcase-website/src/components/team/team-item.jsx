import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
const TeamItem =({item={id:1,image:"https://via.placeholder.com/150",name:"example name",description:"example desc"}})=>{
  const navigate =useNavigate()    
return (
        <div className="card h-100 shadow border-0" onClick={()=>navigate(`/team/${item.id}`)}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold">{item.name}</h5>
          <p className="card-text">
            {item.description}
          </p>
        </div>
      </div>
    )
}
export default TeamItem
TeamItem.propTypes ={
    item:PropTypes.exact({
        id:PropTypes.number,
        image:PropTypes.string,
        name:PropTypes.string,
        description:PropTypes.string
    })
}