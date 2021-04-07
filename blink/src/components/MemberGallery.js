import React from "react";
import { Image } from "react-bootstrap";
import img1 from "../assets/jisoo/4.png";
import JisooImages from "../data/JisooImages";
import JennieImages from "../data/JennieImages";
import RoseImages from "../data/RoseImages";
import LisaImages from "../data/LisaImages";
import "../styles/MemberGallery.css";

let Images = [];
var BrowserURL = window.location.pathname;

function MemberGallery() {
  if (BrowserURL == "/gallery-jisoo") {
    Images = JisooImages;
  } else if (BrowserURL == "/gallery-jennie") {
    Images = JennieImages;
  } else if (BrowserURL == "/gallery-rose") {
    Images = RoseImages;
  } else if (BrowserURL == "/gallery-lisa") {
    Images = LisaImages;
  }
  return (
    <div className="mem-gallery-root">
      {Images.map((item, key) => {
        return (
          <div style={{ display: "inline" }}>
            <Image className="member-gallery-img" src={item} />
          </div>
        );
      })}
    </div>
  );
}

export default MemberGallery;
