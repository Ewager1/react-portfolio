import React from "react";
import "./styles.css";
import { Row, Col } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'



const Navigation = (props) => {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);
  return (
    <Row className="nav-bar" >
      <Col className="p-0" data-aos="fade-up" data-aos-delay="300">
        <Link smooth to="/#aboutMe" className=" navLink px-2">
          About Me
        </Link>
      </Col>
      <Col className="p-0" data-aos="fade-up" data-aos-delay="400">
        <Link smooth to="/#myProjects" className="navLink px-2">
          Projects
        </Link>
      </Col>
      <Col className="p-0" data-aos="fade-up" data-aos-delay="500">
        <Link smooth to="/#skillSet" className="navLink px-2">
          Skill-Set
        </Link>
      </Col>
      <Col className=" p-0" data-aos="fade-up" data-aos-delay="400">
        <Link
          smooth
          target="_blank"
          rel="noreferrer"
          to={process.env.PUBLIC_URL + "/resume/resume.pdf"}
          className="navLink px-2"
        >
          Resume
        </Link>
      </Col>
      <Col className="p-0" data-aos="fade-up" data-aos-delay="300">
        <Link smooth to="/#contactMe" className="navLink no-border px-2">
          Contact
        </Link>
      </Col>
    </Row>
  );
};

export default Navigation;
