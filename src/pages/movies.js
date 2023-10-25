import React, { useState, useEffect } from 'react';
import './movies.css'
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
            <h1>Movie ranker</h1>
            <div>
                {movies.map((movie, index) => (
                    <section key={index}>
                        <h2>{movie.title}</h2>
                        <p>Rating: {movie.rating}</p>
                        <p>Year: {movie.year}</p>
                        <p>Plot: {movie.plot}</p>
                    </section>
                ))}
            </div>
        </div>
    );
};



export default TopMovies;