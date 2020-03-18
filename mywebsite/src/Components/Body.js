import React from "react";
import "./../css/App.css";
import "./../css/body.css";
import Badge from "react-bootstrap/Badge";
import profile1 from "./../images/Portfolio4.jpg";
import profile from "./../images/Portfolio3.jpg";
import { MDBMask, MDBView } from "mdbreact";
import Contact from "./Contact";
import pdf from "./../images/Resume.pdf";

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
      <section id="about-section" className="section_padding">
        <div className="container" id="about-container">
          <div className="single_about">
            <div className="row">
              <div className="col-md-5 col-sm-5 col-xs-12">
                <div className="about_image">
                  <img
                    src={profile}
                    className="img-responsive"
                    alt="about section"
                  />
                </div>
              </div>

              <div className="col-md-7 col-sm-7 col-xs-12">
                <div className="about_content_area" id="skills-right">
                  <h2>About Me</h2>
                  <h5>
                    I'm Professional web Developer having 10 Years Of
                    Experience.
                  </h5>
                  <p className="about-description">
                    I am a recently graduated computer science student with a
                    passion for coding. I am looking for a entry level job with
                    a great team of software developers. I am in search of a
                    well-rounded and enthusiastic company that shares my passion
                    for coding. I thrive in back-end development and I have a
                    vast knowledge in front-end development.
                    <br />
                  </p>
                  <p className="about-description">
                    I have been enthusiastic about computers and software for my
                    entire life. There's nothing like the feeling of developing
                    efficient and scalable software. I have a talent
                    for coding and a love for algorithms. I love socializing and
                    I have great communication skills, as I know they are
                    important to have when it comes to working with clients.
                  </p>
                  <div className="about_details">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="ct_about">
                          <span>
                            <i className="fa fa-map-marker"></i> Location{" "}
                          </span>
                          : Vancouver, BC
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="ct_about">
                          <span>
                            <i className="fa fa-calendar"></i> age{" "}
                          </span>
                          : 22
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="ct_about">
                          <span>
                            <i className="fa fa-phone"></i> Phone{" "}
                          </span>
                          : +1-250-938-3632
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="ct_about">
                          <span>
                            <i className="fa fa-envelope"></i> Email{" "}
                          </span>
                          : jaryd_fisher@hotmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="section-padding">
        <div className="container" id="skills-container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <h2>My Skills</h2>
              <div className="skills-description">
                <p>
                  Here's a small summary of the skills I have and how well
                  versed I am with them. Keep in mind this is only a short glimpse
                  of what I can do.
                </p>
                <div className="skill-part">
                  <div className="skill">
                    <h4 className="progress-title">Java</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>

                    <h4 className="progress-title">XAMPP Stack</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>80%</span>
                      </div>
                    </div>
                    <h4 className="progress-title">Front-End</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>70%</span>
                      </div>
                    </div>

                    <h4 className="progress-title">C#</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>70%</span>
                      </div>
                    </div>

                    <h4 className="progress-title">Python</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>60%</span>
                      </div>
                    </div>

                    <h4 className="progress-title">React</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-cv-btn">
                  {" "}
                  <a href="#contact" className="btn-hover btn">
                    HIRE ME<i className="fa fa-paper-plane"></i>
                    <span></span>
                  </a>{" "}
                  <a href={pdf} download="Resume.pdf" className="btn-hover btn">
                    Download CV<i className="fa fa-cloud-download"></i>
                    <span></span>
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="about-img">
                <img
                  src={profile1}
                  className="img-responsive"
                  alt="skills section"
                />
              </div>
            </div>
          </div>
        </div>
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
