import React from "react"
import MovieCard from "./MovieCard"

const Movies = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        src={movie.poster_path}
        alt={movie.title}
        id={movie.id}
        key={movie.id}
      />
    )
  })

  return (
    <div className="movie-container">
      {movieCards}
    </div>
  )
}

export default Movies
