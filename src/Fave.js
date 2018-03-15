import React, {Component} from 'react';

class Fave extends Component {
  handleClick(e) {
    e.preventDefault();
    console.log("handling fave click");
  }



  render() {
    return(
      <div className="film-row-fave add_to_queue">
        <button onClick={(e) => this.handleClick(e)}>MyButton</button>
        <i className="material-icons">add_to_queue</i>
      </div>
    )
  }
}

export default Fave
