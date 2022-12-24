import PropTypes from "prop-types"
const UsersCard = ({item={id:1, name:"Default Name", profession:"Default Profession", description:"Default Description", children}}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.profession}</h6>
                <p className="card-text">{item.description}</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}
export default UsersCard

UsersCard.propTypes = {
    item:PropTypes.exact({
        //this is a method to check object properties name value type...
        id:PropTypes.number,
        name:PropTypes.string,
        profession:PropTypes.string,
        description:PropTypes.string
    })
}