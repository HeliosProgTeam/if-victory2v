import React from "react";
import Image from "next/image";
import BgImg from "../../public/images/bg.png";

const Img = ({ src, alt, ...props }) => {
  return (
    <>
      <div className="next-img" >
        <Image src={src} alt={alt} {...props}/>
      </div>
    </>
  );
};

export default Img;
