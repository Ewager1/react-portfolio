import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PageTitle = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Container fluid className="page-title center">
        <Row>
          <Col>
            <h2 data-aos="fade-up">Ethan Wager</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 data-aos="fade-up">Full Stack Developer</h2>
          </Col>
        </Row>
        <Navigation />
      </Container>
    </>
  );
};

export default PageTitle;
