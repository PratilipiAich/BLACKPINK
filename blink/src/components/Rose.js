import React from 'react'
import { Col, Image, Row } from "react-bootstrap";
import rose from "../assets/rose-2.jpg"
import img15 from "../assets/rose/15.png"
import "../styles/Rose.css"

function Rose() {
    return (
        <div style={{textAlign:"center"}}>
      <div className="rose-root">
      <div className="rose-banner">
      <Image className="rose-banner-img" src={img15} />
      </div>
      <div className="rose-text">
      Roseanne Chae-young Park (born February 11, 1997 in Auckland, New Zealand) 
      better known as Rosé, is an Australian singer, based in South Korea. 
      She is a member of Blackpink.
      <br/>
      Born as Roseanne Park in Auckland, New Zealand, she was given the Korean 
      name of Park Chae-young and grew up in Melbourne, Australia.
      <br/>
      As a child, Rosé already had a passion for singing. She was a part of their
       church's choir in Australia. When she found out that YG Entertainment were 
       holding their auditions in Sydney, Australia back in 2012, she quickly went 
       there coming all the way from Melbourne to audition. Rose ranked first in
        the auditions, and she became a part of YG Entertainment on the same day. 
        After training for four years, YG finally put her as the main vocalist and 
        lead dancer of Blackpink. She was the last member to be revealed in the band. 
        She attended Canterbury Girls' Secondary College in Melbourne, Australia.
        </div>
        </div>
        </div>
    )
}

export default Rose
