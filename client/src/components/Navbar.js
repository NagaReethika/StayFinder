import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
            
            {/* Logo */}
            <Link className="navbar-brand fw-bold text-warning" to="/">
                Stay Finder
            </Link>

            {/* Toggle Button (Mobile) */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="btn btn-warning text-white ms-3" to="/register">
                            Sign Up
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
