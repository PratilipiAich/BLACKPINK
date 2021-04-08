import React from "react";
import jisoo1 from "../assets/jisoo/jisoo1.gif";
import img20 from "../assets/jisoo/20.png";

import { Col, Image, Row } from "react-bootstrap";
import "../styles/Jisoo.css";

function Jisoo() {
  return (
    <div className="jisoo-root">
  

      <div className="jisoo-banner">
        <Image className="jisoo-banner-img" src={img20} />
      </div>
      <div className="jisoo-facts">
        <ul>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Name</Col>
              <Col> Kim Ji-soo (김지수)</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Nicknames</Col>
              <Col>
                {" "}
                Chi Choo
                <br />
                Jichu
                <br />
                Jisoo Turtle Rabbit Kim <br />
                Sooya
              </Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Date of Birth </Col>
              <Col>January 3, 1995</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Place of Birth </Col>
              <Col>Gunpo, Gyeonggi, South Korea</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Languages</Col>
              <Col> Korean, Japanese and English</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Height</Col>
              <Col> 5’ 3” (162cm)</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Weight</Col>
              <Col> 45kg (99lbs)</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Blood Type</Col>
              <Col>A+</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Star Sign</Col>
              <Col>Capricon</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Job</Col>
              <Col>Singer, Actress</Col>
            </Row>
          </li>
          <li>
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Agency</Col>
              <Col>
                YG Entertainment
                <br />
                Interscope Records
              </Col>
            </Row>
          </li>
        </ul>
      </div>    <div style={{paddingTop: "5%", clear: "left"}}>
      <div className="jisoo-quote">
        “I never dream to be anything not possible.”
      </div>
      <div style={{textAlign:"center"}}>
          <a href="https://www.youtube.com/watch?v=502TVfCXK7g&list=PLGSLoP6wB13za_u3D-d4s7Rhs856odqcH&index=10" target="_blank" >
            <Image  className="jennie-solo" src={jisoo1}/></a>
       
        <p className="jennie-tag" >KARTRIDER RUSH with JISOO</p> </div>
      <div className="jisoo-text">
        Jisoo was born on January 3, 1995 in Gunpo. She's a member of Blackpink.
        She became a YG Entertainment trainee in August 2011 and trained for 5
        years. In August 2016, she became a member of Blackpink, as a lead
        vocalist and visualist in the group.
        <br />
        <br />
        Before she becoming a YG trainee, she was known by many for her beauty.
        She was quite popular in school because of her looks and talents. She
        used to study at the School Of Performing Arts High School. She
        eventually transferred schools when her family moved to Seoul.
        <br />
        <br />
        In 2012, she was revealed through the "Who's That Girl?" teaser by YG
        Entertainment. That was followed w/ 2 photos in January 2013. – She can
        speak Korean, Japanese and basic Chinese. According to Jennie (V Live
        App), Jisoo doesn’t speak English (because she’s embarrassed to do it)
        but she can understand it very well.
        <br />
        <br />
        Jisoo is called “Man Heart’s Destroyer” and “Boy Crush”. Jisoo’s Chinese
        zodiac sign is Dog. Jisoo can play the drums and the piano. She has a 4D
        personality. According to Jennie, Jisoo is the mood maker of the group.
        Jisoo has a dog named Dalgom.
      </div>
      <div style={{ textAlign: "center", marginTop: "8%" }}>
        <a href="/gallery-jisoo" className="gallery-cta">
          <span>Gallery</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        {/* <Image className="jisoo-img" src={img5} />
        <Image className="jisoo-img" src={img8} />
        <Image className="jisoo-img" src={img1} /> */}
      </div>
      </div>
    </div>
  );
}

export default Jisoo;
