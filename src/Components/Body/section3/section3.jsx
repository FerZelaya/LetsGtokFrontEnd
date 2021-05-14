import React from "react";
import "./section3.css";
import {  Row, Col } from "react-bootstrap";

import emotes from '../../../img/emoticons.png'

const section3 = () => {
  return (
    <div id="section3" className="section3-main">
      <Row className="inner">
        <Col className={"whyContainer"} md={10} lg={7} sm={11} >
          <h2 className="whyTitle">Why Lets Gtok?</h2>
          <p className="whyText">
            Lets Gtok aims to provide a safe space online for people to share
            and connect with genuine feelings. Users can share their feelings or
            activities even without revealing their identity.
          </p>
          <button className="shareButton">Learn more</button>
        </Col>
        <Col className={"iconRow"} md={4} lg={2}>
          <img src={emotes} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default section3;
