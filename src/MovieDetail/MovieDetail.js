import React, { Component } from 'react'
import "./MovieDetail.css"
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      movieToDisplay: null,
      trailerToDisplay: null,
      error: '',
    }
  }

  componentDidMount = () => {
      Promise.all([
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`),
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`)
      ])
      .then(response => {
        if (response[0].ok && response[1].ok) {
         return Promise.all(response.map(res => res.json()))
        } else {
          this.setState({error: "There was an error, please try again."})
          console.log("Error")
        }
      })
      .then(data => {
        console.log(data[1].videos)
        return this.setState({
          movieToDisplay: data[0].movie,
          trailerToDisplay: data[1].videos.find(video => video.type === 'Trailer'),
          isLoading: false,
        })
      }
      )
      .catch(error => {
        this.setState({error: error.message})
        console.log("error")
      })
  }

  render() {
    return (
      <>
      {this.state.error && <h2>{this.state.error}</h2>}
      {!this.state.isLoading &&
      <div className="detail-card">
          <div className="card-header">
            <h2>{this.state.movieToDisplay.title}</h2>
            <Link to={"/"}>
              <span className="material-symbols-outlined">cancel</span>
            </Link>
          </div>
          <ReactPlayer className="video-player"width="800px" height="500px" url={`https://www.youtube.com/watch?v=${this.state.trailerToDisplay.key}-U`} />
          <div className="copy-wrapper">
            <div className="copy">
              <p className="overview">{this.state.movieToDisplay.overview}</p>
            </div>
            <div className="copy">
              <p className="genres"><b>Genres:</b> {this.state.movieToDisplay.genres.join(', ')}</p>
              <p className="average-rating"><b>Average rating:</b> {this.state.movieToDisplay.average_rating.toFixed(1)}/10</p>
              <p className="release-date"><b>Release Date:</b> {this.state.movieToDisplay.release_date}</p>
              <p className="runtime"><b>Runtime:</b> {this.state.movieToDisplay.runtime} min</p>
            </div>
          </div>
        </div>
       }
      </>
    )
  }
}

export default MovieDetail
