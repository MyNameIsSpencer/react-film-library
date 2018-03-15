import React, {Component} from 'react';
import OneFilm from './OneFilm';

class FilmListing extends Component {
  handleFaveClick(e) {
    e.preventDefault();
    
  }

  render() {
    return(
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        { this.props.films.map(film =>
            <OneFilm film={film} />
          )}
      </div>
    )
  }
}

export default FilmListing;
