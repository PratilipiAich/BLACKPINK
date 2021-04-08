import React from 'react';
import SlideShow from 'react-image-show';
import LisaImages from "../data/LisaImages";
class ReactGallery extends React.Component {
  
    render() {
      const urlArray = LisaImages
    return ( <div style={{marginTop: "3%"}}>
      <SlideShow
        images={urlArray}
        width="950px"
        imagesWidth="900px"
        imagesHeight="470px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
         thumbnails fixedImagesHeight
      /></div>
    );
  }

}
export default ReactGallery