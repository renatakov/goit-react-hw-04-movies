import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  state = {
    results: [],
  };
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=f7853352d091e153fb30e4e16c6a4005",
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(
          this.setState({
            results: data.results,
          }),
        );
      });
  }
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
      </>
    );
  }
}

export default Homepage;
