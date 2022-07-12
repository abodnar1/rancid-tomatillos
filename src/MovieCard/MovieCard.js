import React from "react"
import './MovieCard.css'
import { Link } from "react-router-dom"

const MovieCard = ({ posterPath, id, backdropPath, title, avgRating, releaseDate, displayMovieDetails }) => {

  return (
    <Link to={`/${id}`} className="movie-card">
        <img onClick={() => console.log("hiiiiii")} className="movie-poster" src={posterPath} alt={title} id={id} />
    </Link>
  )
}

export default MovieCard
