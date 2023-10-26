import { Link } from "react-router-dom";    
import './navbar.css'
function Navbar () {
    return(
        <>
        {/* <Link to="/">home</Link>
        {/* <Link to="/messages">message</Link>
        <br></br>
        <Link to="/test">test</Link> */}
        <ul className="nav">
            <li><Link to="/app">Home</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
        </>
    )
}

export default Navbar;