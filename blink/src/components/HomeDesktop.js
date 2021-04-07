import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import bp from "../assets/bp-1.jpg";
import "../styles/HomeDesktop.css";
import jisoo from "../assets/jisoo.jpg";
import jennie from "../assets/jennie.jpg";
import rose from "../assets/rose-2.jpg";
import lisa from "../assets/lisa.png";
import { Grid } from "@material-ui/core";
function HomeDesktop() {
  return (
    <div className="home-root">
      <div className="bp-img-div">
        <Image className="bp-img" src={bp} />
      </div>
      <div className="bp-text">
        <div className="bold-text">
          <a
            className="facts"
            target="_blank"
            href="https://www.ygfamily.com/artist/Main.asp?LANGDIV=K&ATYPE=2&ARTIDX=70"
          >
            BLΛƆKPIИK (블랙핑크)
          </a>
        </div>
        , a South Korean girl group debuted on August 8th, 2016 under{" "}
        <div className="bold-text">YG Entertainment</div> with album "SQUARE
        UP". The band consists of 4 members:{" "}
        <div className="bold-text">
          <a
            className="facts"
            target="_blank"
            href="https://www.instagram.com/sooyaaa__/"
          >
            Jisoo
          </a>
          ,{" "}
          <a
            className="facts"
            target="_blank"
            href="https://www.instagram.com/lesyeuxdenini/?igshid=1ec6jrrishbby"
          >
            Jennie
          </a>
          ,{" "}
          <a
            className="facts"
            target="_blank"
            href="https://www.instagram.com/roses_are_rosie/"
          >
            Rosé
          </a>
          , and{" "}
          <a
            className="facts"
            target="_blank"
            href="https://www.instagram.com/lalalalisa_m/"
          >
            Lisa
          </a>
        </div>
        .<br/>
        The name “BLACKPINK” represents fiercely beautiful women who overflow
        with talent and set their eyes on dominating the industry. BLACKPINK
        fandom is dearly known as <div className="bold-text">BLINK</div>.
        <br/><br/>
        <div className="bold-text" style={{fontSize: "23px"}}>Tours</div><br/>
      <ul>
        <li>Blackpink Arena Tour (2018)</li>
        <li>In Your Area World Tour (2018–2020)</li>
      </ul>
      <br/>
        <div className="bold-text" style={{fontSize: "23px"}}>Concerts</div><br/>
      <ul>
        <li>Blackpink Japan Premium Debut Showcase (2017)</li>
        <li>Livestream Concert: The Show (2021)</li>
      </ul>
      </div>
      <div className="button-links">
        {/* <button className="song-btn" style={{ marginRight: "120px" }}>
          TRACKS
        </button>
        <button className="song-btn" style={{ marginLeft: "120px" }}>
          TELEVISON
        </button> */}
        <a
          href="https://bp-tracks.netlify.app/"
          target="_blank"
          className="cta"
          style={{ marginRight: "160px", textDecoration: "none" }}
        >
          <span>Tracks</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <a
          href="/television"
          className="cta"
          style={{ marginLeftt: "50px", textDecoration: "none" }}
        >
          <span>Television</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <br/><br/><br/><br/>
        <a
          href="/albums"
          className="cta"
          style={{ marginRight: "160px", textDecoration: "none" }}
        >
          <span>Albums</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <a
          href="/gallery"
          className="cta"
          style={{ marginLeftt: "50px", textDecoration: "none" }}
        >
          <span>Gallery</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
      <br />
      <br />
      <div className="bp-pages">
        <Grid container spacing={5}>
          <Row className="row">
            <Col>
              <a href="/jisoo">
                <Image className="bp-images" src={jisoo} />
              </a>
              <p className="text-head">Kim Jisoo</p>
              <p className="text-subhead">03 Jan, 1995</p>
            </Col>
            <Col style={{ marginLeft: "200px" }}>
              <a href="/jennie">
                <Image className="bp-images" src={jennie} />
              </a>
              <p className="text-head">Jennie Kim</p>
              <p className="text-subhead">16 Jan, 1996</p>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <a href="/rose">
                <Image className="bp-images" src={rose} />
              </a>
              <p className="text-head">Rosé</p>
              <p className="text-subhead">11 Feb, 1997</p>
            </Col>
            <Col style={{ marginLeft: "200px" }}>
              <a href="/lisa">
                <Image className="bp-images" src={lisa} />
              </a>
              <p className="text-head">Lisa</p>
              <p className="text-subhead">27 Jan, 1997</p>
            </Col>
          </Row>
        </Grid>
      </div>
      <br />
    </div>
  );
}

export default HomeDesktop;
