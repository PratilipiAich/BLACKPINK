import React from "react";
import jisoo1 from "../assets/jisoo/jisoo1.gif";
import img20 from "../assets/jisoo/20.png";
import jisooPet1 from "../assets/jisoo/jisooPet1.jpg";
import jisooPet2 from "../assets/jisoo/jisooPet2.jpg";
import jisooPet3 from "../assets/jisoo/jisooPet4.jpg";

import { Col, Image, Row } from "react-bootstrap";
import "../styles/Jisoo.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardRoot: {
    width: "250px",
    margin: "5%",
    background: "transparent",
    textAlign: "center",
  },
  media: {
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    cursor: "default",
  },
  textHead: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: 1.5,
    color: "#FB78B0",
    fontStyle: "italic",
  },
  content: {
    cursor: "default",
  },
});
function Jisoo() {
  const classes = useStyles();
  return (
    <div className="jisoo-root">
      <div className="jisoo-banner">
        <Image className="jisoo-banner-img" src={img20} />
      </div>
      <div className="jisoo-facts">
        <ul>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Name</Col>
              <Col> Kim Ji-soo (김지수)</Col>
            </Row>
          </li>
          <li className="heart-list">
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
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Date of Birth </Col>
              <Col>January 3, 1995</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Place of Birth </Col>
              <Col>Gunpo, Gyeonggi, South Korea</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Languages</Col>
              <Col> Korean, Japanese and English</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Height</Col>
              <Col> 5’ 3” (162cm)</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Weight</Col>
              <Col> 45kg (99lbs)</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Blood Type</Col>
              <Col>A+</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Star Sign</Col>
              <Col>Capricon</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Job</Col>
              <Col>Singer, Actress</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Agency</Col>
              <Col>
                YG Entertainment
                <br />
                Interscope Records
              </Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Favourite Color</Col>
              <Col>Purple</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Favourite Food</Col>
              <Col>Rice</Col>
            </Row>
          </li>
          <li className="heart-list">
            <Row className="jisoo-list">
              <Col className="jisoo-facts-bold">Least Favourite Food</Col>
              <Col>Seafood</Col>
            </Row>
          </li>
        </ul>
      </div>{" "}
      <div style={{ paddingTop: "5%", clear: "left" }}>
        <div className="jisoo-quote">
          “I never dream to be anything not possible.”
        </div>
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.youtube.com/watch?v=502TVfCXK7g&list=PLGSLoP6wB13za_u3D-d4s7Rhs856odqcH&index=10"
            target="_blank"
          >
            <Image className="jennie-solo" src={jisoo1} />
          </a>
          <p className="jennie-tag">KARTRIDER RUSH with JISOO</p>{" "}
        </div>
        <div className="jisoo-text">
          <ol className="steps">
            <li>
              Her family consists of mother, father, elder brother, elder sister
              and Dalgom.
            </li>
            <li>She doesn't wear perfume.</li>
            <li>She can play the traditional drums and the guitar.</li>
            <li>She is afraid of rabbits and hamsters.</li>
            <li>
              She has a total of 9 piercings, 4 on her left ear and 5 on her
              right ear.
            </li>
            <li>
              She doesn't cry in public as she wants to be strong for her
              members and fans, instead she cries in private.
            </li>
            <div className="jisoo-pet">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
              >
                <Row className="row">
                  <Col>
                    <Card className={classes.cardRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={jisooPet1}
                          title="jisoo Pet"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                  <Col>
                    <Card className={classes.cardRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={jisooPet2}
                          title="jisoo Pet"
                        />
                        <CardContent className={classes.content}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.textHead}
                          >
                            Dalgom (white Maltese)
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Col>
                  <Col>
                    <Card className={classes.cardRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={jisooPet3}
                          title="jisoo Pet"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                </Row>
              </Grid>
              {/* <Image className="jisoo-pet-img" src={jisooPet2} />
              <Image className="jisoo-pet-img" src={jisooPet1} />
              <Image className="jisoo-pet-img" src={jisooPet3} />
              <p
                style={{
                  textAlign: "center",
                  color: "#fb78b0",
                  fontWeight: 600,
                }}
              >
                Dalgom (white Maltese)
              </p> */}
            </div>
            <li>
              She sleeps with her dog Dalgom, so that she doesn't get
              nightmares.
            </li>
            <li>
              Jisoo attended high school at the School of Performing Arts Seoul
              and in 11th grade, she started-off with the drama club at her
              school. She used to dream of becoming a painter and writer.{" "}
            </li>
            <li>
              As a child, she played basketball and attended taekwondo classes.
            </li>
            <li>
              In 2012, she was revealed through the "Who's That Girl?" teaser by
              YG Entertainment
            </li>
            <li>
              Jisoo sang "I Have A Lover" for her YG audition, being the only
              one who sang a ballad and YG told her "You're singing on key at
              least".
            </li>
            <li>
              In December 2019, Jisoo became a local ambassador for Dior's
              cosmetics brand "Dior Beauty".
            </li>
            <li>
              Jisoo partnered with Line Friends to design a character in mobile
              game KartRider Rush+.
            </li>
            <li>Jisoo co-wrote their lead single, "Lovesick Girls"</li>
          </ol>
        </div>
        <div className="jisoo-quote">
          “Life is what we can't expect, we can't just live with probablilty.”
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
