import React from 'react';
import TopMovies from './pages/movies';
import Navbar from './pages/Links';

function App() {
    return (
        <>
        <div className="App">
        <Navbar />
        <TopMovies />
        </div>
    </>
    );
}

export default App;