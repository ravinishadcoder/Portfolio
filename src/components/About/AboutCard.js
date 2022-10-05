import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravi Kumar Nishad </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I'm a passionate Developer, with good administrative and
            communication skills, good attention to detail and the ability to
            write efficient code using <span className="purple">MERN Stack.</span>
            <br/>
            My field of interest's are building new web applications. I also apply my passion for developing products with Node.js and Modern Javascript Library, and Frameworks like React.js and Express.js
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ravi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
