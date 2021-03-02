import React from "react";
import { Col } from "react-bootstrap";

/*Conditional render. If isLink is set to true, image will be wrapped
in an a tag, otherwise, it creates a non clickable icon. */

/*animation and animation delay is added as props so they can be styled where called */

function Icon(props) {
  //passed isLink true as a string to avoid warning error that "id" should not have a boolean value.
  return (
    <>
      {props.isLink === "true" ? (
        <Col
          xs="12"
          sm
          className="center"
          data-aos={props.dataAos}
          data-aos-delay={props.dataAosDelay}
        >
          <a href={props.url} target="_blank" rel="noreferrer">
            <img
              src={process.env.PUBLIC_URL + props.imgUrl}
              alt={props.altText}
              className={props.className}
            />
          </a>
          <p className="bold">{props.iconText}</p>
        </Col>
      ) : (
        <Col
          xs="12"
          sm
          className="center"
          data-aos={props.dataAos}
          data-aos-delay={props.dataAosDelay}
        >
          <img
             src={process.env.PUBLIC_URL + props.imgUrl}
            alt={props.altText}
            className={props.className}
            data-aos-delay={props.dataAosDelay}
          />
          <p className="bold">{props.iconText} </p>
        </Col>
      )}
    </>
  );
}

export default Icon;
