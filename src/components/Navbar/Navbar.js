import { Route, Routes, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ currentPage }) => {
    return (
        <nav>
            <div className="nav-left">
                <p>Programming Club</p>
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
