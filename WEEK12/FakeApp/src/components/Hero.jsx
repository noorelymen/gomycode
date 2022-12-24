import heroImage from '../assets/rightHeroImage.png'

const Hero = () => {
    return (
        <div className="hero bg-blue">
            <div className="container hero-content">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="text-white mb-0 fw-bold">
                                Welcome to our website
                            </h1>
                            <p className="text-white mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Autem a obcaecati natus asperiores eligendi quia tempore
                            </p>
                            <button className="btn btn-warning mt-2">Join now</button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center d-none d-md-block ">
                        <img src={heroImage} width="400"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero
