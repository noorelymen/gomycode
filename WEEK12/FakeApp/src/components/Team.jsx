import teamImage from '../assets/mypic.jpeg'

const Team = () => {
    return (
        <div className="team p-5">
  <div className="container">
    <h1 className="fw-bold text-center text-blue">Our team</h1>
    <div className="row mt-5">
      <div className="col-md-4 mb-3">
        <div className="card h-100 shadow border-0">
          <img src={teamImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card h-100 shadow border-0">
          <img src={teamImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card h-100 shadow border-0">
          <img src={teamImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}


export default Team
