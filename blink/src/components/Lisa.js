import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import lisa1 from "../assets/lisa/lisa1.gif";
import img10 from "../assets/lisa/10.png";
import "../styles/Lisa.css";

function Lisa() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="lisa-root">
        <div className="lisa-banner">
          <Image className="lisa-banner-img" src={img10} />
        </div>
        <div className="jisoo-facts">
          <ul>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Name</Col>
                <Col>Lalisa Manoban  (리사) <br/>Pranpriya Manoban <br/>
               (ปราณปริยา มโนบาล)</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Nicknames</Col>
                <Col>Limario<br/>Lili<br/>
                Pokpak<br/>
                Flying Lisa<br/>RyeoLisa<br/>Elephant Lisa
                <br/>Jolisa 
                </Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Date of Birth </Col>
                <Col>MArch 27, 1997</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Place of Birth </Col>
                <Col>Buriram province, Thailand</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Languages</Col>
                <Col>Thai, Korean, Japanese and English</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Height</Col>
                <Col> 5’ 5” (167cmm)</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Weight</Col>
                <Col> 45kg (97lbs)</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Blood Type</Col>
                <Col>O+</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Star Sign</Col>
                <Col>Aries</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Job</Col>
                <Col>Singer, Dancer, Rapper</Col>
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
          “Enjoy living life to the fullest.”
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UC35HKvKYPkri4Grd5KXl3wQ" target="_blank" >
            <Image  className="jennie-solo" src={lisa1}/></a>
        </div>
        <p className="jennie-tag">Lili Film</p>
        <div className="lisa-text">
          Lalisa Manoban (birth name: Pranpriya Manoban, born March 27, 1997 in
          Bangkok, Thailand) better known by her stage name, Lisa, is a Thai
          rapper, singer and dancer, based in South Korea. She is a member of
          Blackpink.
          <br />
          Her birth name is Pranpriya Manoban, she later legally changed her
          first name to Lalisa. Her ethnicity and nationality is Thai. Lisa's
          biological parents' names have not been released to the public, her
          stepfather is Marco Bruschweiler, a swiss renowned chef, active in
          Thailand.
          <br />
          As a child, Lisa was part of a dance group, that performed shows in
          her home country before she made a successful audition to the YG
          Entertainment Competition in 2010 when she was only 13 years old. She
          ranked first place in the said competition, and was offered by Yang
          Hyun-suk to become a YG Entertainment trainee, Lisa agreed to the
          offer. In 2011, she moved to South Korea, to begin her formal training
          in performing, for her K-pop Idol career, which lasted five years.
          During this time, she was a member of a dance group named We Zaa Cool
          along with fellow Thai K-pop Idol trainees, Bambam and Ten.
          <br />
          In 2016, she took her stage name of Lisa and became the main dancer,
          lead rapper, a supporting vocalist and the maknae of K-pop girl group,
          Blackpink, which debuted on August 8, 2016. Lisa is also the first
          non-Korean YG Entertainment artist.
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "8%" }}>
        <a href="/gallery-lisa" className="gallery-cta">
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

export default Lisa;
