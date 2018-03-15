import React, { Component } from 'react';
import './App.css';

import TMDB from './TMDB'
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import Fave from './Fave.js';


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      films: TMDB.films
    }
  }

  render() {
    return (
      <div className="film-library">
        <Fave/>
        <FilmListing films={this.state.films}/>
        <FilmDetails films={this.state.films}/>
      </div>
    );
  }
}

export default App;
