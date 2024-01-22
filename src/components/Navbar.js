import React, { useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
// import pdf from "../../Assets/MasaiUpdated.pdf";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import { CgFileDocument } from "react-icons/cg";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Home2 from "./Home/Home2";
import Home from "./Home/Home";

function NavBar() {
  const about = useRef();
  const project = useRef();
  const contact = useRef();
  const home = useRef()
  const aboutClick = () => {
    about.current.scrollIntoView({
      behavior: "smooth",
    });
   
  };
  const homeClick = () => {
    home.current.scrollIntoView({
      behavior: "smooth",
    });
   
  };
  const projectClick = () => {
    project.current.scrollIntoView({
      behavior: "smooth",
    });
     };
  const contactClick = () => {
    contact.current.scrollIntoView({
      behavior: "smooth",
    });
     };
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                 
                  onClick={() =>{ 
                    updateExpanded(false)
                    homeClick()
                  }}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    updateExpanded(false);
                    aboutClick();
                  }}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                 
                  onClick={() => {
                    updateExpanded(false)
                    
                  }}
                >
                  <FaConnectdevelop style={{ marginBottom: "2px" }} /> Skills
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  
                  onClick={() => {
                    updateExpanded(false)
                  projectClick()
                  }}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  
                  onClick={() => {
                    updateExpanded(false)
                    contactClick()
                  }}
                >
                  <BsFillTelephoneFill style={{ marginBottom: "2px" }} />{" "}
                  Contact
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                {/* <Nav.Link
                as={Link}
                // to={"/"}
                onClick={() => updateExpanded(false)}
              > */}
                <a
                  style={{
                    color: "white",
                    textDecoration: "none",
                    top: "10px",
                  }}
                  href="https://drive.google.com/file/d/1VsP6KV7x6w0x5IwE9IYxhxb_3l_vOgLy/view?usp=sharing"
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </a>
                {/* </Nav.Link> */}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Home home={home} />

      <About about={about} />
 
      <Projects project={project} />
      <Home2 contact={contact} />
    </>
  );
}

export default NavBar;
