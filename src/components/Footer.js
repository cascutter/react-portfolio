import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles/style.css";

function Footer() {
    return (
    <footer>
        <div className="footer">
            <nav className="navbar navbar-light bg-light">
                <ul className="navbar-nav list-inline">
                    <li className="nav-item" style={{ fontSize: 25 }}> Find me on:
                    </li>
                    <Row style={{ alignSelf: "center" }}>
                        <a style={{ margin: 10 }} className="nav-link" href="https://linkedin.com/in/casandra-cutter-ab7a361a9" target="_blank"><img style={{ width: 50 }} src="../assets/icons/linkedin.png"></img></a>
                        <a style={{ margin: 10 }} className="nav-link" href="https://github.com/cascutter" target="_blank"><img style={{ width: 50 }} src="../assets/icons/github.png"></img></a>
                    </Row>
                </ul>
            </nav>
        </div>
    </footer>
    );
}

export default Footer;