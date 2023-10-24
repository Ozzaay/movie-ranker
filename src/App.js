import React from 'react';
import TopMovies from './pages/Topmovies';
import Navbar from './pages/Links';

function App() {
    return (
        <>
        <div className="App">
        <Navbar />
        <h1 className="fancy-header">Overview</h1>
        <TopMovies />
        </div>
    </>
    );
}

export default App;