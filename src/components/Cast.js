import React, { Component } from "react";

class Cast extends Component {
  state = {
    results: null,
  };
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=f7853352d091e153fb30e4e16c6a4005`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        results: data,
      });
    });
  }
  render() {
    return (
      <>
    <div>
    {this.state.results && (
      <li>
        <h3>Casts</h3>
       <img src={`https://image.tmdb.org/t/p/original${this.state.results.cast.profile_path}`} width={150} alt=""/>
          <h3>{this.state.results.cast.name}</h3>
          <p>Character: {this.state.results.cast.character}</p>
          </li>
    )}
    </div>
    </>
  )
  }
}

export default Cast;