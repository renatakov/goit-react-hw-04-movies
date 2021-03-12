import React, { Component } from "react";
import queryString from "query-string";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    results: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      const { query } = queryString.parse(this.props.location.search);
      if (query) {
        fetch(
          `https://api.themoviedb.org/3/search/movie/?api_key=f7853352d091e153fb30e4e16c6a4005&query=${query}`,
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              results: data.results,
            });
          });
      }
    }
  }

  getQuery = (value) => {
    this.props.history.push({
      ...this.props.location,
      search: `?query=${value}`,
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.results.map((item) => {
            return (
              <li>
                <Link to={`/movies/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Searchbar onSubmit={this.getQuery} />
      </>
    );
  }
}

export default MoviesPage;
