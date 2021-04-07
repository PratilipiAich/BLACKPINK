import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../styles/Television.css";
import bpHouse from "../assets/tv/bp-house.gif";
import bpDiaries from "../assets/tv/bp-diaries.gif";
import bpNetflix from "../assets/tv/bp-netflix.gif";
import bp24365 from "../assets/tv/24365.gif";
import bpHawaii from "../assets/tv/bp-hawaii.gif";
import bpSummerDiary from "../assets/tv/bp-summer.gif";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
function Television() {
  return (
    <div className="tv-root">
      <div className="yt-link">
        <Grid>
          <Row>
            <Col className="container">
              <a
                // href="/24-365"
                href="https://www.youtube.com/watch?v=ZjGiK87EaQ0&list=PLNF8K9Ddz0kIrPevRMAxtlj5_BK7KPg57&index=17"
              >
                <Image
                  className="tv-img"
                  src={bp24365}
                  alt="Blackpink 24/365"
                />
                <div class="middle">
                  <div class="text">24/365<br/>with<br/>BLACKPINK</div>
                </div>
              </a>
            </Col>
            <Col className="container">
              <a
                // href="/light-up-the-sky"
                href="https://www.youtube.com/watch?v=7jx_vdvxWu0"
              >
                <Image
                  className="tv-img"
                  src={bpNetflix}
                  alt="Blackpink Light Up the Sky"
                />
                <div class="middle">
                  <div class="text">BLACKPINK:<br/>LIGHT UP THE SKY<br/>| Netflix |</div>
                </div>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="container">
              {/* <Link
                to={{
                  pathname:'/blackpink-house',
                tvProps: 'house'}}
              > */}
              <a href="https://www.youtube.com/watch?v=WBdQnhwO4gQ&list=PLNF8K9Ddz0kJWl_ftRAo0aNJCSZlQVkRd">
                <Image className="tv-img" src={bpHouse} alt="Blackpink House" />
                <div class="middle">
                  <div class="text">BLACKPINK<br/>HOUSE</div>
                </div>
              </a>
            </Col>
            <Col className="container">
            {/* <Link
                to={{
                  pathname:'/blackpink-diaries',
                tvProps: 'diaries'}}
              > */}
              <a href="https://www.youtube.com/watch?v=73ZA1phZIeM&list=PLNF8K9Ddz0kIPqeB0P0DNtDL10w3mko_q&index=16">
                <Image
                  className="tv-img"
                  src={bpDiaries}
                  alt="Blackpink Diaries"
                />
                <div class="middle">
                  <div class="text">BLACKPINK<br/>DIARIES</div>
                </div>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="container">
              <a
                // href="/summer-diaries-2019"
                href="https://www.youtube.com/watch?v=wCEulfWiVUk&t=2s"
              >
                <Image
                  className="tv-img"
                  src={bpHawaii}
                  alt="Blackpink Summer Diaries 2019"
                />
                <div class="middle">
                  <div class="text">BLACKPINK<br/>SUMMER DIARIES<br/>2019</div>
                </div>
              </a>
            </Col>
            <Col className="container">
              <a
                // href="/summer-diaries-2020"
                href="https://www.youtube.com/watch?v=wCEulfWiVUk&t=2s"
              >
                <Image
                  className="tv-img"
                  src={bpSummerDiary}
                  alt="Blackpink Summer Diaries 2020"
                />
                <div class="middle">
                  <div class="text">BLACKPINK<br/>SUMMER DIARIES<br/>2020</div>
                </div>
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
}

export default Television;
