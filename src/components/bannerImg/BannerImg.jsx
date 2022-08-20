import React from "react";
import Image from "next/image";

const BannerImg = ({src,alt, desc,...props}) => {
  return (
    <div className="banner" >
      <div className="banner__img">
        <Image src={src} alt="image" {...props} />
      </div>
      <p className='banner__title'>{desc}</p>
    </div>
  );
};

export default BannerImg;
