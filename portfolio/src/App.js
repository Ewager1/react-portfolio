import "./App.css";
import ContentContainer from "./components/contentContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import PageTitle from "./components/pageTitle";
import AboutMe from "./components/aboutMe";
import MyProjects from "./components/myProjects";
import SkillSet from './components/skillSet'

console.log(AboutMe);

function App() {
  return (
    <>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/images/backgroundPhoto.jpg"}
      >
        <div className="parallax title-section">
          <PageTitle />
        </div>
      </Parallax>
      <ContentContainer sectionTitle="About Me">
        <AboutMe />
      </ContentContainer>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/images/backgroundPhoto.jpg"}
      >
        <div className="parallax "></div>
      </Parallax>
      <ContentContainer sectionTitle="My Projects">
        <MyProjects />
      </ContentContainer>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/images/backgroundPhoto.jpg"}
      >
        <div className="parallax "></div>
      </Parallax>
      <ContentContainer sectionTitle="Skill-Set">
        <SkillSet />
      </ContentContainer>
    </>
    
  );
}

export default App;
