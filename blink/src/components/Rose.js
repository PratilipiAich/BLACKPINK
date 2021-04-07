import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import rose1 from "../assets/rose/rose1.gif";
import rose3 from "../assets/rose/rose3.gif";
import img15 from "../assets/rose/15.png";
import "../styles/Rose.css";

function Rose() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="rose-root">
        <div className="rose-banner">
          <Image className="rose-banner-img" src={img15} />
        </div>
        <div className="jisoo-facts">
          <ul>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Name</Col>
                <Col> Roseanne Park<br/>
                Park Chaeyoung  (박채영))</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Nicknames</Col>
                <Col>
                Rose<br/>Rosie<br/>Pasta<br/>Rosie Posie
                </Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Date of Birth </Col>
                <Col>February 11, 1997</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Place of Birth </Col>
                <Col>Auckland, New Zealand</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Languages</Col>
                <Col>Korean, Japanese and English</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Height</Col>
                <Col> 5’ 6” (168cm)</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Weight</Col>
                <Col> 46kg (101lbs)</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Blood Type</Col>
                <Col>B+</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Star Sign</Col>
                <Col>Aquarius</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Job</Col>
                <Col>Singer</Col>
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
        </div>
        <div className="jisoo-quote">
          “When you just feel the most hollow, life gives you sweets.”
        </div>
        <div>
          <a  href="https://www.youtube.com/watch?v=CKZvWhCqx1s" target="_blank" >
            <Image  className="rose-solo" src={rose1}/>
            
            </a>
            <a href="https://www.youtube.com/watch?v=K9_VFxzCuQ0" target="_blank" >
            <Image  className="rose-solo" src={rose3}/></a>
            
        </div>
        <p className="rose-tag">On The Ground</p>
            <p className="rose-tag">Gone</p>
        <div className="rose-text">
          Roseanne Chae-young Park (born February 11, 1997 in Auckland, New
          Zealand) better known as Rosé, is an Australian singer, based in South
          Korea. She is a member of Blackpink.
          <br />
          Born as Roseanne Park in Auckland, New Zealand, she was given the
          Korean name of Park Chae-young and grew up in Melbourne, Australia.
          <br />
          As a child, Rosé already had a passion for singing. She was a part of
          their church's choir in Australia. When she found out that YG
          Entertainment were holding their auditions in Sydney, Australia back
          in 2012, she quickly went there coming all the way from Melbourne to
          audition. Rose ranked first in the auditions, and she became a part of
          YG Entertainment on the same day. After training for four years, YG
          finally put her as the main vocalist and lead dancer of Blackpink. She
          was the last member to be revealed in the band. She attended
          Canterbury Girls' Secondary College in Melbourne, Australia.
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "8%" }}>
        <a href="/gallery-rose" className="gallery-cta">
          <span>Gallery</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Rose;
