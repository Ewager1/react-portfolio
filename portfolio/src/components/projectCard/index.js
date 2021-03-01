import React from "react";
import "./styles.css";
import { Col, Card } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <>
        <Col className="flex-item mb-3">
          <Card style={{ width: "30rem" }}>
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
                <p> {props.cardText}</p>
              </Card.Text>
           
              <a
                href={props.liveLinkUrl}
                class="card-link bold pr-4"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href={props.viewCodeUrl}
                class="card-link bold pr-4"
                target="_blank"
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
