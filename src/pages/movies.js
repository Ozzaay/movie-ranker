import React, { useState, useEffect } from 'react';

function TopMovies() {
    const [movies, setData] = useState([]);
    const fetchmovies = async () => {
        const response = await fetch("http://localhost:5000/movies", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

          });
          const jsonData = await response.json();
        setData(jsonData.rows);

    }
    useEffect(() => {fetchmovies()}, [])
  return (
    <div>
        
        {movies.map((movie) => (
            <div key={movie.id}>
                <h1>{movie.title}</h1>
                <p>{movie.rating}</p>
                <p>{movie.year}</p>
                <p>{movie.plot}</p>
            </div>
        ))}
        
    </div>
  );
}

export default TopMovies;