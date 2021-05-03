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
            src={process.env.PUBLIC_URL + "/images/profProfile.jpeg"}
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
          <p className="aboutMe">
            <b>I'm Ethan. Nice to meet you.</b>{" "}
          </p>
          <p className="aboutMe">
            I'm a full-stack developer with a passion for learning new
            technologies. I've always followed the motto, say "Yes!" then figure
            out how to make it happen.
          </p>
          <p className="aboutMe">
            With a profesional background in gym management and instructing, I
            am experienced in producing results in fast paced environments with
            tight deadlines.
          </p>

          <p className="aboutMe">
            Aside from programming, I love teaching martial arts,
             music, board games, and reading.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default AboutMe;
