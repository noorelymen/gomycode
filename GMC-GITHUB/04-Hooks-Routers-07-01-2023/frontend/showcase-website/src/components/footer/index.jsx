const Footer =()=>{
    return (
    <footer className="footer mt-5 bg-blue p-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <h3>
          <a href className="text-decoration-none link-light">FakeLogo</a>
        </h3> 
        <p className="text-warning">The best team that you will need</p>
      </div>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <h5 className="text-warning fw-bold">Help</h5>
            <p><a href="#" className="link-light text-decoration-none">Support</a></p>
            <p><a href="#" className="link-light text-decoration-none">Knowledge</a></p>
            <p><a href="#" className="link-light text-decoration-none">Tutorials</a></p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h5 className="text-warning fw-bold">Features</h5>
            <p><a href="#" className="link-light text-decoration-none">Screen sharing</a></p>
            <p><a href="#" className="link-light text-decoration-none">Ios and Android apps</a></p>
            <p><a href="#" className="link-light text-decoration-none">File sharing</a></p>
            <p><a href="#" className="link-light text-decoration-none">User management</a></p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h5 className="text-warning fw-bold">About us</h5>
            <p><a href="#" className="link-light text-decoration-none">Company</a></p>
            <p><a href="#" className="link-light text-decoration-none">Carrers</a></p>
            <p><a href="#" className="link-light text-decoration-none">Contact us</a></p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h5 className="text-warning fw-bold">Contact us</h5>
            <p><a href="#" className="link-light text-decoration-none">Company@gmail.com</a></p>
            <p><a href="#" className="link-light text-decoration-none">1-999-999-999</a></p>
            <p><a href="#" className="link-light text-decoration-none">150 Road example,16000</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
}

export default Footer