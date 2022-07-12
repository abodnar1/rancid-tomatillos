import React, { Component } from "react"
import './App.css'
import movieData from "../movieData"
import Movies from "../Movies/Movies"
import MovieDetail from "../MovieDetail/MovieDetail"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      clickedMovie: null,
      isLoading: false,
      error: '',
    }
  }

  componentDidMount = () => {
    this.setState({isLoading: true})

    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log("Error")
        }
      })
      .then(data => {
        this.setState({
          movies: data.movies,
          isLoading: false,
        })
      })
      .catch(error => {
        this.setState({error: error.message})
        console.log("error")
      })
  }

  displayMovieDetails = (id) => {
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
          clickedMovie: data.movie,
          isLoading: false,
        })
      })
      .catch(error => {
        this.setState({error: error.message})
        console.log("error")
      })
  }

  closeMovieDetails = () => {
    this.setState({clickedMovie: null})
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Route
            exact path="/"
            render={() => <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>}
            />
          <Route
            exact path="/:id"
            render={() => <MovieDetail details={this.state.clickedMovie} closeMovieDetails={this.closeMovieDetails}/>}
          />
          <Footer />
      </div>
    )
  }
}

// {this.state.isLoading && <p className="loading">Loading...</p>}
// {this.state.error && <h2>{this.state.error}</h2>}
// {this.state.clickedMovie ?
  // <MovieDetail details={this.state.clickedMovie}  /> :
  // <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails} /> }
export default App;
