import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../../data/movies.js';

const MovieLayout = () => {
  const params = useParams();
  const [movie,setMovie] = useState(null);

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

    useEffect(()=>{
        setLoading(true)
        const newMovie = movies.filter(el=>el.id === parseInt(params.id))
        setTimeout(()=>{
          if(newMovie.length >0){
              setMovie(newMovie)
              setLoading(false)
          }else{
              setError(true)
              setLoading(false)
          }
       
       },3000)
    },[])
    return (
    
        <div className="section movie-page">


        {
            movie && movie.length > 0 && (
                
        <div className="container">
                        <div className="left-column">
                            <h1>Movie id {params.id}</h1>
                            <h1>{movie[0].title}</h1>
                            <p>{movie[0].description}</p>
                        </div>
                        <div className="right-column">
                            <h1>Image</h1>
                        </div>

                        
        </div>
                
            )
        }
        {
        loading && !error && (
            <h1>Loading ...</h1>
        )
        }
        {
          error && (
            <div className="alert alert-danger">Error happened</div>
          )
        }
                </div>
    )
}

export default MovieLayout

