import { Link } from "react-router-dom"
const NavBar =()=>{
    return (
       <header className="header sticky-md-top">
  <nav className="navbar position-absolute w-100 navbar-expand-lg navbar-dark bg-blue">
    <div className="container p-4">
      <a className="navbar-brand" href="#">FakeLogo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faq">Faq</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    )
}

export default NavBar