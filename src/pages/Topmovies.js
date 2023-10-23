import React, { useState, useEffect } from 'react';

const TopMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTopMovies = async () => {
            try {
                const response = await fetch('/movies.json');
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTopMovies();
    }, []);

    return (
        <div>
            <h1>Top 100 Movies on IMDb</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <h2>{movie.title}</h2>
                        <p>Rating: {movie.rating}</p>
                        <p>Year: {movie.year}</p>
                        <p>Plot: {movie.plot}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopMovies;