import React, { Component } from "react"
import './App.css'
import movieData from "./movieData"
import Movies from "./Movies"
import MovieDetail from "./MovieDetail"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      clickedMovie: null,
    }
  }

  displayMovieDetails = (id) => {
    const singleMovie = this.state.movies.find(movie => movie.id === id)

    this.setState({clickedMovie: singleMovie})
  }

  render() {
    console.log("ClickedMovie:", this.state.clickedMovie)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rancid Tomatillos</h1>
          {this.state.clickedMovie ? <MovieDetail /> : <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/> }

        </header>
      </div>
    )
  }
}

export default App;
