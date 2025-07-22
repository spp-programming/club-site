import { Route, Routes, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/programming-club-icon.png";

const Navbar = ({ currentPage }) => {
    return (
        <nav>
            <div className="nav-left">
                <img src={logo} alt="" width="45" />
            </div>
            <div className="nav-right">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/useful-links">
                    Useful Links
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
