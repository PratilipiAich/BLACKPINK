import React from "react";
import { Image } from "react-bootstrap";
import img1 from "../assets/jisoo/4.png";
import JisooImages from "../data/JisooImages";
import JennieImages from "../data/JennieImages";
import RoseImages from "../data/RoseImages";
import LisaImages from "../data/LisaImages";
import "../styles/MemberGallery.css";
import ReactGallery from "./ReactGallery";
import SlideShow from 'react-image-show';
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
    <div style={{marginTop: "3%"}}>
      <SlideShow
        images={Images}
        width="950px"
        imagesWidth="900px"
        imagesHeight="470px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
         thumbnails fixedImagesHeight
      /></div>
    // <div className="mem-gallery-root">
    //   {Images.map((item, key) => {
    //     return (
    //       <div style={{ display: "inline" }}>
    //         <Image onclick={handleClick()} className="member-gallery-img" src={item} />
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default MemberGallery;
