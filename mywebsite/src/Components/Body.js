import React from "react";
import "./../App.css";
import ScrollableAnchor from "react-scrollable-anchor";
import Badge from "react-bootstrap/Badge";

function Body() {
  return (
    <div id="Body" className="Body">
      <ScrollableAnchor id={"top"}>
        <section id="title">
          <h1>
            <Badge id="badge" variant="light">Jaryd Fisher</Badge>
          </h1>
          <div id="image"></div>
        </section>
      </ScrollableAnchor>
      <ScrollableAnchor id={"aboutMe"}>
        <section>
          <h2>About Me</h2>
        </section>
      </ScrollableAnchor>
      <ScrollableAnchor id={"skills"}>
        <section>
          <h2>Skills</h2>
        </section>
      </ScrollableAnchor>

      <ScrollableAnchor id={"projects"}>
        <section>
          <h2>Projects</h2>
        </section>
      </ScrollableAnchor>
    </div>
  );
}

export default Body;
