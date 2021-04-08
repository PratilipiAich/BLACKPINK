import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import rose1 from "../assets/rose/rose1.gif";
import rose3 from "../assets/rose/rose3.gif";
import img15 from "../assets/rose/15.png";
import "../styles/Rose.css";
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

function Rose() {
  const classes = useStyles();
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
                <Col>
                  {" "}
                  Roseanne Park
                  <br />
                  Park Chaeyoung (박채영))
                </Col>
              </Row>
            </li>
            <li>
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Nicknames</Col>
                <Col>
                  Rose
                  <br />
                  Rosie
                  <br />
                  Pasta
                  <br />
                  Rosie Posie
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
          <Grid container spacing={0} direction="column" alignItems="center">
            <Row className="row">
              <Col>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <a
                      href="https://www.youtube.com/watch?v=CKZvWhCqx1s"
                      target="_blank"
                    >
                      <CardMedia
                        className={classes.media}
                        image={rose1}
                        title="On The Ground"
                      />
                    </a>
                    <CardContent className={classes.content}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.textHead}
                      >
                        On The Ground
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
              <Col>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <a
                      href="https://www.youtube.com/watch?v=K9_VFxzCuQ0"
                      target="_blank"
                    >
                      <CardMedia
                        className={classes.media}
                        image={rose3}
                        title="Gone"
                      />
                    </a>
                    <CardContent className={classes.content}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.textHead}
                      >
                        Gone
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
            </Row>
          </Grid>
        </div>
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
