const Header = () => {
    return (
        <div className="header sticky-md-top">
            <div className="navbar position-absolute w-100 navbar-expand-lg navbar-dark bg-blue">
                <div className="container p-4">
                <a className="navbar-brand" href="#">FakeApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./index.html">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./faq.html">Faq</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header