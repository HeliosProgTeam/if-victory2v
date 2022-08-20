import React from 'react';
import Image from "next/image";
import BgImg from "../sections/MainSection/bg.jpg";

const Img = ({src,alt,...props}) => {
  return (
    <>
      <Image className='next-img' src={src} alt={alt} {...props}/>
    </>
  );
};

export default Img;