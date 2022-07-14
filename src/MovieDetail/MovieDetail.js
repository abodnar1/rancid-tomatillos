import React, { Component } from 'react'
import "./MovieDetail.css"
import { Link } from 'react-router-dom'

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      movieToDisplay: null,
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log("Error")
        }
      })
      .then(data => {
        this.setState({
          movieToDisplay: data.movie,
          isLoading: false,
        })
      })

      .catch(error => {
        this.setState({error: error.message})
        console.log("error")
      })
  }

  render() {
    return (
      <>
      {!this.state.isLoading &&
      <div className="detail-card">
        <div className="card-header">
          <h2>{this.state.movieToDisplay.title}</h2>
          <Link to={"/"}>
            <span className="material-symbols-outlined">cancel</span>
          </Link>
        </div>
        <img className="backdrop" src={this.state.movieToDisplay.backdrop_path} alt="image from movie"/>
        <div className="copy-wrapper">
          <div className="copy">
            <p>"{this.state.movieToDisplay.tagline}"</p>
            <p>{this.state.movieToDisplay.overview}</p>
            <p>Genres: {this.state.movieToDisplay.genres.join(', ')}</p>
            <p>{this.state.movieToDisplay.runtime} min.</p>
          </div>
          <div className="copy">
            <p>Budget: ${this.state.movieToDisplay.budget.toFixed(2)} / Revenue: ${this.state.movieToDisplay.revenue.toFixed(2)}</p>
            <p>Average rating {this.state.movieToDisplay.average_rating.toFixed(1)}/10</p>
            <p>{this.state.movieToDisplay.release_date}</p>
          </div>
        </div>
      </div>
       }
       </>
    )
  }
}

export default MovieDetail
