import { Route, Routes, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/programming-club-logo.png";

const Navbar = ({ currentPage }) => {
    return (
        <nav>
            <div className="nav-left">
                <img src={logo} alt="" width="80" />
            </div>
            <div className="nav-right">
                <Link to="/">Home</Link>
                <Link to="/useful-links">Useful Links</Link>
                <Link to="/featured-projects">Featured Projects</Link>
            </div>
        </nav>
    );
};

export default Navbar;
