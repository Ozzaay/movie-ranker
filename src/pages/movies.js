// import React, { useState, useEffect } from 'react';

// function Movieselect(props) {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState('');
//   const [selectedMoviesList, setSelectedMoviesList] = useState([]);

//   const fetchMovies = async () => {
//     const response = await fetch("http://localhost:5000/movies", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const jsonData = await response.json();
//     setMovies(jsonData.rows);
//   }

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const handleMovieChange = (event) => {
//     setSelectedMovie(event.target.value);
//   };

//   const addSelectedMovie = async () => {
//     const response = await fetch("http://localhost:5000/usermovies", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user_id: props.user_id,
//         movie_id: selectedMovie,
//       }),
//     });
//     const jsonData = await response.json();
//     setSelectedMoviesList([...selectedMoviesList, jsonData]);
//   };

//   const getSelectedMovieData = async () => {
//     // Fetching movie data for all selected movies
//     const selectedMovieData = await Promise.all(
//       selectedMoviesList.map(async (movie) => {
//         const response = await fetch("http://localhost:5000/selectedmovies", { // Updated endpoint name
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             movie_title: movie.movie_title, // Use the correct property name
//           }),
//         });
//         return response.json();
//       })
//     );
  
//     setSelectedMoviesList(selectedMovieData);
//   };
  

//   return (
//     <div>
//       <label htmlFor="movieDropdown">Select a Movie Title: </label>
//       <select
//         id="movieDropdown"
//         value={selectedMovie}
//         onChange={handleMovieChange}
//       >
//         <option value="">Select a movie</option>
//         {movies.map((movie) => (
//           <option key={movie.id} value={movie.id}>
//             {movie.title}
//           </option>
//         ))}
//       </select>
//       <button onClick={addSelectedMovie}>Add Movie</button>
//       <button onClick={getSelectedMovieData}>Get Movie Data</button>
//       <div>
//         <h2>Selected Movies List:</h2>
//         <ul>
//           {selectedMoviesList.map((selectedMovie) => (
//             <div key={selectedMovie.id}>
//               <h3>{selectedMovie.title}</h3>
//               <p>Rating: {selectedMovie.rating}</p>
//               <p>Year: {selectedMovie.year}</p>
//               <p>Plot: {selectedMovie.plot}</p>
//             </div>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Movieselect;
