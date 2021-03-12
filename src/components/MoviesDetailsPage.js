import React, { Component } from "react";
import {Route, Link} from "react-router-dom"
import Cast from "./Cast";

class MoviesDetailsPage extends Component {
  state = {
    results: null,
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=f7853352d091e153fb30e4e16c6a4005`,
    )
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
            <>
              <img
                src={`https://image.tmdb.org/t/p/original${this.state.results.poster_path}`}
                width={250}
                alt=""
              />
              <h3>{this.state.results.title}</h3>
              <h3>Overview</h3>
              <p> {this.state.results.overview}</p>
              <h3>Genres</h3>
              {this.state.results.genres.map((item) => {
                return <p>{item.name}</p>;
              })}
            </>
          )}
          <Route path={this.props.match.path + "/cast"} component={Cast} />
          <Link to={this.props.match.url + '/cast'} />
        </div>
      </>
    );
  }
}

export default MoviesDetailsPage;
