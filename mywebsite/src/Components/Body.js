import React from "react";
import "./../css/App.css";
import "./../css/body.css";
import Badge from "react-bootstrap/Badge";
import profile from "./../images/profile.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import LogoPHP from "./../images/php.png";
// import LogoPython from "./../images/python.png";
// import LogoJava from "./../images/java.jpg";
import { MDBMask, MDBView } from "mdbreact";
import Contact from "./Contact";

function Body() {
  return (
    <div id="Body" className="Body">
      <section id="title">
        <h1>
          <Badge id="badge" variant="light">
            Jaryd Fisher
          </Badge>
        </h1>
        <div id="image"></div>
      </section>
      <section id="about-section">
        <Container
          id="about-container"
          fluid
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Row id="row">
            <Col id="col-story">
              <h2 id="about-title">About me</h2>
              <div>
                I am a recently graduated computer science student with a
                passion for coding. I am looking for a entry level job with a
                great team of software developers. I am in search of a
                well-rounded and enthusiastic company that shares my passion for
                coding. I thrive in back-end development and I have a vast
                knowledge in front-end development. My most notable skills for
                coding includes 3 years of coding in Java, 3 years of coding in
                JavaScript and 2 years of coding in python
              </div>
              <div id="div-profile-img">
                <img src={profile} alt="profile-img" id="profile-img" />
              </div>
            </Col>
            <Col id="col-skills">
              <h2 id="skills-title">Skills</h2>
              <div>
                <ul>
                  <li>
                    Project Management: proficient with scrumban agile
                    management using Trello, Slack, and Travis CI
                  </li>
                  <li>
                    Data Analysis: Skilled with techniques for computation,
                    analysis, and visualization of data using python
                  </li>
                  <li>
                    Web Development: Full stack developer and hands on
                    experience with PHP,SQL,HTML,CSS and javascript.
                  </li>
                </ul>
              </div>
              <div className="container-skills">
                <div
                  className="bar front expert"
                  id="java"
                  data-skill="Java"
                ></div>
                <div
                  className="bar front advanced"
                  id="javascript"
                  data-skill="JavaScript"
                ></div>
                <div
                  className="bar back intermediate"
                  id="php"
                  data-skill="PHP"
                ></div>
                <div
                  className="bar back basic"
                  id="html"
                  data-skill="HTML/CSS/SQL"
                ></div>
                <div
                  className="bar learning"
                  id="python"
                  data-skill="Python"
                ></div>
                <div
                  className="bar learning"
                  id="react"
                  data-skill="React"
                ></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <a href="https://github.com/jarydf/TrapBuzz">
          <div className="project-overlay" id="project-off-white">
            <MDBView hover zoom>
              <h3>
                <Badge variant="light" className="project-title">
                  TrapBuzz
                </Badge>
              </h3>

              <MDBMask overlay="red-slight"></MDBMask>
            </MDBView>
          </div>
        </a>

        <a href="https://github.com/jarydf/AGR">
          <div className="project-overlay" id="agr">
            <MDBView hover zoom>
              <h3>
                <Badge variant="info" className="project-title">
                  Analog Gauge Reader
                </Badge>
              </h3>

              <MDBMask overlay="red-slight"></MDBMask>
            </MDBView>
          </div>
        </a>

        <a href="https://github.com/jarydf/mfac">
          <div className="project-overlay" id="mfc">
            <MDBView hover zoom>
              <h3>
                <Badge variant="danger" className="project-title">
                  Mapping For A Change
                </Badge>
              </h3>

              <MDBMask overlay="red-slight"></MDBMask>
            </MDBView>
          </div>
        </a>

        <div className="project-overlay" id="java">
          <MDBView hover zoom>
            <h3>
              <Badge variant="primary" className="project-title">
                Project In Progress
              </Badge>
            </h3>

            <MDBMask overlay="red-slight"></MDBMask>
          </MDBView>
        </div>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <Contact />
      </section>
    </div>
  );
}

export default Body;
