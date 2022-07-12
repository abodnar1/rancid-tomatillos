import React from "react"
import './MovieCard.css'
// import MovieDetail from './MovieDetail'

const MovieCard = ({ posterPath, id, backdropPath, title, avgRating, releaseDate, displayMovieDetails }) => {


  return (
    <div className="movie-card">
        <img onClick={() => displayMovieDetails(id)} className="movie-poster" src={posterPath} alt={title} id={id} />
    </div>
  )
}

export default MovieCard
