import React from "react";
import "./styles.css";
import ProjectCard from "../projectCard";
import { Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyProjects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Row className="flex-item">
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Dev Fit"
          imgUrl="./images/managerPageView.png"
          cardText="Full-stack Gym Management system with extensive functionality."
          liveLinkUrl="https://gym-logistical-tracker-duex.herokuapp.com/"
          viewCodeUrl="https://github.com/NewWorldCoder603/Gym-Logistical-Tracker"
        />
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Day Planner"
          imgUrl="./images/dayPlannerDemoPic.png"
          cardText="A Day Planner where user can make and save their events for
          the day."
          liveLinkUrl="https://ewager1.github.io/Basic-Day-Planner/"
          viewCodeUrl="https://github.com/Ewager1/Basic-Day-Planner"
        />
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Couch Surf"
          imgUrl="./images/couchSurfDemoPic.png"
          cardText="A customizable dashboard with games and videos."
          liveLinkUrl="https://ewager1.github.io/CouchSurf-1/"
          viewCodeUrl="https://github.com/Ewager1/CouchSurf-1"
        />

        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Timed Trivia Quiz"
          imgUrl="./images/triviaDemoPic.jpg"
          cardText="  A timed quiz that tracks the user's score based on time."
          liveLinkUrl="https://ewager1.github.io/Coding-Trivia-Game-/"
          viewCodeUrl="https://github.com/Ewager1/Coding-Trivia-Game-"
        />
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Password Generator"
          imgUrl="./images/passwordGeneratorDemoPic.png"
          cardText="Produces a password based on the
          user's choice of special characters."
          liveLinkUrl="https://ewager1.github.io/randomPasswordGenerator/"
          viewCodeUrl="https://github.com/Ewager1/randomPasswordGenerator"
        />
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
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
