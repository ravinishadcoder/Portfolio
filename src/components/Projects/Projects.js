import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/lumen5.png"
import bitsOfCode from "../../Assets/Projects/everhour.png";
import chatify from "../../Assets/Projects/Tata1mg.png";
import sugar from "../../Assets/Projects/sugar.png";
import gearbest from "../../Assets/Projects/gearbest.png";

function Projects({project}) {
  return (
    <Container fluid className="project-section" ref={project} >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tata 1Mg Clone"
              description="TATA 1mg.com is an e-commerce web application that
              widely provides e-pharmacy services across India."
              stack={[
                "Javascript",
                "ReactJs",
                "Redux",
                "ExpressJs",
                "MongoDB",
                "Firebase",
              ]}
              ghLink="https://github.com/ravinishadcoder/Tata-1-Mg"
              demoLink="https://tata-1mg-clone-project-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="EVERHOUR CLONE,"
              stack={["Javascript", "ReactJs", "Redux", "ExpressJs", "MongoDB"]}
              description="Ever-Hour is powerful time tracking software with hassle-free integrations. With Everhour’s time clock app."
              ghLink="https://github.com/ravinishadcoder/Everhour/tree/main"
              demoLink="https://everhour2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lumen5"
              stack={["Javascript", "React", "Chakra-UI","HTML","Tailwind-CSS"]}
              description="Lumen5 is a video-creating platform that allows the creation of interactive videos without any effort."
              ghLink="https://github.com/ravinishadcoder/Lumen5-clone"
              demoLink="https://lumen5-teammasai.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sugar}
              isBlog={false}
              title="Sugar Cosmetic"
              stack={["Javascript", "HTML", "CSS", "Bootsrap"]}
              description="Sugar cosmetic is selling online beauty products, This
              is the site where you can various types of cosmetic
              products like makeup kits."
              ghLink="https://github.com/ravinishadcoder/SUGAR-Cosmetic-Clone"
              demoLink="https://melodic-malabi-d69a87.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearbest}
              isBlog={false}
              title="Gearbest"
              stack={["Javascript", "HTML", "CSS", "Bootsrap"]}
              description="GearBest.com This is E-Commerce site .Which is selling electronic products, gadgets, men's fashion, toys, vehicle etc."
              ghLink="https://github.com/ravinishadcoder/Gearbest-Clone"
              demoLink="https://gearbest-project.vercel.app/"
            />
          </Col>

          {/*  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
