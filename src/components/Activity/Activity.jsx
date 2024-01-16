import React from "react";
import Img from "../Image";

const Activity = ({ src, alt, title }) => {
  return (
    <div className="activity">
      <div className="activity-img">
        <Img src={src} alt={alt} />
      </div>
      <div className="activity-title">{title}</div>
    </div>
  );
};

export default Activity;
