import { Link } from "react-router-dom";    

function Navbar () {
    return(
        <>
        {/* <Link to="/">home</Link>
        {/* <Link to="/messages">message</Link>
        <br></br>
        <Link to="/test">test</Link> */}
        <ul>
            <li><Link to="/Overview">Overview</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
        </>
    )
}

export default Navbar;