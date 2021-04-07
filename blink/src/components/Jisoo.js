import React from "react";
import jisoo from "../assets/jisoo.jpg";
import img12 from "../assets/jisoo/12.png";
import img13 from "../assets/jisoo/13.png";
import img8 from "../assets/jisoo/8.jpg";
import img1 from "../assets/jisoo/1.jpg";
import img5 from "../assets/jisoo/5.jpg";
import img20 from "../assets/jisoo/20.png";
import img21 from "../assets/jisoo/21.png";
import sign from "../assets/jisoo/sign.png";
import { Col, Image, Row } from "react-bootstrap";
import "../styles/Jisoo.css";

function Jisoo() {
  return (
    <div className="jisoo-root">
      <div className="jisoo-banner">
        <Image className="jisoo-banner-img" src={img20} />
      </div>
      <div className="jisoo-facts">
        <ul >
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Name</Col><Col> Kim Ji-soo 김지수</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Nicknames</Col><Col> Chi Choo<br/>Jichu<br/>Jisoo 
          Turtle Rabbit Kim <br/>Sooya</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Date of Birth </Col><Col>January 3, 1995</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Place of Birth </Col><Col>Gunpo, Gyeonggi, South Korea</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Languages</Col><Col> Korean, Japanese and English</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Height</Col><Col> 5’ 3” (162cmm)</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Weight</Col><Col> 45kg (99lbs)</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Blood Type</Col><Col>A+</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Star Sign</Col><Col>Capricon</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Job</Col><Col>Singer, Actress</Col></Row></li>
          <li><Row className="jisoo-list"><Col className="jisoo-facts-bold">Agency</Col><Col>YG Entertainment<br/>
          Interscope Records</Col></Row></li>
        </ul>
      </div>
      <div className="jisoo-quote">
      “I never dream to be anything not possible.”
      </div>
      <div className="jisoo-text">
        Jisoo was born on January 3, 1995 in Gunpo. She's a member of Blackpink.
        She became a YG Entertainment trainee in August 2011 and trained for 5
        years. In August 2016, she became a member of Blackpink, as a lead
        vocalist and visualist in the group.
        <br /><br/>
        Before she becoming a YG trainee, she was known by many for her beauty.
        She was quite popular in school because of her looks and talents. She
        used to study at the School Of Performing Arts High School. She
        eventually transferred schools when her family moved to Seoul.
        <br /><br/>
        In 2012, she was revealed through the "Who's That Girl?" teaser by YG
        Entertainment. That was followed w/ 2 photos in January 2013. – She can
        speak Korean, Japanese and basic Chinese.
        According to Jennie (V Live App), Jisoo doesn’t speak English (because
        she’s embarrassed to do it) but she can understand it very well.
        <br /><br/>
        Jisoo is called “Man Heart’s Destroyer” and “Boy Crush”. Jisoo’s Chinese
        zodiac sign is Dog. Jisoo can play the drums and the piano. She has a 4D
        personality. According to Jennie, Jisoo is the mood maker of the group.
        Jisoo has a dog named Dalgom.
      </div>
      {/* <div className="jisoo-top">
        <div style={{ float: "right", textAlign: "center" }}>
          <Image className="jisoo-headshot" src={img12} />
          <br />
          <Image className="jisoo-sign" src={sign} />
        </div>
        <div className="jisoo-text">
          She was born in Gunpo, a city in the province of Gyeonggi, South
          Korea. – Jisoo has an older brother (named Kim Junghoon) and an older
          sister. – She trained for 5 years (2011 July). – Jisoo was the third
          member to be revealed. – She can speak Korean, Japanese and basic
          Chinese. – According to Jennie (V Live App), Jisoo doesn’t speak
          English (because she’s embarrassed to do it) but she can understand it
          very well. – Jisoo is called “Man Heart’s Destroyer” and “Boy Crush”.
          – Jisoo’s Chinese zodiac sign is Dog. – Jisoo can play the drums and
          the piano. – She has a 4D personality. – According to Jennie, Jisoo is
          the mood maker of the group. – Jisoo has a dog named Dalgom. 
        </div>
        </div>*/}
      <div style={{ textAlign: "center", marginTop:"5%" }}>
        <Image className="jisoo-img" src={img5} />
        <Image className="jisoo-img" src={img8} />
        <Image className="jisoo-img" src={img1} />
      </div> 
    </div>
  );
}

export default Jisoo;
