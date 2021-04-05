import React from "react";
import jisoo from "../assets/jisoo.jpg";
import img12 from "../assets/jisoo/12.png";
import img13 from "../assets/jisoo/13.png";
import img8 from "../assets/jisoo/8.jpg";
import img18 from "../assets/jisoo/18.jpg";
import img5 from "../assets/jisoo/5.jpg";
import img1 from "../assets/jisoo/1.jpg";
import sign from "../assets/jisoo/sign.png";
import { Col, Image, Row } from "react-bootstrap";
import "../styles/Jisoo.css";

function Jisoo() {
  return (
    <div className="jisoo-root">
      {/* <div className="centered">JISOO</div> */}
      <div className="jisoo-top">
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
      </div>
      <div style={{ textAlign: "center" }}>
        <Image className="jisoo-img" src={img5} />
        <Image className="jisoo-img" src={img8} />
        <Image className="jisoo-img" src={img1} />
      </div>
    </div>
  );
}

export default Jisoo;
