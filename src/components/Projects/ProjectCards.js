import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "../../style.css";
function ProjectCards(props) {
  return (
    <Card className="project-card-view cardDiv">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body id="cardBody">
        <div>
          <Card.Title>{props.title}</Card.Title>
        </div>
        <div>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>
        <div>
          <span style={{ color: "#801f95" }}>Tech-Stack</span>
          <p>
            {props.stack.map((el, i) => (
              <span key={i}>{el}, </span>
            ))}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
