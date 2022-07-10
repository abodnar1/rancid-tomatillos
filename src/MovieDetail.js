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
          <p>"{details.tagline}"</p>
          <p>{details.overview}</p>
          <p>Genres</p>
          <p>{details.runtime} min.</p>
        </div>
        <div className="copy">
        <p>Budget: ${details.budget.toFixed(2)} / Revenue: ${details.revenue.toFixed(2)}</p>
        <p>Average rating {details.average_rating.toFixed(1)}</p>
        <p>{details.release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
