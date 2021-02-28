import React from 'react'
import './styles.css'
import Navigation from '../navigation'
import {Container, Row, Col} from 'react-bootstrap'

function MyProjects() {
    return  <> <Container fluid className="pt-3 blue-background">
        <Row>
        <Col>
        <h2> About Me </h2> 
        </Col>
        </Row>
        <Navigation />
        </ Container>
<h1> test my Project</h1> 
        <Container fluid className="blue-background center pt-5"> 

    </Container>
</>
}

export default MyProjects