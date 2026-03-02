import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MAANASA RAJESHWER</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row className="home-about-social">
          <h1 style={{ paddingTop: "40px" }}>
            Contact <span className="purple">Me</span>
          </h1>
          <p style={{ color: "white" }}>
            Want to collaborate or chat? Reach out anytime.
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="mailto:maanasa@seas.upenn.edu"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="Email"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/MaanaRajesh/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/maanasa-rajeshwer/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Row>
      </Container>
    </section >
  );
}

export default Home;
