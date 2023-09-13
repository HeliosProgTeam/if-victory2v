import React from "react";
import Image from "next/image";

const Img = ({ src, alt, ...props }) => {
  return (
    <>
      <div className="next-img" >
        <Image src={src} alt={alt} loading="eager" {...props}/>
      </div>
    </>
  );
};

export default Img;
