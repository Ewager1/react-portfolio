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
          imgUrl="/images/managerPageView.png"
          cardText="Full-stack Gym Management App with three 3 permissions levels, Auth0, and tons of gym scheduling functionality."
          liveLinkUrl="https://dev-fit-gym-app.herokuapp.com/"
          viewCodeUrl="https://github.com/DustinErwin/Devfit"
        />
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Day Planner"
          imgUrl="/images/dayPlannerDemoPic.png"
          cardText="A Day Planner where user can make and save their events for
          the day."
          liveLinkUrl="https://ewager1.github.io/Basic-Day-Planner/"
          viewCodeUrl="https://github.com/Ewager1/Basic-Day-Planner"
        />
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Couch Surf"
          imgUrl="/images/couchSurfDemoPic.png"
          cardText="A customizable dashboard with games and videos."
          liveLinkUrl="https://ewager1.github.io/CouchSurf-1/"
          viewCodeUrl="https://github.com/Ewager1/CouchSurf-1"
        />

        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Title Interval Timer"
          imgUrl="/images/timerPage.png"
          cardText="Built for the head trainer of Title Boxing, Na as a training tool. Times classes."
          liveLinkUrl="https://ewager1.github.io/Title-Boxin-Class-Timer-/#/"
          viewCodeUrl="https://github.com/Ewager1/Title-Boxin-Class-Timer"
        />
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Password Generator"
          imgUrl="/images/passwordGeneratorDemoPic.png"
          cardText="Produces a password based on the
          user's choice of special characters."
          liveLinkUrl="https://ewager1.github.io/randomPasswordGenerator/"
          viewCodeUrl="https://github.com/Ewager1/randomPasswordGenerator"
        />
        <ProjectCard
          dataAos="fade-up"
          dataAosDelay="500"
          title="Weather App"
          imgUrl="/images/weatherAppDemoPic.png"
          cardText="Shows the local forcast for any town in the USA."
          liveLinkUrl="https://ewager1.github.io/Weather-App/"
          viewCodeUrl="https://github.com/Ewager1/Weather-App"
        />
      </Row>
    </>
  );
}

export default MyProjects;
