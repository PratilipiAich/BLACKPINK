import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import lisa1 from "../assets/lisa/lisa1.gif";
import img10 from "../assets/lisa/10.png";
import "../styles/Lisa.css";
import lisaPet1 from "../assets/lisa/lisaPet1.jpg";
import lisaPet2 from "../assets/lisa/lisaPet5.jpg";
import lisaPet3 from "../assets/lisa/lisaPet3.jpg";
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
function Lisa() {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <div className="lisa-root">
        <div className="lisa-banner">
          <Image className="lisa-banner-img" src={img10} />
        </div>
        <div className="jisoo-facts">
          <ul>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Name</Col>
                <Col>
                  Lalisa Manoban (리사) <br />
                  Pranpriya Manoban <br />
                  (ปราณปริยา มโนบาล)
                </Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Nicknames</Col>
                <Col>
                  Limario
                  <br />
                  Lili
                  <br />
                  Pokpak
                  <br />
                  Flying Lisa
                  <br />
                  RyeoLisa
                  <br />
                  Elephant Lisa
                  <br />
                  Jolisa
                </Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Date of Birth </Col>
                <Col>MArch 27, 1997</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Place of Birth </Col>
                <Col>Buriram province, Thailand</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Languages</Col>
                <Col>Thai, Korean, Japanese and English</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Height</Col>
                <Col> 5’ 5” (167cmm)</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Weight</Col>
                <Col> 45kg (97lbs)</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Blood Type</Col>
                <Col>O+</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Star Sign</Col>
                <Col>Aries</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Job</Col>
                <Col>Singer, Dancer, Rapper</Col>
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
                <Col>Yellow</Col>
              </Row>
            </li>
            <li className="heart-list">
              <Row className="jisoo-list">
                <Col className="jisoo-facts-bold">Favourite Food</Col>
                <Col>Korean Pork Backbone Stew</Col>
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
        <div className="jisoo-quote">“Enjoy living life to the fullest.”</div>
        <div>
          <a
            href="https://www.youtube.com/channel/UC35HKvKYPkri4Grd5KXl3wQ"
            target="_blank"
          >
            <Image className="jennie-solo" src={lisa1} />
          </a>
        </div>
        <p className="jennie-tag">Lili Film</p>
        <div className="lisa-text">
          <ol className="steps">
            <li>
              Lisa's biological parents' names have not been released to the
              public, her stepfather is Marco Bruschweiler, a swiss renowned
              chef, active in Thailand.
            </li>
            <li>She is the first non-Korean signee to YG Entertainment.</li>
            <li>
              She had her own series called{" "}
              <a
                className="facts"
                href="https://www.youtube.com/watch?v=pAKArz6rq1c"
                target="_blank"
              >
                Lisa TV
              </a>{" "}
              on "OnStyle" network.
            </li>
            <li>
              If she didn't become an artist, then she would have gone to
              Australia to study.
            </li>
            <li>
              Her favorite movie is "About Time" and her favorite book is
              "Little Prince".
            </li>
            <li>
              When she lived in Thailand she had two vocal coaches named OP and
              Kan.
            </li>
            <li>She attended Praphamontree II School in Thailand. </li>
            <li>
              Her dream job when she was younger was to either be a cabin
              attendant or dance teacher.
            </li>
            <li>She grew up with an older sister.</li>

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
                          image={lisaPet1}
                          title="Lisa Pet"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                  <Col>
                    <Card className={classes.cardRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={lisaPet2}
                          title="Lisa Pet"
                        />
                        <CardContent className={classes.content}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.textHead}
                          >
                            Leo (Scottish Fold), Luca (Ragdoll), Lily (Ragdoll)
                            & Louis (British Shorthair)
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
                          image={lisaPet3}
                          title="Lisa Pet"
                        />
                      </CardActionArea>
                    </Card>
                  </Col>
                </Row>
              </Grid>
              {/* <Image className="jisoo-pet-img" src={lisaPet1} />
        <Image className="jisoo-pet-img" src={lisaPet2} />
        <Image className="jisoo-pet-img" src={lisaPet3} />
        <p style={{textAlign:"center", color: "#fb78b0", fontWeight: 600}}>
        Leo	(Scottish Fold), Luca	(Ragdoll), Lily	(Ragdoll) & Louis	(British Shorthair)	 </p> */}
            </div>
            <li>
              Lisa is a cat person and she has five cat, the youngest addition
              of cat is named Lego and her other cats are Lily, Louis, Leo and
              Luca.
            </li>
            <li>Lalisa Manoban is the dance mentor of <a className="facts"
            href="https://www.youtube.com/watch?v=f9LpBqVYHW4"
            target="_blank">Youth With You</a>.</li>
            <li>She said that her sixth sense is rhythm.</li>
            <li>
              In January 2019, Lisa became the muse of Celine, a French luxury
              brand. In March 2019, Lisa signed her first solo endorsement deal
              when she became the new brand presenter for AIS Thailand. In May
              2019, Lisa was announced to be the presenter for the Samsung
              Galaxy S10 in Thailand.
            </li>
            <li>
              she was a member of a dance group named We Zaa Cool along with
              fellow Thai K-pop Idol trainees, Bambam and Ten.
            </li>
            <li>
              She was relvealed on 11th May, 2012 by the{" "}
              <a
                className="facts"
                href="https://www.youtube.com/watch?v=VdhLxKFcOWQ"
                target="_blank"
              >
                "Who's that girl?"{" "}
              </a>
              teaser on YouTube.
            </li>
          </ol>
        </div>
        <div className="jisoo-quote">“YADOM”</div>
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
