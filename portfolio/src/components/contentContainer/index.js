import React from "react";
import "./styles.css";
import Navigation from "../navigation";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContentContainer = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Container
        fluid
        className="pt-3 blue-background center-navigation "
        id={props.id}
      >
        <Row>
          <Col>
            <h2 data-aos="fade-up"> {props.sectionTitle} </h2>
          </Col>
        </Row>
        <Navigation />
      </Container>
      <Container fluid className="blue-background center pt-5 pb-5">
        {props.children}
      </Container>
    </>
  );
};

export default ContentContainer;
