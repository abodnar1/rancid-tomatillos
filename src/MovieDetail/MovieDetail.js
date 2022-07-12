import React, { Component } from 'react'
import "./MovieDetail.css"

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloading: false,
      movieToDisplay: {}
    }
  }

  componentDidMount = (id) => {

    this.setState({isLoading: true})
    console.log(this.state.isLoading)

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
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
        console.log(data.movie)
      })
      .catch(error => {
        this.setState({error: error.message})
        console.log("error")
      })
  }

    // render() {
    //   console.log("hi")
    //   return <h1>Hi</h1>
    // }
  render() {
    return (
      {this.state.movieToDisplay !== {} ?
        <MovieDetail details={this.state.clickedMovie}  /> :
        <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails} /> }

      <div className="detail-card">
      <div className="card-header">
      <h1>Hi</h1>
      <h2>{this.state.movieToDisplay.title}</h2>
      <span onClick={()=> console.log("hi")} className="material-symbols-outlined" style={{fontSize: 55}}>cancel</span>
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
    )
  }
}

export default MovieDetail
