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
          // need to do something other than just console.log (window.alert?)
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

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.isLoading && <p className="loading">Loading...</p>}
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route
          exact path="/"
          render={() => <Movies movies={this.state.movies}/>}
          />
        <Route
          exact path="/:id"
          render={({ match }) => {
            return <MovieDetail id={match.params.id}/>
          }}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
