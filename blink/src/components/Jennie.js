import React from 'react'
import { Col, Image, Row } from "react-bootstrap";
import jennie from "../assets/jennie.jpg"
import img10 from "../assets/jennie/10.png"
import "../styles/Jennie.css"

function Jennie() {
    return (
        <div style={{textAlign:"center"}}>
         <div className="jennie-root">
      <div className="jennie-banner">
      <Image className="jennie-banner-img" src={img10} />
      </div>
      <div className="jennie-text">
      Jennie Kim, known as Jennie, was born in Anyang, South Korea on January 16th, 1996.
    Jennie studied abroad in New Zealand. She joined YG in August 2010.
    <br/>
    Jennie was born in Anyang, South Korea by the name Jennie Kim. 
    Jennie grew up in Auckland, New Zealand until returning in high school. 
    When she moved to Seoul, South Korea, she immediately became a trainee of YG 
    Entertainment in 2010. She was raised abroad, so she is fluent in speaking in English. 
    She is also fluent in Korean and can speak a little Japanese. She was only 14 years 
    old when she joined YG, but she has proved to many that she has a lot of potential in her. 
    She has also collaborated with her fellow YG artists before she was cast as a member 
    of Blackpink. Jennie is said to be the possible leader of the group, but after the band 
    debuted, there was no leader due to their similar ages.
        </div>
        </div>
        </div>
    )
}

export default Jennie
