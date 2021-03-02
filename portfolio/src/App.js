import "./App.css";
import ContentContainer from "./components/contentContainer";
import { Parallax } from "react-parallax";
import PageTitle from "./components/pageTitle";
import AboutMe from "./components/aboutMe";
import MyProjects from "./components/myProjects";
import SkillSet from "./components/skillSet";
import ContactMe from "./components/contactMe";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/images/backgroundPhoto.jpg"}
        bgImageAlt="background photo of table with a cup of coffee"
      >
        <div className="parallax title-section">
          <PageTitle />
        </div>
      </Parallax>
      <ContentContainer sectionTitle="About Me" id="aboutMe">
        <AboutMe />
      </ContentContainer>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/images/backgroundPhoto.jpg"}
      >
        <div className="parallax "></div>
      </Parallax>
      <ContentContainer sectionTitle="My Projects" id="myProjects">
        <MyProjects />
      </ContentContainer>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/images/backgroundPhoto.jpg"}
      >
        <div className="parallax "></div>
      </Parallax>
      <ContentContainer sectionTitle="Skill-Set" id="skillSet">
        <SkillSet />
      </ContentContainer>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/images/backgroundPhoto.jpg"}
      >
        <div className="parallax "></div>
      </Parallax>
      <ContentContainer sectionTitle="Contact Me" id="contactMe">
        <ContactMe />
      </ContentContainer>
    </Router>
  );
}

export default App;
