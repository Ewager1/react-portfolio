import React from "react";
import "./styles.css";
import { Row } from "react-bootstrap";
import SkillSetIcon from "../icon";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/*Note: Top row of icon has a data delay to look good with nav animation, 
but subsequent rows have no delay for better UX */

function SkillSet() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Row sm="12" md="3" lg="5" className="mb-5">
        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          className="skillSetIcon"
          iconText="React"
          altText="React Icon"
          imgUrl="/icons/reactIcon.png"
          isLink='false'
        />

        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="Javascript"
          altText="Javascript Icon"
          imgUrl="/icons/jsIcon.png"
          className="skillSetIcon"
          isLink='false'
        />

        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="Bootstrap"
          altText="Bootstrap Icon"
          imgUrl="/icons/bootstrapIcon.png"
          className="skillSetIcon"
          isLink='false'
        />

        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="CSS3"
          altText="CSS Icon"
          imgUrl="/icons/cssIcon.png"
          className="skillSetIcon"
          isLink='false'
        />
        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="Sql"
          altText="Sql Icon"
          imgUrl="/icons/mySQLIcon.png"
          className="skillSetIcon"
          isLink='false'
        />

        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="NodeJs"
          altText="NodeJs Icon"
          imgUrl="/icons/nodeJsIcon.png"
          className="skillSetIcon"
          isLink='false'
        />
        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="MongoDb"
          altText="MongoDb Icon"
          imgUrl="/icons/mongoDb Icon.png"
          className="skillSetIcon"
          isLink='false'
        />
        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="Progressive Web App"
          altText="Aos Icon"
          imgUrl="/icons/pwaIcon.png"
          className="skillSetIcon"
          isLink='false'
        />

        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="Github"
          altText="Github Icon"
          imgUrl="/icons/github-icon.png"
          className="skillSetIcon"
          isLink='false'
        />

        <SkillSetIcon
          dataAos="fade-up"
          dataAosDelay="500"
          iconText="Rest Api"
          altText="Rest Api Icon"
          imgUrl="/icons/restApiIcon.png"
          className="skillSetIcon"
          isLink='false'
        />
      </Row>
    </>
  );
}
export default SkillSet;
