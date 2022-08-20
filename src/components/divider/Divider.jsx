import React from "react";
import HandsIcon from "./hands.svg";
import Img from "../Image";

const Divider = () => {
  return (
    <div className="divider">
      <div className="divider__icon">
        <Img src={HandsIcon} alt={"hands"} />
      </div>
    </div>
  );
};

export default Divider;
