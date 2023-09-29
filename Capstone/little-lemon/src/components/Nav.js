import logo from '../img/logo.svg';
import "../App.css";
import HomePage from "./HomePage";
import Reservations from "./BookingPage";
import { Routes, Route, Link } from "react-router-dom";
import BookingPage from './BookingPage';


function Nav() {
    return (
        <div>
        <nav className="nav">
            <img src={logo} alt="little Lemon logo"></img>
            <ul>
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/reservations" className="nav-item">Reservations</Link>
            </ul>
        </nav>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/reservations" element={<BookingPage />}></Route>
            </Routes>
        </div>
    )
}

export default Nav;