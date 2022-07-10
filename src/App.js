import React, { Component } from "react"
import './App.css'
import movieData from "./movieData"
import Movies from "./Movies"
import MovieDetail from "./MovieDetail"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      clickedMovie: null,
    }
  }

  componentDidMount = () => {
    console.log("didmount")
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(res => res.json())
      .then(data => {
        this.setState({movies: data.movies})
        console.log(this.state)
      })
  }

  displayMovieDetails = (id) => {
    const singleMovie = this.state.movies.find(movie => movie.id === id)

    this.setState({clickedMovie: singleMovie})
  }

  closeMovieDetails = () => {
    this.setState({clickedMovie: null})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rancid Tomatillos</h1>
        </header>
          {this.state.clickedMovie ? 
          <MovieDetail details={this.state.clickedMovie} closeMovieDetails={this.closeMovieDetails} /> : 
          <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails} /> }
      </div>
    )
  }
}

export default App;
