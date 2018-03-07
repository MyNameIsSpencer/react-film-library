import React, { Component } from 'react';
import './App.css';

import TMDB from './TMDB'
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';



class App extends Component {
  constructor(props) {
    super()
    this.state = ({

    })
  }

  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    );
  }
}

export default App;
