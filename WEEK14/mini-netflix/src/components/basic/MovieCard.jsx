import React from 'react'
import { useNavigate } from "react-router-dom"
// QUESTION 1
const MovieCard =({movie={id:1,poster:"https://via.placeholder.com/150",title:"Example title",description:"Example description"}})=>{
  const navigate = useNavigate()   
  return (
    <div className="card" onClick={()=>navigate(`/movie/${movie.id}`)}>
      <img src={movie.poster} className="card-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          {movie.rating}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
