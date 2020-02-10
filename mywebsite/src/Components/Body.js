import React from "react";
import "./../App.css";
import "./../body.css";
import Badge from "react-bootstrap/Badge";
import profile from "./../profile.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoPHP from "./../php.png";
import LogoPython from "./../python.png";
import { MDBMask, MDBView } from "mdbreact";

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
            <Col id="col-img">
              <img src={profile} alt="profile-img" id="profile-img" />
            </Col>
            <Col id="col-story">
              <h2 id="about-title">About me</h2>I am a recently graduated
              computer science student with a passion for coding. I am looking
              for a entry level job with a great team of software developers. I
              am in search of a well-rounded and enthusiastic company that
              shares my passion for coding. I thrive in back-end development and
              I have a vast knowledge in front-end development. My most notable
              skills for coding includes 3 years of coding in Java, 3 years of
              coding in JavaScript and 2 years of coding in python
            </Col>
            <Col id="col-skills">
              <h2 id="skills-title">Skills</h2>
              <li>
                Project Management: proficient with scrumban agile management
                using Trello, Slack, and Travis CI
              </li>
              <li>
                Data Analysis: Skilled with techniques for computation,
                analysis, and visualization of data using python
              </li>
              <li>
                IDE/Text Editor Experience: Hands on experience with Android
                Studio, Eclipse, Visual Studio, and Atom
              </li>
              <li>
                Proficient Coding Capabilities: 3 years of experience with Java
                and Javascript(JQuery)
              </li>
              <li>
                Familiar Coding Capabilities: Python, PHP, SQL, CSS, HTML and
                XML
              </li>
            </Col>
            <Col id="col-skillsbar">
              <div className="container">
                <div className="bar front expert" id="java" data-skill="Java"></div>
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
                <div className="bar learning" id="python" data-skill="Python"></div>
                <div className="bar learning" id="react" data-skill="React"></div>
                <div></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <table id="project-table">
        <tbody>
          <tr>
            <td id="project-td">
              <MDBView hover zoom>
                <img src={LogoPHP} alt="python logo" className="img-fluid" />
                <MDBMask overlay="red-slight"></MDBMask>
              </MDBView>
            </td>
            <td>
              <MDBView hover zoom>
                <img src={LogoPHP} alt="python logo" className="img-fluid" />
                <MDBMask overlay="red-slight"></MDBMask>
              </MDBView>
            </td>
          </tr>
          <tr>
            <td>
              <MDBView hover zoom>
                <img src={LogoPHP} alt="python logo" className="img-fluid" />
                <MDBMask overlay="red-slight"></MDBMask>
              </MDBView>
            </td>
            <td>
              <MDBView hover zoom>
                <img src={LogoPython} alt="python logo" className="img-fluid" />
                <MDBMask overlay="red-slight"></MDBMask>
              </MDBView>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="contact">
        <h2>Contact</h2>
      </section>
    </div>
  );
}

export default Body;
