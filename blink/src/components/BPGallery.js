import React from "react";
import "../styles/Gallery.css"
import bp2 from "../assets/bp-2.jpg"
import bp3 from "../assets/bp-3.jpg"
import bp4 from "../assets/bp-4.jpg"
import bp5 from "../assets/bp-5.jpg"
import bp6 from "../assets/bp-6.jpg"
import bp7 from "../assets/bp-7.png"
import bp8 from "../assets/bp-8.jpg"
import bp19 from "../assets/bp-19.jpg"
import bp10 from "../assets/bp-10.jpg"
import bp11 from "../assets/bp-11.jpg"
import bp12 from "../assets/bp-12.png"
import bp13 from "../assets/bp-13.jpg"
import bp14 from "../assets/bp-14.jpg"
import bp16 from "../assets/bp-16.jpg"
import bp15 from "../assets/bp-15.jpg"
import bp17 from "../assets/bp-17.jpg"
import bp18 from "../assets/bp-18.jpg"
import bp20 from "../assets/bp-20.jpg"
import bp21 from "../assets/bp-21.jpg"
import bp22 from "../assets/bp-22.jpg"
import bp23 from "../assets/bp-23.jpg"
import bp24 from "../assets/bp-24.jpg"
import bp25 from "../assets/bp-25.jpg"
import { Image } from "react-bootstrap";

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
      <div className="gallery-images">

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


      </div>
    </div>
  );
}

export default BPGallery;
