import React from 'react'
import MovieItem from '../movie-item'

export default function MovieList({data}) {
  return (
    <div className="list-wrapper">
         <div className='list-heading'>
            <h3 className="text-white mb-3">Movies ...</h3>
            <div className='row'>
                  {data && data.map(item=>(
                     <div className="col-md-2" key={item.id}>
                        <MovieItem item={item} />
                     </div>
                  ))}
            </div>
         </div>

    </div>
  )
}
