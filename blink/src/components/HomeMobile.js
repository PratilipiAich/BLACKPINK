import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import bp from "../assets/bp-1.jpg";
import "../styles/HomeMobile.css";
import jisoo from "../assets/jisoo.jpg";
import jennie from "../assets/jennie.jpg";
import rose from "../assets/rose-2.jpg";
import lisa from "../assets/lisa.png";
import { Grid } from "@material-ui/core";

function HomeMobile() {
  return (
    <div className="home-mob-root">
      <div className="mob-bp-div">
        <Image className="mob-bp-img" src={bp} />

        <div className="mob-bp-text">
          <div className="mob-bold-text">
            <a
              className="mob-facts"
              target="_blank"
              href="https://www.ygfamily.com/artist/Main.asp?LANGDIV=K&ATYPE=2&ARTIDX=70"
            >
              BLΛƆKPIИK (블랙핑크)
            </a>
          </div>
          , a South Korean girl group debuted on August 8th, 2016 under{" "}
          <div className="mob-bold-text">YG Entertainment</div> with album
          "SQUARE UP". The band consists of 4 members:{" "}
          <div className="mob-bold-text">
            <a
              className="mob-facts"
              target="_blank"
              href="https://www.instagram.com/sooyaaa__/"
            >
              Jisoo
            </a>
            ,{" "}
            <a
              className="mob-facts"
              target="_blank"
              href="https://www.instagram.com/lesyeuxdenini/?igshid=1ec6jrrishbby"
            >
              Jennie
            </a>
            ,{" "}
            <a
              className="mob-facts"
              target="_blank"
              href="https://www.instagram.com/roses_are_rosie/"
            >
              Rosé
            </a>
            , and{" "}
            <a
              className="mob-facts"
              target="_blank"
              href="https://www.instagram.com/lalalalisa_m/"
            >
              Lisa
            </a>
          </div>
          .<br />
          The name “BLACKPINK” represents fiercely beautiful women who overflow
          with talent and set their eyes on dominating the industry. BLACKPINK
          fandom is dearly known as <div className="mob-bold-text">BLINK</div>.
        </div>
      </div>
      <br />
      <div className="tour-info">
        <div className="mob-bold-text" style={{ fontSize: "5.5vw" }}>
          Tours
        </div>
        <br />
        <ul>
          <li className="link-text">Blackpink Arena Tour (2018)</li>
          <li className="link-text">In Your Area World Tour (2018–2020)</li>
        </ul>
        <br />
        <div className="mob-bold-text" style={{ fontSize: "5.5vw" }}>
          Concerts
        </div>
        <br />
        <ul>
          <li className="link-text">Blackpink Japan Premium Debut Showcase (2017)</li>
          <li className="link-text">Livestream Concert: The Show (2021)</li>
        </ul>
      </div>
      <div className="mob-button-links">
        <a
          href="https://bp-tracks.netlify.app/"
          target="_blank"
          className="mob-cta"
          style={{ marginRight: "160px", textDecoration: "none" }}
        >
          <span style={{fontSize: "4vw", marginLeft: "20px"}}>Tracks</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <br />
        <a
          href="/television"
          className="mob-cta"
          style={{ marginLeftt: "50px", textDecoration: "none" }}
        >
          <span style={{fontSize: "4vw", marginLeft:"20px"}}>Television</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <br/>
        <a
          href="/albums"
          className="mob-cta"
          style={{ marginRight: "160px", textDecoration: "none" }}
        >
          <span style={{fontSize: "4vw", marginLeft: "20px"}}>Albums</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <br/>
        <a
          href="/gallery"
          className="mob-cta"
          style={{ marginLeftt: "50px", textDecoration: "none" }}
        >
          <span style={{fontSize: "4vw", marginLeft: "20px"}}>Gallery</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
      <br />
      <br />
      <div className="mob-bp-pages">
        <Grid>
          <Row className="mob-row">
            <Col>
              <a href="/jisoo">
                <Image className="mob-bp-images" src={jisoo} />
              </a>
              <p className="mob-text-head">Kim Jisoo</p>
              <p className="mob-text-subhead">03 Jan, 1995</p>
            </Col>
            <Col>
              <a href="/jennie">
                <Image className="mob-bp-images" src={jennie} />
              </a>
              <p className="mob-text-head">Jennie Kim</p>
              <p className="mob-text-subhead">16 Jan, 1996</p>
            </Col>

            <Col>
              <a href="/rose">
                <Image className="mob-bp-images" src={rose} />
              </a>
              <p className="mob-text-head">Rosé</p>
              <p className="mob-text-subhead">11 Feb, 1997</p>
            </Col>
            <Col>
              <a href="/lisa">
                <Image className="mob-bp-images" src={lisa} />
              </a>
              <p className="mob-text-head">Lisa</p>
              <p className="mob-text-subhead">27 Jan, 1997</p>
            </Col>
          </Row>
        </Grid>
      </div>
      <br />
    </div>
  );
}

export default HomeMobile;
