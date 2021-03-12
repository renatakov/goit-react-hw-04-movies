// import React, { Component } from "react";

// class Reviews extends Component {
//   state = {
//     results: [],
//   };
//   render() {
//     fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=f7853352d091e153fb30e4e16c6a4005`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
//   render() {
//     return(
//       <>
//       <div>
//       {this.state.results && (
//         <>
//         <img src={`https://image.tmdb.org/t/p/original${this.state.results.profile_path}`} width={150} alt=""/>
//           <h3>{this.state.results.name}</h3>
//           <p>Character: {this.state.results.character}</p>
//         </>
//       )}
//     </div>
//       </>
//     )
//   }
// }

// export default Reviews;