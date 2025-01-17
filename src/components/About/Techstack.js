import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaAws } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,

} from "react-icons/di";
import {
  SiMysql,
  SiTypescript,

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaAngular />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
      <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
