import React from 'react'
import MovieCard from "../basic/MovieCard"
import { movies } from '../../data/movies'

export default function MovieListing() {
  return (
    <div className="section movie">
        <div className="container">
            <div className="content">
            <h1 className="section-title">Latest Movies</h1>
            <hr />
            <div className="row">
                {movies ? movies.map(movie =>{
                    return(
                        <div className="column" key={movie.id}> 
                            < MovieCard movie={movie} />
                        </div>
                    )
                }) : "No Data was found!"} 

            </div>
            </div>
            
        </div>
    </div>
  )
}
