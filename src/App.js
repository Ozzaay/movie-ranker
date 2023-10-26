import React from 'react';
import Navbar from './pages/Links';
import Movieselect from './pages/dropdown';
import { useLocation } from 'react-router-dom';
import UserList from './pages/userlist';

function App() {
    const location = useLocation();
    const user_id = location.state ? location.state.id : '';
    return (
        <>
        <div className="App">
        <Navbar />
        <Movieselect user_id = {user_id}/>
        <UserList />
        </div>
    </>
    );
}

export default App;