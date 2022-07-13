import React from "react"
import './MovieCard.css'
import { Link } from "react-router-dom"

const MovieCard = ({ id, title, posterPath }) => {

  return (
    <Link to={`/${id}`} className="movie-card">
      <img className="movie-poster" src={posterPath} alt={title} id={id} />
    </Link>
  )
}

export default MovieCard
