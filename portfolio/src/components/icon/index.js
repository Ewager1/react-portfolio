import React from "react";
import { Col } from "react-bootstrap";

/*Conditional render. If isLink is set to true, image will be wrapped
in an a tag, otherwise, it creates a non clickable icon. */

function Icon(props) {
  return (
    <>
      {props.isLink ? (
       <Col class="col-6 col-md-4 center">
       <a href={props.url} target="_blank">
         <img src={props.imgUrl} alt={props.altText} className={props.className} />
       </a>
       <p className="bold">{props.iconText}</p>
     </Col>
      ) : (
        <Col class="col-6 col-md-4 center">
        <img src={props.imgUrl} alt={props.altText} className={props.className} />
        <p className="bold">{props.iconText} </p>
      </Col>
      )}
    </>
  );
}

export default Icon;
