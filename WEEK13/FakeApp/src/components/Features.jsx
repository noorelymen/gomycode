import { slides } from '../data/slides.js'
import React from "react"

const Features = () => {
    return (
      <div className="features p-5">
  <div className="container">
    <h1 className="text-center fw-bold text-blue">Our Features</h1>
    <div className="row mt-5">
      <div className="col-md-8 offset-md-2">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" className="active" aria-current="true" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" className="" />
          </div>
          <div className="carousel-inner">
          {slides ? slides.map(slides =>{
                            return(
                              <div className={slides.id === 1 ? "carousel-item active" : "carousel-item"} key={slides.id} >
                                  <img src={slides.name} className="d-block w-100" alt="..." />
                              </div>
                            )
                            }) : "No Data"} 

            </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default Features