import React from "react";
import LogoImage from "../../../public/images/logov2.jpg";
import Img from "../Image";

const Logo = () => {
  return (
    <div className={"logo"}>
      <div className="logo__img">
        <Img src={LogoImage} alt='hands'/>
      </div>
      <span className="logo__title">ПрикарпатГарант</span>
    </div>
  );
};

export default Logo;
