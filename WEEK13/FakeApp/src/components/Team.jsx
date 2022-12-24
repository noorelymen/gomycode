import teamImage from '../assets/mypic.jpeg'

const Team = ({item}) => {
    return (
        <div className="card h-100 shadow border-0">
          <img src={teamImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">{item.name}</h5>
            <p className="card-text">
              {item.description}
            </p>
          </div>
        </div>
    )
}

export default Team
