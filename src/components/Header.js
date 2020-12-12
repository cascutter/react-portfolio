import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/style.css";

function Header() {

    const location = useLocation();

    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    About
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/about" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    );
}

export default Header;