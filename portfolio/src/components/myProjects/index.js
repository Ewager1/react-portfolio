import React from 'react'
import './styles.css'
import Navigation from '../navigation'
import {Container, Row, Col, Card} from 'react-bootstrap'

function MyProjects() {
    return  <> 
        <Row>
        <Col>
<Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/managerPageView.png'} />
  <Card.Body>
    <Card.Title>Dev Fit</Card.Title>
    <Card.Text>
    <p> Full-stack Gym Management system with extensive functionality </p>
    </Card.Text>
  </Card.Body>

  <Card.Body>
  <a href="https://gym-logistical-tracker-duex.herokuapp.com/"
class="card-link bold pr-4"
target="_blank"
>Live Link</a >
  <a href="https://github.com/NewWorldCoder603/Gym-Logistical-Tracker"
        class="card-link bold"
        target="_blank"
        >View Code</a>
                
      </Card.Body>

</Card>
        </Col>
        </Row>

</>
}

export default MyProjects