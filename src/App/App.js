import React, { Component } from "react"
import "./App.css"
import Movies from "../Movies/Movies"
import MovieDetail from "../MovieDetail/MovieDetail"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoading: false,
      error: "",
    }
  }

  componentDidMount = () => {

    this.setState({isLoading: true})

    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          this.setState({error: "There was an error, please try again."})
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
          render={({ match }) => <MovieDetail id={match.params.id}/>}
        />
        <Footer />
      </div>
    )
  }
}

export default App
