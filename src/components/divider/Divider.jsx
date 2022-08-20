import React from "react";
import HandsIcon from "./hands.svg";
import Image from "next/image";

const Divider = () => {
  return (
    <div className="divider">
      <div className="divider__icon">
        <Image src={HandsIcon} alt={"hands"} />
      </div>
    </div>
  );
};

export default Divider;
