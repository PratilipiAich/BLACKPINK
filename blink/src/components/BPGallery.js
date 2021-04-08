import React from "react";
import "../styles/Gallery.css"
import BPImages from "../data/BPImages";
import { Image } from "react-bootstrap";
import SlideShow from 'react-image-show';

let Images = BPImages
function BPGallery() {
  return (
    <div className="gallery-root">
      <div className="gallery-links">
        <a
          href="/gallery-jisoo"
          className="gallery-cta"
        >
          <span>Jisoo</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <a
          href="/gallery-jennie"
          className="gallery-cta"
        >
          <span>Jennie</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>

        <a
          href="/gallery-rose"
          className="gallery-cta"
        >
          <span>Rosé</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <a
          href="/gallery-lisa"
          className="gallery-cta"
        >
          <span>Lisa</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
      <div>
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
      {/* <div className="gallery-images">

            <Image className="gallery-img" src={bp2}/>
            <Image className="gallery-img" src={bp3}/>
            <Image className="gallery-img" src={bp4}/>
            <Image className="gallery-img" src={bp5}/>
            <Image className="gallery-img" src={bp6}/>
            <Image className="gallery-img" src={bp7}/>
            <Image className="gallery-img" src={bp8}/>
            <Image className="gallery-img" src={bp10}/>
            <Image className="gallery-img" src={bp11}/>
            <Image className="gallery-img" src={bp12}/>
            <Image className="gallery-img" src={bp14}/>
            <Image className="gallery-img" src={bp15}/>
            <Image className="gallery-img" src={bp16}/>
            <Image className="gallery-img" src={bp17}/>
            <Image className="gallery-img" src={bp18}/>
            <Image className="gallery-img" src={bp19}/>
            <Image className="gallery-img" src={bp20}/>
            <Image className="gallery-img" src={bp21}/>
            <Image className="gallery-img" src={bp22}/>
            <Image className="gallery-img" src={bp23}/>
            <Image className="gallery-img" src={bp24}/>
            <Image className="gallery-img" src={bp25}/>


      </div> */}
    </div>
  );
}

export default BPGallery;
