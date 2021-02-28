import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

const Navigation = () => {
  return (
      <Row>
        <Col className = 'p-0'>
          <a href="#aboutMe" className="px-2">
            About Me
          </a>
        </Col>
        <Col className = 'p-0'>
          <a href="#projects" className="px-2">
            Projects
          </a>
        </Col>
        <Col className = 'p-0'>
          <a href="#skillSet" className="px-2">
            Skill-Set
          </a>
        </Col>
        <Col className = 'p-0'>
          <a target="_blank" href={process.env.PUBLIC_URL + '/resume/resume.pdf'} className="px-2">
            Resume
          </a>
        </Col>
        <Col className = 'p-0'>
          <a href="#contactMe" className="no-border px-2">
            Contact
          </a>
        </Col>
      </Row>
  );
};

export default Navigation;
