import React from 'react';
import "./styles.css"
import Navigation from '../navigation'
import {Container, Col, Row} from 'react-bootstrap'

const ContentContainer = (props) => {
    return  <> 
    <Container fluid className="pt-3 blue-background">
    <Row>
    <Col>
    <h2> {props.sectionTitle} </h2> 
    </Col>
    </Row>
    <Navigation />
    </ Container>
    <Container fluid className="blue-background center pt-5"> 
    {props.sectionBody}
</Container>
</>

}

export default ContentContainer