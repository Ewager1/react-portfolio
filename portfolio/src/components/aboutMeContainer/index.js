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

        <Container fluid className="blue-background center pt-5"> 
        <Row className="pt-5 pb-5" >
          <Col className="col-6 center">
            <Image
              src={process.env.PUBLIC_URL + '/images/updatedpic.jpg'}
              roundedCircle 
              alt="professional picture"
              className="profile-pic"
            />
            </Col>
            <Col className="col-6 " >
            <p className="bold">
              Nice to meet you!
            </p>
            <p>
              Hi, I'm Ethan. Nice to meet you.
            </p>
            <p>
              I'm a highly motivated developer with a boundless curiosity for
              new technologies. I have a lot of pride in what I do, and like my
              applications to be easy to read and intuitive to use.
            </p>
            <p>
              I'm particularly interested in building a better gym management
              system. I've worked with Mind-Body, Perfect Mind, and Club ready
              as a Client, and my ongoing pet project is building a better, more
              intuitive version.
            </p>
            </Col>
          </Row>
    </Container>
</>
}

export default AboutMeContainer