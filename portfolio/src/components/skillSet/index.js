import React from "react";
import "./styles.css";
import { Row } from "react-bootstrap";
import SkillSetIcon from "../skillSetIcon";

function SkillSet() {
  return (
    <>
      <Row>
        <SkillSetIcon
          iconText="React"
          altText="React Icon"
          imgUrl="/icons/reactIcon.png"
        />

        <SkillSetIcon
          iconText="Javascript"
          altText="Javascript Icon"
          imgUrl="/icons/jsIcon.png"
        />

        <SkillSetIcon
          iconText="Bootstrap"
          altText="Bootstrap Icon"
          imgUrl="/icons/bootstrapIcon.png"
        />

        <SkillSetIcon
          iconText="CSS3"
          altText="CSS Icon"
          imgUrl="/icons/cssIcon.png"
        />
        <SkillSetIcon
          iconText="Sql"
          altText="Sql Icon"
          imgUrl="/icons/mySQLIcon.png"
        />
      </Row>
      <Row>
        <SkillSetIcon
          iconText="NodeJs"
          altText="NodeJs Icon"
          imgUrl="/icons/nodeJsIcon.png"
        />
        <SkillSetIcon
          iconText="MongoDb"
          altText="MongoDb Icon"
          imgUrl="/icons/mongoDb Icon.png"
        />
        <SkillSetIcon
          iconText="Progressive Web App"
          altText="Aos Icon"
          imgUrl="/icons/pwaIcon.png"
        />

        <SkillSetIcon
          iconText="Github"
          altText="Github Icon"
          imgUrl="/icons/github-icon.png"
        />

        <SkillSetIcon
          iconText="Rest Api"
          altText="Rest Api Icon"
          imgUrl="/icons/restApiIcon.png"
        />
      </Row>
    </>
  );
}
export default SkillSet;
