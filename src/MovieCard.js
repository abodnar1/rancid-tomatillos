import React from "react"

const MovieCard = ({ src, alt, id }) => {

  return (
    <div className="movie-card">
        <img className="movie-poster" src ={src} alt={alt} id={id}/>
    </div>
  )
}

export default MovieCard
