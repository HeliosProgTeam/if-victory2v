import React from "react";
import Img from "../Image";

const BannerImg = ({src,alt, desc,...props}) => {
  return (
    <div className="banner" >
      <div className="banner__img">
        <Img src={src} alt="image" {...props} />
      </div>
      <p className='banner__title'>{desc}</p>
    </div>
  );
};

export default BannerImg;
