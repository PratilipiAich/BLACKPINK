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
import rosePet1 from "../assets/rose/rosePet1.jpg";
import rosePet2 from "../assets/rose/rosePet2.jpg";
import rosePet3 from "../assets/rose/rosePet3.jpg";

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
    fontStyle: "italic",
  },
  content: {
    cursor: "default",
  },
  ["@media (max-width:780px)"]: {
    cardRoot: {
      width: "250px",
    },
    media: {
      height: "150px",
      filter: "grayscale(0%)",
      webkitFilter: "grayscale(0%)",
    },
  },
  petRoot: {
    width: "250px",
    margin: "5%",
    background: "transparent",
    textAlign: "center",
  },
  petmedia: {
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    cursor: "default",
  },
  petcontent: {
    cursor: "default",
  },
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
            <li className="heart-list">
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
            <li className="heart-list">
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
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Date of Birth </Col>
                <Col>February 11, 1997</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Place of Birth </Col>
                <Col>Auckland, New Zealand</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Languages</Col>
                <Col>Korean, Japanese and English</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Height</Col>
                <Col> 5’ 6” (168cm)</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Weight</Col>
                <Col> 46kg (101lbs)</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Blood Type</Col>
                <Col>B+</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Star Sign</Col>
                <Col>Aquarius</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Job</Col>
                <Col>Singer</Col>
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
                <Col>Blue</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Favourite Food</Col>
                <Col>Kimchi Stew</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Least Favourite Food</Col>
                <Col>Eel</Col>
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
          <ol className="steps">
            <li>
              Her family consists of her mother, a businesswoman, her father, a
              lawyer, and sister, Alice Park, who is four years her senior and
              also a lawyer
            </li>
            <li>
              She was born in New Zealand and raised in Melbourne, Australia and
              was a part of her church's choir.
            </li>
            <li>She graduated from Canterbury Girls Secondary College.</li>
            <li>She used to be a cheerleader when she lived in Australia.</li>
            <li>She wears sweet and fruity scented perfume.</li>
            <li>
              She has dyed her hair a probable five times, a light orange, the
              light orange with a pink, a dark brown, red, and now it's rose
              gold.
            </li>
            <li>
              Rose's ideal type: Someone nice and genuine, with a good/ unique
              voice. She said there are many sunbaenims with great voices, but
              among them, Big Bang stand out.
            </li>
            <li>She said that her guitar is her weapon.</li>
            <li>One of her role models is IU.</li>
            <div className="jisoo-pet">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
              >
                <Row className="row">
                  <Col>
                    <Card className={classes.petRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.petmedia}
                          image={rosePet1}
                          title="rose Pet"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                  <Col>
                    <Card className={classes.petRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.petmedia}
                          image={rosePet2}
                          title="rose Pet"
                        />
                        <CardContent className={classes.petcontent}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.textHead}
                          >
                            Hank (adopted dog), Fish (Eunbyul and Orange)
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Col>
                  <Col>
                    <Card className={classes.petRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.petmedia}
                          image={rosePet3}
                          title="rose Pet"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                </Row>
              </Grid>
              {/* <Image className="jisoo-pet-img" src={rosePet1} />
              <Image className="jisoo-pet-img" src={rosePet2} />
              <Image className="jisoo-pet-img" src={rosePet3} />
              <p
                style={{
                  textAlign: "center",
                  color: "#fb78b0",
                  fontWeight: 600,
                }}
              >
                Hank (adopted dog), Fish (Eunbyul and Orange){" "}
              </p> */}
            </div>
            <li>
              In 2012, she placed 1st at the YG Entertainment audition in
              Australia. She officially joined YG in May of 2012.
            </li>
            <li>Fourth and final member to be introduced.</li>
            <li>She appeared in G-Dragon's 'Without You'.</li>
            <li>She trained for 4 years and 2 months.</li>
            <li>She was on "King Of Masked Singer ".</li>
            <li>Rosé is the newest YSL Beauty ambassador.</li>
          </ol>
        </div>

      <div className="jisoo-quote">
        “I think that being able to be vulnerable is the most independent thing
        someone can be at times.”
      </div>      </div>
      <div style={{ textAlign: "center", marginTop: "5%" }}>
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
