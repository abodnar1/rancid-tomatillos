import React from 'react'
import "./MovieDetail.css"

const MovieDetail = ({ details , closeMovieDetails }) => {
  return (
    <div className="detail-card">
        <div className="card-header">
          <h2>{details.title}</h2>
          <span onClick={()=> closeMovieDetails()} className="material-symbols-outlined" style={{fontSize: 55}}>cancel</span>
        </div>
        <img className="backdrop" src={details.backdrop_path}/>
      <div className="copy-wrapper">
        <div className="copy">
          <p>Tagline</p>
          <p>Overview</p>
          <p>Genres</p>
          <p>Runtime</p>
        </div>
        <div className="copy">
        <p>Budget/Revenue</p>
        <p>{details.average_rating}</p>
        <p>{details.release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
