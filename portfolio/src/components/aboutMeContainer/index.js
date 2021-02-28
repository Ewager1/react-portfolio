import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Navigation from '../navigation'
import './styles.css'
import Image from 'react-bootstrap/Image'

function AboutMeContainer() {
    return  <> <Container fluid className="about-me pt-3 blue-background">
        <Row>
        <Col>
        <h2> About Me </h2> 
        </Col>
        </Row>
        <Navigation />
        </ Container>

        <Container fluid className="blue-background center"> 
        <Row className="pt-5 pb-5">
          <Col class="col-6 center">
            <Image
              src={process.env.PUBLIC_URL + '/images/updatedpic.jpg'}
              roundedCircle 
              alt="professional picture"
              className="profile-pic"
            />
            </Col>
            <Col class="col-6 ">
            <Image
              src={process.env.PUBLIC_URL + '/images/updatedpic.jpg'}
              alt="professional picture"
              className="profile-pic"
            />
            </Col>
          </Row>
    </Container>
</>
}

export default AboutMeContainer