import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from '../navigation'

const PageTitle = () => {
  return (
    <>
      <Container className='page-title'>
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
        <Navigation/>
      </Container>
    </>
  );
};

export default PageTitle;