import React from "react"
// import MovieDetail from './MovieDetail'

const MovieCard = ({ posterPath, id, backdropPath, title, avgRating, releaseDate, displayMovieDetails }) => {

  // const handleClick = (event) => {
  //   event.preventDefault()
  //   console.log('HI')
  //   return(
  //     // < MovieDetail 
  //     //   posterPath={posterPath}
  //     //   id={id}
  //     //   backdropPath={backdropPath}
  //     //   title={title}
  //     //   avgRating={avgRating}
  //     //   releaseDate={releaseDate}
  //     // />
  //   )
  // }

  return (
    <div className="movie-card">
        <img onClick={displayMovieDetails} className="movie-poster" src={posterPath} alt={title} id={id}/>
    </div>
  )
}

export default MovieCard
