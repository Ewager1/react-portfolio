import React from "react";
import "./styles.css";
import ProjectCard from "../projectCard";
import { Row, Col } from "react-bootstrap";

function MyProjects() {
  return (
    <>
      <Row className="flex-item" >
        <ProjectCard
          title="Dev Fit"
          imgUrl="./images/managerPageView.png"
          cardText="Full-stack Gym Management system with extensive functionality."
          liveLinkUrl="https://gym-logistical-tracker-duex.herokuapp.com/"
          viewCodeUrl="https://github.com/NewWorldCoder603/Gym-Logistical-Tracker"
        />
        <ProjectCard
          title="Day Planner"
          imgUrl="./images/dayPlannerDemoPic.png"
          cardText="A Day Planner where user can make and save their events for
          the day."
          liveLinkUrl="https://ewager1.github.io/Basic-Day-Planner/"
          viewCodeUrl="https://github.com/Ewager1/Basic-Day-Planner"
        />
        <ProjectCard
          title="Couch Surf"
          imgUrl="./images/couchSurfDemoPic.png"
          cardText="A customizable dashboard with games and videos."
          liveLinkUrl="https://ewager1.github.io/CouchSurf-1/"
          viewCodeUrl="https://github.com/Ewager1/CouchSurf-1"
        />
      </Row>
      <Row className="flex-item" >
        <ProjectCard
          title="Timed Trivia Quiz"
          imgUrl="./images/triviaDemoPic.jpg"
          cardText="  A timed quiz that tracks the user's score based on time."
          liveLinkUrl="https://ewager1.github.io/Coding-Trivia-Game-/"
          viewCodeUrl="https://github.com/Ewager1/Coding-Trivia-Game-"
        />
        <ProjectCard
          title="Password Generator"
          imgUrl="./images/passwordGeneratorDemoPic.png"
          cardText="Produces a password based on the
          user's choice of special characters."
          liveLinkUrl="https://ewager1.github.io/randomPasswordGenerator/"
          viewCodeUrl="https://github.com/Ewager1/randomPasswordGenerator"
        />
        <ProjectCard
          title="Weather App"
          imgUrl="./images/weatherAppDemoPic.png"
          cardText="Shows the local forcast for any town in the USA."
          liveLinkUrl="https://ewager1.github.io/Weather-App/"
          viewCodeUrl="https://github.com/Ewager1/Weather-App"
        />
      </Row>
    </>
  );
}

export default MyProjects;
