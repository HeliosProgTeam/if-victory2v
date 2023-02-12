import React from "react";
import ExportedImage from "next-image-export-optimizer";

const Img = ({ src, alt, ...props }) => {
  return (
    <>
      <div className="next-img" >
        <ExportedImage src={src} alt={alt} {...props}/>
      </div>
    </>
  );
};

export default Img;
