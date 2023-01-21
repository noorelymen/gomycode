import PropTypes from "prop-types"
const UsersCard =({item={name:"example",profession:"example profession",description:"example profession"}})=>{
   return (
  <div className="card mb-3" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{item.profession}</h6>
    <p className="card-text">
      {item.description}
    </p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

   )
}

export default UsersCard

UsersCard.propTypes ={
    item:PropTypes.exact({
        id:PropTypes.number,
        name:PropTypes.string,
        profession:PropTypes.string,
        description:PropTypes.string
    })
}