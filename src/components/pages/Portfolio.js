import React from "react";
import "../styles/style.css";
import { Container, Col, Row } from "react-bootstrap";
import "../ProjectData";

const Portfolio = () => (
    <Container id="portfolio" className="container">
            <Row className="row">
                <div className="col-sm-12">
                <Col>
                    <section>
                        <h1 style={{ fontSize: 75 }}>Portfolio</h1>
                    </section>
                </Col>  
                </div>
            </Row>
            <Container className="container" id="portfolioCards">
                <div className="col-sm-12">
                    <section>
                        <h3 style={{ textAlign: "center" }}>Collaborative Projects</h3>
                    </section>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/Night In.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Night In</h5>
                        <p className="card-text">A mobile-first app that uses multiple APIs to retrieve movie selections, recipes, and cocktails based on user input.
                        </p>
                        <a href="https://github.com/cascutter/Project-1-Night-In" target="_blank" className="btn btn-outline-dark">Github</a>
                        <a href="https://cascutter.github.io/Project-1-Night-In/" target="_blank" className="btn btn-outline-dark">Deployed</a>
                    </div>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/AudioFiler.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">AudioFiler</h5>
                        <p className="card-text">A mobile-first album catalogging application. It allows a user to create an account, search an API for albums, and store those albums within a database to then be returned as the user's collection.
                        </p>
                        <a href="https://github.com/malex19889/Project2" target="_blank" className="btn btn-outline-dark">Github</a>
                        <a href="https://blooming-wildwood-71202.herokuapp.com/" target="_blank" className="btn btn-outline-dark">Deployed</a>
                    </div>
                </div>
                <div className="col-sm-12">
                    <section>
                        <h3 style={{ textAlign: "center" }}>Independent Projects</h3>
                    </section>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/Eat-Da-Burger.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Eat Da Burger!</h5>
                        <p className="card-text">A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Follows the MVC design pattern; uses Node and MySQL to query and route data, and Handlebars to generate HTML.
                        </p>
                        <a href="https://github.com/cascutter/Node-Express-Handlebars-HW13" target="_blank" className="btn btn-outline-dark">Github</a>
                        <a href="https://pure-lake-63894.herokuapp.com/" target="_blank" className="btn btn-outline-dark">Deployed</a>
                    </div>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/FlexImage1.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Team Template Engine</h5>
                        <p className="card-text">A Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.
                        </p>
                        <a href="https://github.com/cascutter/Homework-10-Template-Engine" target="_blank" className="btn btn-outline-dark">Github</a>
                    </div>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/View Employees.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Employee Management System</h5>
                        <p className="card-text">A CMS solution built for managing a company's employees using node, inquirer, and MySQL.
                        </p>
                        <a href="https://github.com/cascutter/MySQL-Employee-Tracker" target="_blank" className="btn btn-outline-dark">Github</a>
                    </div>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/README-gen.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">README Generator</h5>
                        <p className="card-text">A command-line application that dynamically generates a README.md from a user's input.
                        </p>
                        <a href="https://github.com/cascutter/Homework-9-README-Generator" target="_blank" className="btn btn-outline-dark">Github</a>
                    </div>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/Day Planner.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Day Planner</h5>
                        <p className="card-text">A simple calendar application that allows the user to save events for each hour of the work day.
                        </p>
                        <a href="https://github.com/cascutter/Homework-5-Day-Planner" target="_blank" className="btn btn-outline-dark">Github</a>
                        <a href="https://cascutter.github.io/Homework-5-Day-Planner/" target="_blank" className="btn btn-outline-dark">Deployed</a>
                    </div>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/Weather Dash.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Weather Dashboard</h5>
                        <p className="card-text">A mobile-first application that uses OpenWeather API to retrieve weather data for cities input by the user.
                        </p>
                        <a href="https://github.com/cascutter/Homework-6-Weather-Dashboard" target="_blank" className="btn btn-outline-dark">Github</a>
                        <a href="https://cascutter.github.io/Homework-6-Weather-Dashboard/" target="_blank" className="btn btn-outline-dark">Deployed</a>
                    </div>
                </div>
                <div className="card" style={{ width: 350 }}>
                    <img className="card-img-top" src="assets/Password Generator.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Password Generator</h5>
                        <p className="card-text">An application that generates a random password based on user-selected criteria.
                        </p>
                        <a href="https://github.com/cascutter/Homework-3-Password-Generator" target="_blank" className="btn btn-outline-dark">Github</a>
                        <a href="https://cascutter.github.io/Homework-3-Password-Generator/" target="_blank" className="btn btn-outline-dark">Deployed</a>
                    </div>
                </div>
            </Container>
        </Container>
    ); 

export default Portfolio;