import React from "react";
import "./styles/style.css";

function Footer() {
    return (
    <footer>
        <div class="footer">
            <nav class="navbar navbar-light bg-light">
                <ul class="navbar-nav list-inline">
                    <li class="nav-item"> Find me on:
                    </li>
                    <li class="nav-item list-inline-item">
                        <a class="nav-link" href="https://linkedin.com/in/casandra-cutter-ab7a361a9" target="_blank">LinkedIn</a>
                    </li>
                    <li class="nav-item list-inline-item">
                        <a class="nav-link" href="https://github.com/cascutter" target="_blank">GitHub</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
    );
}

export default Footer;