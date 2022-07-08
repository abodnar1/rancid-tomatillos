import React from "react"

const MovieCard = ({ src, alt, id }) => {

  return (
    <div className="movie-card">
        <img src ={src} alt={alt} id={id}/>
    </div>
  )
}

export default MovieCard
