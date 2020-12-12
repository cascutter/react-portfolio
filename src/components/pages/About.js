import React from "react";
import "../styles/style.css";
import { Container, Row, Col } from "react-bootstrap";


const About = () => (
        <Container fluid="md" className="container">
            <div className="name">
                <Row className="row">
                    <div className="col-md-6">
                        <Col>
                        <section>
                            <h1 style={{ fontSize: 75 }}>My name is Casandra Cutter</h1>
                            <p> Full Stack Web Development student at the 
                                University of Texas San Antonio || Projected 
                                graduation January 2021
                            </p>
                            </section>
                            <button type="button" className="btn btn-outline-light" id="resumeBtn"><a href="../assets/Casandra Cutter Resume (3).pdf"
                            target="_blank" id="resume"><i className="far fa-file-pdf"></i> Check Out My Resume</a></button>
                        </Col>
                    </div>
                    <div className="col-md">
                        <Col>
                        <div className="image-cropper">
                        <img src="../assets/ACS_0204.JPG" alt="Casandra Cutter" id="img-me">
                        </img>
                        </div>
                        </Col>
                    </div>
                </Row>
            </div>
            <Row className="row">
                <Col>
                <div className="col-md-4"></div>
                </Col>
                <Col>
                <div className="col-md">
                    <section>
                        <p style={{ textAlign: "center", marginTop: 50, marginRight: 50 }}>
                            A full stack developer with fifteen years experience in education and a background in the arts, ready to deploy strong communication skills and a creative thought process to the development cycle. Offering five years experience as a detail-oriented small
                            business owner dedicated to sustainable customer and peer relationship growth. Experienced in MERN stack. Self-directed and enthusiastic
                            learner with superior design and analytical skills prepared to join a collaborative, innovative team environment.
                        </p>
                    </section>
                </div>
                </Col>
            </Row>
        </Container>
    );

export default About;