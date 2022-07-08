import React from "react"

const Movies = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (
      <div>
        <MovieCard src={movies.poster_path} alt={movies.title}/>
      </div>
    )
  })

  return (
    <div className="movie-container">
      {movieCards}
    </div>
  )
}

export default Movies
