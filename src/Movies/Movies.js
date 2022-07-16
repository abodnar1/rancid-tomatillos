import React from "react"
import MovieCard from "../MovieCard/MovieCard"
import "./Movies.css"

const Movies = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        posterPath={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    )
  })

  return (
    <section className="movie-container">
      {movieCards}
    </section>
  )
}

export default Movies
