import React from "react"
import MovieCard from "./MovieCard"
import './Movies.css'

const Movies = ({ movies, displayMovieDetails }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        posterPath={movie.poster_path}
        id={movie.id}
        key={movie.id}
        // backdropPath={movie.backdrop_path}
        // title={movie.title}
        // avgRating={movie.average_rating}
        // releaseDate={movie.release_date}
        displayMovieDetails={displayMovieDetails}
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
