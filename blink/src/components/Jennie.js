import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import jennie1 from "../assets/jennie/jennie1.gif";
import jennie2 from "../assets/jennie/jennie2.gif";
import img10 from "../assets/jennie/10.png";
import "../styles/Jennie.css";
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
    width: "30vw",
    // marginRight: "50px",
    // marginLeft: "50px",
    background: "transparent",
    textAlign: "center",
  },
  media: {
    borderRadius: "10px",
    height: "20vw",
    width: "auto",
    marginLeft: "5%",
    marginRight: "5%",
    objectFit: "cover",
    filter: "grayscale(100%)",
    webkitFilter: "grayscale(100%)",
    "&:hover": {
      filter: "none",
      webkitFilter: "grayscale(0)",
      border: "3px solid #FB78B0",
    },
  },
  textHead: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: 1.5,
    color: "#FB78B0",
    fontStyle: "italic"
  },
  content: {
    cursor: "default",
  },
  ['@media (max-width:780px)']: { 
    cardRoot: {
      width: "250px",
    },
    media: {
      height: "150px",}
  }
});

function Jennie() {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <div className="jennie-root">
        <div className="jennie-banner">
          <Image className="jennie-banner-img" src={img10} />
        </div>
        <div className="jisoo-facts">
          <ul>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Name</Col>
                <Col>Jennie Kim (김제니)</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Nicknames</Col>
                <Col>
                  Jendeukie
                  <br />
                  Jendeugi
                  <br />
                  Nini
                  <br />
                  Jen
                  <br />
                  Ruby Jane
                  <br />
                  Human Chanel
                </Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Date of Birth </Col>
                <Col>January 16, 1996 </Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Place of Birth </Col>
                <Col>Cheongdam- dong, Gangnam District, Seoul, South Korea</Col>
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
                <Col> 5’ 4” (163cm)</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Weight</Col>
                <Col> 48kg (105lbs)</Col>
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
                <Col>Capricon</Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Job</Col>
                <Col>Singer, Rapper</Col>
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
          “I honestly wish all four of us could shine together as a group.”
        </div>
        <div>
          <Grid container spacing={0} direction="column" alignItems="center">
            <Row className="row">
              <Col>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <a
                      href="https://www.youtube.com/watch?v=b73BI9eUkjM"
                      target="_blank"
                    >
                      <CardMedia
                        className={classes.media}
                        image={jennie1}
                        title="Solo"
                      />
                    </a>
                    <CardContent className={classes.content}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.textHead}
                      >
                        Solo
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
              <Col>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <a
                      href="https://www.youtube.com/channel/UCNYi_zGmR519r5gYdOKLTjQ"
                      target="_blank"
                    >
                      <CardMedia
                        className={classes.media}
                        image={jennie2}
                        title="Jennierubyjane Official"
                      />
                    </a>
                    <CardContent className={classes.content}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.textHead}
                      >
                        Jennierubyjane Official
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="jennie-text">
          Jennie Kim, known as Jennie, was born in Anyang, South Korea on
          January 16th, 1996. Jennie studied abroad in New Zealand. She joined
          YG in August 2010.
          <br />
          Jennie was born in Anyang, South Korea by the name Jennie Kim. Jennie
          grew up in Auckland, New Zealand until returning in high school. When
          she moved to Seoul, South Korea, she immediately became a trainee of
          YG Entertainment in 2010. She was raised abroad, so she is fluent in
          speaking in English.
          <br />
          She is also fluent in Korean and can speak a little Japanese. She was
          only 14 years old when she joined YG, but she has proved to many that
          she has a lot of potential in her. She has also collaborated with her
          fellow YG artists before she was cast as a member of Blackpink. Jennie
          is said to be the possible leader of the group, but after the band
          debuted, there was no leader due to their similar ages.
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "8%" }}>
        <a href="/gallery-jennie" className="gallery-cta">
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

export default Jennie;
