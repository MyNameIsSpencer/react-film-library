import React, {Component} from 'react';

class OneFilm extends Component {
  constructor(props){
    super(props)
    this.state={
      posterUrl:"https://image.tmdb.org/t/p/w780/"+props.film.poster_path,
      year: new Date(props.film.release_date).getFullYear()
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <img src={this.state.posterUrl} alt="Mooovai Purster"/>
        <h2> {this.props.film.title}</h2>
        <p> {this.state.year}</p>

      </div>
    )
  }
}

export default OneFilm;
