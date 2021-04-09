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
import jenniePet1 from "../assets/jennie/jenniePet1.jpg";
import jenniePet2 from "../assets/jennie/jenniePet2.jpg";
import jenniePet3 from "../assets/jennie/jenniePet3.jpg";


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
      height: "150px",
      filter: "grayscale(0%)",
      webkitFilter: "grayscale(0%)",
    }
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
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Name</Col>
                <Col>Jennie Kim (김제니)</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Nicknames</Col>
                <Col>
                  Jendeukie
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
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Date of Birth </Col>
                <Col>January 16, 1996 </Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Place of Birth </Col>
                <Col>Cheongdam-dong, Gangnam District, Seoul, South Korea</Col>
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
                <Col> 5’ 4” (163cm)</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Weight</Col>
                <Col> 48kg (105lbs)</Col>
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
                <Col>Capricon</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Job</Col>
                <Col>Singer, Rapper</Col>
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
                <Col>Black</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Favourite Food</Col>
                <Col>Milk Flavoured Ice Cream</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Least Favourite Food</Col>
                <Col>Pizza</Col>
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
        <ol className="steps">
          <li>She is an only child.</li>
          <li>She trained for 5 years and 11 months.</li>
          <li>She loves slime, she once played with it for 2 hours straight.</li>
          <li>She is saved as "J" on YG's phone.</li>
          <li>She has a total of 9 piercings, 5 on her left ear and 4 on her right ear.</li>
          <li>She learnt how to ride a horse when she was younger. </li>
          <li>She likes to play with her dog and clean her house when she's stressed.</li>
          <li>She has her own YouTube Channel called "Jennierubyjane Official".</li>
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
                          image={jenniePet1}
                          title="jennie Pet"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                  <Col>
                    <Card className={classes.petRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.petmedia}
                          image={jenniePet2}
                          title="jennie Pet"
                        />
                        <CardContent className={classes.petcontent}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.textHead}
                          >
                           Kuma (pomeranian) & Kai (white cocker spaniel)
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
                          image={jenniePet3}
                          title="jennie Pet"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                </Row>
              </Grid>
        {/* <Image className="jisoo-pet-img" src={jenniePet1} />
        <Image className="jisoo-pet-img" src={jenniePet2} />
        <Image className="jisoo-pet-img" src={jenniePet3} />
        <p style={{textAlign:"center", color: "#fb78b0", fontWeight: 600}}>Kuma (pomeranian)
         & Kai (white cocker spaniel)</p> */}
      </div>
      <li>She studied abroad in Auckland, New Zealand at ACG Parnell College for 5 years.</li>
          <li>Her mother is a director and shareholder of the media company
             CJ E&M and her father owns a hospital.</li>
          <li>She was revealed to be a member on June 1, 2016 and was the first member to be revealed.</li>
          <li>During her predebut days she has a temporary tattoo on her wrist that said "stay strong", 
            to remind her that she would debut someday.</li>
          <li>She became a Chanel Global Ambassador , and attended her first Chanel fashion
             show as a Korean representative during Paris Fashion Week</li>
            <li>In 2012 she featured on labelmate Lee Hi's song "Special", as well as made an appearance 
              on Big Bang's G-Dragon's music video "That XX". 
              In 2013, she featured on G-Dragon's song Black and GG BE by Big Bang's Seungri.</li>
            <li>Jennie co-wrote their lead single, "Lovesick Girls"</li>
      </ol>
      </div>
      </div>
      <div className="jisoo-quote">
          “I am way too hungry to remember the name of the song.”
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
