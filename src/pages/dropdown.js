import React, { useState, useEffect } from 'react';

function Movieselect({ user_id }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedMoviesList, setSelectedMoviesList] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch("http://localhost:5000/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await response.json();
    setMovies(jsonData.rows);
  }

  const fetchUserSelectedMovies = async () => {
    const response = await fetch(`http://localhost:5000/user_movies/${user_id}`);
    const jsonData = await response.json();
    setSelectedMoviesList(jsonData);
  }

  useEffect(() => {
    fetchMovies();
    fetchUserSelectedMovies();
  }, [user_id]);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const addSelectedMovie = () => {
    if (selectedMovie) {
      const movieToAdd = movies.find((movie) => movie.title === selectedMovie);
      setSelectedMoviesList([...selectedMoviesList, movieToAdd]);
      setSelectedMovie('');

      // lägg till filmer till användaren
      fetch(`http://localhost:5000/user_movies/${user_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId: movieToAdd.id }),
      });
    }
  };

  const clearSelectedMovies = () => {
    // radera alla filmer från användaren
    fetch(`http://localhost:5000/user_movies/${user_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setSelectedMoviesList([]);
  };

  return (
    <div>
      <label htmlFor="movieDropdown">Select a Movie Title: </label>
      <select
        id="movieDropdown"
        value={selectedMovie}
        onChange={handleMovieChange}
      >
        <option value="">Select a movie</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.title}>
            {movie.title}
          </option>
        ))}
      </select>
      <button onClick={addSelectedMovie}>Add Movie</button>
      <button onClick={clearSelectedMovies}>Clear List</button>
      <div>
        <ul>
          {selectedMoviesList.map((selectedMovie) => (
            <li key={selectedMovie.id}>
              <h3>{selectedMovie.title}</h3>
              <p>Rating: {selectedMovie.rating}</p>
              <p>Year: {selectedMovie.year}</p>
              <p>Plot: {selectedMovie.plot}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movieselect;
