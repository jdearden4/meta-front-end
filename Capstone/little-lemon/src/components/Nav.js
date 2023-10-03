import logo from '../img/logo.svg';
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";


function Nav() {
    return (
        <>
            <nav className="nav">
                <img src={logo} alt="little Lemon logo"></img>
                <ul>
                    <Link to="/" className="nav-item">Homepage</Link>
                    <Link to="/reserve" className="nav-item">Reservations</Link>
                </ul>
            </nav>
        </>
    )
}

export default Nav;