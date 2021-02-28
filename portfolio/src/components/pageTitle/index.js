import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

const PageTitle = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Ethan Wager</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Full Stack Developer</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageTitle;