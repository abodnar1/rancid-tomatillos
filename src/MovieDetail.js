import React from 'react'

const MovieDetail = ({ details }) => {
  return (
    <div>
      <div>
        <h2>{details.title}</h2>
        <img src={details.backdrop_path}/>
      </div>
      <div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
