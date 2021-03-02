import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
import Image from "react-bootstrap/Image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Row className="pt-5 pb-5">
        <Col xs="12" sm="6" className="center">
          <Image
            data-aos="fade-up"
            data-aos-delay="500"
            src={process.env.PUBLIC_URL + "/images/updatedpic.jpg"}
            roundedCircle
            alt="professional picture"
            className="profile-pic"
          />
        </Col>
        <Col
          xs="12"
          sm="6"
          className="center px-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p>
            <b>I'm Ethan. Nice to meet you.</b>{" "}
          </p>
          <p>
            I'm a highly motivated developer with a boundless curiosity for new
            technologies. I have a lot of pride in what I do, and like my
            applications to be easy to read and intuitive to use.
          </p>
          <p>
            I'm particularly interested in building a better gym management
            system. I've worked with Mind-Body, Perfect Mind, and Club ready as
            a Client, and my ongoing pet project is building a better, more
            intuitive version.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default AboutMe;
