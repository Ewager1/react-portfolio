import React from "react";
import "./styles.css";
import { Col, Card } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <>
      <Col lg="4" className="flex-item mb-3">
        <Card
          data-aos={props.dataAos}
          data-aos-duration={props.dataAosDuration}
          style={{ width: "30rem" }}
        >
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + props.imgUrl}
            className="photo"
          />
          <Card.Body>
            <Card.Title>
              <h3>
                <b>{props.title}</b>
              </h3>{" "}
            </Card.Title>
            <Card.Text className="mb-4">
               {props.cardText}
            </Card.Text>

            <a
              href={props.liveLinkUrl}
              className="live-link card-link bold pr-4"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
            <a
              href={props.viewCodeUrl}
              className="view-code card-link bold pr-4"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ProjectCard;
