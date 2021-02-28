import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

const Navigation = () => {
  return (
      <Row>
        <Col>
          <a href="#aboutMe" className="mr-1">
            About Me
          </a>
        </Col>
        <Col>
          <a href="#projects" className="mr-1">
            Projects
          </a>
        </Col>
        <Col>
          <a href="#skillSet" className="mr-1">
            Skill-Set
          </a>
        </Col>
        <Col>
          <a target="_blank" href={process.env.PUBLIC_URL + '/resume/resume.pdf'} className="mr-1">
            Resume
          </a>
        </Col>
        <Col>
          <a href="#contactMe" className="mr-1">
            Contact
          </a>
        </Col>
      </Row>
  );
};

export default Navigation;
