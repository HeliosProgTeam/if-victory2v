import React from "react";
import LogoImage from "./logo.svg";
import Image from "next/image";
import Img from "../Image";

const Logo = () => {
  return (
    <div className={"logo"}>
      <div className="logo__img">
        <Img src={LogoImage} alt='hands'/>
      </div>
      <span className="logo__title">IF-Victory</span>
    </div>
  );
};

export default Logo;
