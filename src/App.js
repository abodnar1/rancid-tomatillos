import React, { Component } from "react"
import './App.css'
import movieData from "./movieData"
import Movies from "./Movies"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    console.log(movieData)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rancid Tomatillos</h1>
          <Movies />
        </header>
      </div>
    )
  }
}

export default App;
