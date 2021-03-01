import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './styles.css'

function SkillSet(props) {
    return   <Col
    class="col-6 col-md-4 center"
    >
    <img
      src={props.imgUrl}
      alt={props.altText}
      className="skills-icon"
    />
    <p class="bold">{props.iconText}</p>
    </Col>
    }
    
    export default SkillSet
    