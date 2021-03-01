import React from "react";
import "./styles.css";
import { Row } from "react-bootstrap";
import SkillSetIcon from "../skillSetIcon";

function SkillSet() {
  return <>
   <Row>
      <SkillSetIcon
        iconText="React"
        altText="React Icon"
        imgUrl="/icons/reactIcon.png"
      />
    </Row>
  </>
}
export default SkillSet;
