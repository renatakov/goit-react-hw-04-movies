import React, { Component } from "react";

class Reviews extends Component {
  state = {
    results: null,
  };
componentDidMount() {
  fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=f7853352d091e153fb30e4e16c6a4005`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
      this.setState({
        results: data,
      });
  });
}

  render() {
    return(
      <>
      <div>
      {this.state.results && (
        <li>
           <h3>Reviews</h3>
        {this.state.results.results.map((item) => {
        return <>
        <img src={`https://image.tmdb.org/t/p/original${item.author_details.avatar_path}`} width={150} alt=""/>
          <h3>{item.author_details.name}</h3>
          <h3>{item.author_details.username}</h3>
          <p>{item.author_details.rating}</p>
          <p>{item.content}</p>
        </>
        })}

        </li>
      )}
    </div>
      </>
    )
  }
}

export default Reviews;