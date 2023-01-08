import Header from "../Header"
import Footer from "../Footer"
import React from "react"

const HomeLayout = () => {
    return (
        <React.Fragment>
            <Header/>
                <div className="container hero-content">
                
                <div className="mb-4">
                <h1 className="text-blue fw-bold text-center">Contactes-nous</h1>
                <p className="text-center w-responsive mx-auto mb-5">Vous avez des questions? N'hésitez pas à nous contacter. Notre équipe vous répondra rapidement</p>
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" />
                            <label htmlFor="name" className>Votre nom</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" />
                            <label htmlFor="email" className>Votre E-mail</label>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control" />
                            <label htmlFor="subject" className>Objet</label>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="md-form">
                            <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                            <label htmlFor="message">Votre message</label>
                            </div>
                        </div>
                        </div>
                    </form>
                    <div className="text-center text-md-left">
                        <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Envoyer</a>
                    </div>
                    <div className="status" />
                    </div>
                    <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x" />
                        <p>Val d'Hydra, Alger</p>
                        </li>
                        <li><i className="fas fa-phone mt-4 fa-2x" />
                        <p>+213 45 67 43</p>
                        </li>
                        <li><i className="fas fa-envelope mt-4 fa-2x" />
                        <p>contact@gomycode.com</p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>

            <Footer/>
        </React.Fragment>
    )
}

export default HomeLayout