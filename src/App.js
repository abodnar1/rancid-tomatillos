import React, { Component } from "react"
import './App.css'
import movieData from "./movieData"
import Movies from "./Movies"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  displayMovieDetails = () => {
    console.log('Display')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rancid Tomatillos</h1>
          <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>
        </header>
      </div>
    )
  }
}

export default App;
