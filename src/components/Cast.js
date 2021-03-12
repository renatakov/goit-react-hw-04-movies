import React, { Component } from "react";

class Cast extends Component {
  state = {
    results: null,
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=f7853352d091e153fb30e4e16c6a4005`,
    )
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
    return (
      <>
        <div>
          {this.state.results && (
            <li>
              <h3>Casts</h3>

               {this.state.results.cast.map((item) => {
                 return <>
                 <img
                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                  width={150}
                  alt=""
                />;
                <h3>{item.name}</h3>;
                <p>Character: {item.character}</p>;
                </>
              })}
            </li>
          )}
        </div>
      </>
    );
  }
}

export default Cast;
