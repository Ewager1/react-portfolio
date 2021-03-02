import React from "react";
import ContactIcon from "../icon";
import { Row } from "react-bootstrap";
import "./styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Row>
      <ContactIcon
        dataAos="fade-up"
        dataAosDelay="500"
        className="contactIcon"
        imgUrl="./icons/linked-in-icon.png"
        isLink="true"
        url="https://www.linkedin.com/in/ethan-wager-5297111b4/"
      />
      <ContactIcon
        dataAos="fade-up"
        dataAosDelay="500"
        className="contactIcon"
        imgUrl="/icons/github-icon.png"
        url="https://github.com/Ewager1"
        isLink="true"
      />
      <ContactIcon
        dataAos="fade-up"
        dataAosDelay="500"
        className="contactIcon"
        imgUrl="/icons/gmailcon.png"
        iconText="ethanbwager@gmail.com"
        isLink="true"
      />
    </Row>
  );
}

export default ContactMe;
